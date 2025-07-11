import { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import axios from "axios";
import CardBurgerMenu from "../components/CardBurgerMenu.jsx";

export default function OrderPageClient() {
    const [ordini, setOrdini] = useState([]);

    useEffect(() => {
        const fetchOrdiniUtente = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                const res = await axios.get("http://localhost:5001/api/ordini/miei-ordini", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setOrdini(res.data); // Deve essere array di prodotti { name, description, price, image, ... }
            } catch (err) {
                console.error("Errore nel caricamento degli ordini:", err);
            }
        };

        fetchOrdiniUtente();
    }, []);

    return (
        <Box sx={{ py: 5, px: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#591216", mb: 4, textAlign: "center" }}>
                I Tuoi Ordini Inviati
            </Typography>

            {ordini.length === 0 ? (
                <Typography align="center" color="text.secondary">
                    Nessun ordine inviato trovato.
                </Typography>
            ) : (
                <Grid container spacing={4} justifyContent={"center"}>
                    {ordini.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CardBurgerMenu
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={"images/panini/" + item.image}
                                allergens={item.allergens}
                                category={item.category}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}