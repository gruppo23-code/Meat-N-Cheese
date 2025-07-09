import {Container, Typography, Button, Grid, Box, IconButton, Badge, Dialog, DialogTitle, DialogContent, DialogActions, useMediaQuery} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useState } from "react"
import CardBurgerMenu from "../components/CardBurgerMenu"
import { useTheme } from "@mui/material"

const menuItems = [
    { id: 1, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 2, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 3, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 4, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 5, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 6, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 7, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 8, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
    { id: 9, name: "Spicy Smashburger", category: "smashburger", description: "...", price: 9.5, image: "https://picsum.photos/seed/smash1/300/200", allergens: ["Glutine"] },
]

export default function Menu() {
    const [selectedCat, setSelectedCat] = useState("tutti")
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const categories = [
        { value: "tutti", label: "Tutti" },
        { value: "smashburger", label: "Smashburger" },
        { value: "hotdog", label: "Hot Dog" },
        { value: "pulledpork", label: "Pulled Pork" },
        { value: "pollo", label: "Pollo" },
        { value: "fritti", label: "Fritti" },
        { value: "bevande", label: "Bevande" },
    ]

    const handleAddToCart = (item) => {
        setCart((prev) => [...prev, item])
    }

    const handleRemoveFromCart = (itemToRemove) => {
        setCart((prev) => {
            const index = prev.findIndex(item => item.id === itemToRemove.id)
            if (index !== -1) {
                const updated = [...prev]
                updated.splice(index, 1)
                return updated
            }
            return prev
        })
    }

    const filtered = menuItems.filter(item => {
        return selectedCat === "tutti" || item.category === selectedCat
    })

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
                                image={item.image}
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
                                    <Button size="small" color="error" onClick={() => handleRemoveFromCart(item)}>
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
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF6B35",
                            color: "#fff",
                            fontWeight: "bold",
                            width: "60%",
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
