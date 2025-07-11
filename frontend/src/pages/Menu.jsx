import {Container, Typography, Button, Grid, Box, IconButton, Badge, Dialog, DialogTitle, DialogContent, DialogActions, useMediaQuery} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {useEffect, useState} from "react"
import CardBurgerMenu from "../components/CardBurgerMenu"
import { useTheme } from "@mui/material"
import axios from "../api/axiosInstance.js"
import { useNavigate } from "react-router-dom";


export default function Menu() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const [selectedCat, setSelectedCat] = useState("tutti")
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [menuItems, setMenuItems] = useState([]);     //Per la gestione degli item del menu

    useEffect(() => {
        const caricaProdotti = async () => {
            try {
                const response = await axios.get(BASE_URL+'/api/prodotti/getprodotti');
                setMenuItems(response.data); //Assegno soltanto i dati della response, quindi i prodotti
                //console.log("Prodotti caricati:", response.data);
            } catch (error) {
                console.error("Errore nel caricamento dei prodotti:", error);
            }
        };

        caricaProdotti(); // chiamo la funzione al montaggio del componente
    }, []); // ← array vuoto = effetto eseguito solo al primo montaggio del componente Menu

    const categories = [
        { value: "tutti", label: "Tutti" },
        { value: "Smashburger", label: "Smashburger" },
        { value: "Hot Dog", label: "Hot Dog" },
        { value: "Pulled Pork", label: "Pulled Pork" },
        { value: "Pollo", label: "Pollo" },
        { value: "Fritti", label: "Fritti" },
        { value: "Bevande", label: "Bevande" },
    ]



    const handleRemoveFromCart = async (id) => {
        const token = localStorage.getItem("accessToken");

        try {
            await axios.delete(BASE_URL+`/api/ordini/eliminaDaCarrello/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setCart((prev) => prev.filter(item => item.id !== id));

            console.log("Prodotto rimosso dal carrello");
        } catch (err) {
            console.error("Errore nella rimozione:", err);
        }
    };

    const filtered = menuItems.filter(item => { //Filtro per la visualizzazione
        return selectedCat === "tutti" || item.category === selectedCat
    })

    //Gestione carrello

    const navigate = useNavigate()

    const handleAddToCart = async (item) => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const response = await axios.post(
                BASE_URL+'/api/ordini/aggiungicarrello',
                { prodotto: item.id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const ordineCreato = response.data.prodotto;

            // Creo oggetto da inserire nel carrello frontend con ID dell'ordine vero
            const nuovoElemento = {
                id: ordineCreato._id,            // ID dell'ordine creato
                name: item.name,
                price: item.price
            };

            setCart((prev) => [...prev, nuovoElemento]);
            //console.log("Ordine salvato sul backend:", ordineCreato);

        } catch (err) {
            console.error("Errore nell'aggiunta al carrello (backend):", err);
        }
    };




    useEffect(() => {
        const popolaCarrello = async () => {
            const token = localStorage.getItem("accessToken");
            try {
                const response = await axios.get(BASE_URL+"/api/ordini/popolaCarrello", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                });

                //console.log("Risposta dal backend:", response.data);
                setCart(response.data);
            } catch (err) {
                console.error("Errore nel recupero del carrello:", err);
            }
        };

        popolaCarrello();
    }, []);

    const hanleInviaOrdine = async () => {
        const token = localStorage.getItem("accessToken");

        if (!token) {           // Se non c'è token, reindirizza al login
            navigate("/login");
            return;
        }

        try {
            const response = await axios.post(
                BASE_URL+"/api/ordini/inviaOrdine",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Ordine inviato:", response.data);
            // Suota il carrello lato frontend
            setCart([]);
            setOpenCart(false);
        } catch (error) {
            console.error("Errore nell'invio dell'ordine:", error);
        }
    }



    //Fine gestione carrello

    return (
        <Box sx={{ backgroundColor: "#FFF4EC", py: 0.1 }}>
            <Container maxWidth="xl" sx={{ px: { sm: 4, md: 8, lg: 12, xl: 16 }, mt: 4, pb: 5, background: "linear-gradient(to bottom, #FFF4EC 0%, #FFFFFF 100%)" }}>
                <Box sx={{ position: "relative" }}>
                    <Typography variant="h3" align="center" sx={{ fontWeight: "bold", color: "#591216", mb: 4 }}>
                        Il Nostro Menu
                    </Typography>
                    {isMobile ? (
                        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                            <IconButton onClick={() => setOpenCart(true)} sx={{ color: "#FF6B35" }}>
                                <Badge badgeContent={cart.length} color="error">
                                    <ShoppingCartIcon fontSize="large" />
                                </Badge>
                            </IconButton>
                        </Box>
                    ) : (
                        <IconButton
                            onClick={() => setOpenCart(true)}
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                color: "#FF6B35",
                            }}
                        >
                            <Badge badgeContent={cart.length} color="error">
                                <ShoppingCartIcon fontSize="large" />
                            </Badge>
                        </IconButton>
                    )}
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, mb: 5 }}>
                    {categories.map((cat) => (
                        <Button
                            key={cat.value}
                            variant={selectedCat === cat.value ? "contained" : "outlined"}
                            onClick={() => setSelectedCat(cat.value)}
                            sx={{
                                borderRadius: "30px",
                                textTransform: "none",
                                fontWeight: "bold",
                                backgroundColor: selectedCat === cat.value ? "#FF6B35" : "#FFF",
                                color: selectedCat === cat.value ? "#FFF" : "#FF6B35",
                                borderColor: "#FF6B35",
                                "&:hover": {
                                    backgroundColor: "#FF6B35",
                                    color: "#FFF",
                                },
                            }}
                        >
                            {cat.label}
                        </Button>
                    ))}
                </Box>

                <Grid container spacing={5} justifyContent={"center"}>
                    {filtered.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <CardBurgerMenu
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={"images/panini/"+item.image}
                                allergens={item.allergens}
                                category={item.category}
                                onAddToCart={() => handleAddToCart(item)}
                            />
                        </Grid>
                    ))}
                </Grid>

                {filtered.length === 0 && (
                    <Box sx={{ textAlign: "center", mt: 4 }}>
                        <Typography variant="h6" color="text.secondary">
                            Nessun prodotto trovato.
                        </Typography>
                    </Box>
                )}
            </Container>

            <Dialog
                open={openCart}
                onClose={() => setOpenCart(false)}
                fullWidth
                maxWidth="sm"
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 3,
                            backgroundColor: "#FFF4EC",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(12px)",
                            border: "5px solid #FFF4EC",
                        },
                    },
                }}
            >
                <DialogTitle align="center" sx={{ fontWeight: "bold", color: "#591216", alignItems: "center" }}>
                    Il Tuo Carrello
                </DialogTitle>
                <DialogContent dividers>
                    {cart.length === 0 ? (
                        <Typography>Il carrello è vuoto.</Typography>
                    ) : (
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            {cart.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        background: "#fff",
                                        px: 2,
                                        py: 1,
                                        borderRadius: 2,
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                                        fontWeight: "bold",
                                        color: "#8B4513",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    {item.name}
                                    <Button size="small" color="error" onClick={() => handleRemoveFromCart(item.id)}>
                                        Rimuovi
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    )}
                </DialogContent>
                <DialogActions
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        p: 3,
                    }}
                >
                    {cart.length > 0 && (
                        <Typography sx={{ fontWeight: "bold", color: "#591216", alignSelf: "flex-start" }}>
                            Totale: €{cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                        </Typography>
                    )}
                    <Button
                        onClick={hanleInviaOrdine}
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF6B35",
                            color: "#fff",
                            fontWeight: "bold",
                            width: "48%",
                            borderRadius: "30px",
                        }}
                    >
                        Vai al Checkout
                    </Button>
                    <Button
                        onClick={() => setOpenCart(false)}
                        sx={{
                            backgroundColor: "#FF6B35",
                            color: "#fff",
                            fontWeight: "bold",
                            width: "40%",
                            borderRadius: "30px",
                        }}
                    >
                        Chiudi
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
