import {useEffect, useState} from "react";
import {Box, Typography, Grid, Paper, Divider, List, ListItem, ListItemText, Button} from "@mui/material";
import CardBurgerHome from "../components/CardBurgerHome.jsx";
import axios from "axios";
import io from "socket.io-client";
import {jwtDecode} from "jwt-decode";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token = localStorage.getItem("accessToken");
let userId = null;

if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.id;
}

const socket = io(process.env.REACT_APP_BASE_URL, {    //Inizializzo socket
    auth: {
        ruolo: "admin",
        userId: userId
    },
    withCredentials: true
});

export default function OrderPageAdmin() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        // Questo effetto serve a sbloccare la riproduzione audio nei browser moderni.
        // I browser bloccano la riproduzione automatica di audio finché l'utente non interagisce con la pagina.
        // Al primo click dell'utente, riproduciamo silenziosamente l'audio per "autorizzare" future riproduzioni sonore.
        const sbloccaAudio = () => {
            const audio = new Audio("/audio/Gta-V-Notifiche.mp3");
            audio.volume = 0; //L'audio è messo a volume 0, quindi non viene percepito dall'utente
            audio.play().catch(() => {}); // Se fallisce (es. per blocchi del browser), ignoriamo l'errore
            document.removeEventListener("click", sbloccaAudio); // Aspettiamo il primo click dell'utente
        };

        document.addEventListener("click", sbloccaAudio);

        return () => document.removeEventListener("click", sbloccaAudio); // Pulizia dell'effetto quando il componente viene smontato
    }, []);

    const [ordini, setOrdini] = useState([]);

    const visualizzaOrdini = async () => {
        try {
            const response = await axios.get(BASE_URL+'/api/ordini/visualizzaOrdini');
            console.log("Dati ricevuti:", response.data);
            setOrdini(response.data);
        } catch (err) {
            console.error("Errore nel caricamento degli ordini:", err);
        }
    }

    useEffect(() => {
        visualizzaOrdini();
    },[]);

    const consegnaOrdine = async (groupId) => {
        try {
            setOrdini(ordini.filter(ordine => ordine.groupId !== groupId));

            const response = await axios.post(
                BASE_URL + "/api/ordini/consegnato",
                { groupId }, // invio il body con groupId
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            toast.success("✅ Ordine segnato come pronto!");
            await visualizzaOrdini();
        } catch (err) {
            console.error("Errore nella consegna dell'ordine: ", err);
        }
    }

    const contaBurgerTotali = () => {
        const counter = {};
        ordini.forEach((ordine) => {
            ordine.items.forEach((burger) => {
                counter[burger.name] = (counter[burger.name] || 0) + 1;
            });
        });
        return counter;
    };

    const contatori = contaBurgerTotali();

    useEffect(() => {
        socket.on("nuovo_ordine", () => {
            console.log("Nuovo ordine ricevuto");
            toast.success("🛎️ Nuovo ordine ricevuto!");

            const audio = new Audio("/audio/Gta-V-Notifiche.mp3");
            audio.play();

            // Ricarico lista ordini dal server
            visualizzaOrdini();
        });

        return () => socket.off("nuovo_ordine");
    }, []);

    return (
        <Box sx={{ display: "flex", p: 4, gap: 4, flexWrap: "wrap" }}>
            <ToastContainer position="top-right" autoClose={5000} />
            {/* COLONNA SINISTRA: Ordini Card per Utente */}
            <Box sx={{ flex: 3, minWidth: "60%" }}>
                <Typography variant="h4" sx=
                    {{
                    fontWeight: "bold",
                        color: "#591216",
                        mb: 3
                }}
                >
                    Ordini Ricevuti

                </Typography>

                <Grid container spacing={4}> {/* spacing aumentato */}
                    {ordini.map((ordine, index) => (
                        <Grid item xs={12} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: "#FFF4EC",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 2,
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: "#FF6B35", fontWeight: "bold" , mr: 2}}>
                                        Ordine da: {ordine.utente.email}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => consegnaOrdine(ordine.groupId)}
                                        sx={{
                                            backgroundColor: "#FF6B35",
                                            color: "#FFF4EC",
                                            fontWeight: "bold",
                                            textTransform: "none",
                                            borderRadius: 3,
                                            px: 2,
                                            "&:hover": {
                                                backgroundColor: "#e25c28",
                                            },
                                        }}
                                    >
                                        Consegnato
                                    </Button>
                                </Box>

                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent={Array.isArray(ordine.items) && ordine.items.length === 1 ? "center" : "flex-start"}
                                >
                                    {Array.isArray(ordine.items) &&
                                        ordine.items.map((burger, i) => (
                                            <Grid
                                                item
                                                xs={12}
                                                sm={ordine.items.length === 1 ? 6 : 6}
                                                md={ordine.items.length === 1 ? 4 : 4}
                                                key={i}
                                                sx={
                                                    ordine.items.length === 1
                                                        ? { display: "flex", justifyContent: "center" }
                                                        : {}
                                                }
                                            >
                                                <CardBurgerHome
                                                    title={burger.name}
                                                    description={burger.description}
                                                    price={burger.price}
                                                    image={"images/panini/"+burger.image}
                                                    allergens={burger.allergens}
                                                    category={burger.category}
                                                />
                                            </Grid>
                                        ))}
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* COLONNA DESTRA: Counter Totali */}
            <Box sx={{ flex: 1, minWidth: "30%" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#591216", mb: 2 }}>
                    Totale Burger da Preparare
                </Typography>
                <Paper sx={{ p: 2, borderRadius: 3, background: "#fff3ed" }}>
                    <List>
                        {Object.entries(contatori).map(([nome, quantita], index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`${nome}: ${quantita}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Box>
    );
}