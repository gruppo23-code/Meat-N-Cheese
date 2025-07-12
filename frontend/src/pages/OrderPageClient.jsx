import {Box, Typography, Grid, Divider, Paper, Chip, CircularProgress} from "@mui/material";
import CardBurgerMenu from "../components/CardBurgerMenu.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import io from "socket.io-client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token = localStorage.getItem("accessToken");
let userId = null;

if (token) {
    const decoded = jwtDecode(token);       //Decodifico userId dall'accessToken
    userId = decoded.id;
}

const socket = io(process.env.REACT_APP_BASE_URL, {
    auth: {
        ruolo: "cliente",
        userId: userId,
    },
    withCredentials: true,
});

export default function OrderPageClient() {
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

    const fetchOrdiniUtente = async () => {
        try {
            const token = localStorage.getItem("accessToken");

            if (!token) return;

            const decoded = jwtDecode(token); // Decodifico il token

            const res = await axios.get(BASE_URL+`/api/ordini/visualizzaOrdini?userId=${decoded.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOrdini(res.data);
        } catch (err) {
            console.error("Errore nel caricamento degli ordini:", err);
        }
    };

    useEffect(() => {

        fetchOrdiniUtente();
    }, []);


    // Funzione per colorare lo stato                   Chip è un componente per rappresentare informazioni compatte
    const getStatoChip = (stato) => {
        switch (stato) {
            case "in_preparazione":
                return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CircularProgress size={18} sx={{ color: "#ffeb3b" }} />
                        <Chip
                            label="In preparazione"
                            disabled={true}
                            sx={{
                                backgroundColor: "#ffeb3b",
                                color: "#000",
                                fontWeight: "bold",
                                "&.Mui-disabled": {
                                    backgroundColor: "#ffeb3b", // Mantieni il colore anche quando disabilitato
                                    color: "#000",
                                    opacity: 1
                                }
                            }}
                        />
                    </Box>
                );
            case "pronto":
                return (
                    <Chip
                        label="✅ Pronto"
                        disabled={true}
                        sx={{
                            backgroundColor: "#c8e6c9",
                            color: "#2e7d32",
                            fontWeight: "bold",
                            "&.Mui-disabled": {
                                backgroundColor: "#c8e6c9", // Mantieni il colore anche quando disabilitato
                                color: "#2e7d32",
                                opacity: 1 // Mantieni l'opacità piena
                            }
                        }}
                    />
                );
            default:
                return (
                    <Chip
                        label="Stato sconosciuto"
                        disabled={true}
                        sx={{
                            "&.Mui-disabled": {
                                backgroundColor: "#e0e0e0", // Colore di default grigio chiaro
                                color: "#666666", // Testo grigio scuro
                                opacity: 1 // Mantieni l'opacità piena
                            }
                        }}
                    />
                );
        }
    };


    useEffect(() => {           //Gestione real time notifica utente per ordine pronto, ricezione e stampa avviso + audio
        socket.on("ordine_pronto", (gId) => {
            const {groupId} = gId;
            toast.info(`✅ Il tuo ordine con ID ${groupId} è pronto!`);

            const audio = new Audio("/audio/Gta-V-Notifiche.mp3");
            audio.play();

            fetchOrdiniUtente();
        });

        return () => socket.off("ordine_pronto");
    }, []);

    return (
        <Box sx={{ py: 5, px: 3 }}>
            <ToastContainer position="top-right" autoClose={5000} />
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#591216", mb: 4, textAlign: "center" }}>
                I Tuoi Ordini
            </Typography>

            {ordini.length === 0 ? (
                <Typography align="center" color="text.secondary">
                    Nessun ordine trovato.
                </Typography>
            ) : (
                ordini.map((ordine, index) => (
                    <Paper key={index} elevation={4} sx={{ p: 3, mb: 5, borderLeft: "6px solid #591216" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="h6" sx={{ color: "#591216" }}>
                                Ordine #{ordine.groupId}
                            </Typography>
                            {getStatoChip(ordine.stato)}
                        </Box>

                        <Divider sx={{ mb: 3 }} />

                        <Grid container spacing={3}>
                            {ordine.items.map((item, i) => (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <CardBurgerMenu
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        image={"images/panini/" + item.image}
                                        allergens={item.allergens}
                                        category={item.category}
                                        mostraOrdina={false}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                ))
            )}
        </Box>
    );
}
