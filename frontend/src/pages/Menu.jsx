import {
    Container,
    Typography,
    Button,
    Grid,
    Box,
} from "@mui/material"
import { useState } from "react"
import CardBurgerMenu from "../compontents/CardBurgerMenu"

// Stub per futuro db/Mongo
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

    //da eliminare se le passo direttamente dal DB
    const categories = [
        { value: "tutti", label: "Tutti" },
        { value: "smashburger", label: "Smashburger" },
        { value: "hotdog", label: "Hot Dog" },
        { value: "pulledpork", label: "Pulled Pork" },
        { value: "pollo", label: "Pollo" },
        { value: "fritti", label: "Fritti" },
        { value: "bevande", label: "Bevande" },
    ]

    const filtered = menuItems.filter(item => {
        return selectedCat === "tutti" || item.category === selectedCat
    })

    return (
        <Box>
            <Container
                maxWidth="xl"
                sx=
                    {{
                        px: { sm: 4 ,md : 8,  lg: 12, xl: 16 },
                        mt: 4,
                        pb: 5 }}
            >
                {/* Titolo */}
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#591216", mb: 6 }}
                >
                    Il Nostro Menu
                </Typography>

                {/* Selettore categoria */}
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

                {/* Lista prodotti */}
                <Grid container spacing={5} justifyContent={"center"}  >
                    {filtered.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <CardBurgerMenu
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                allergens={item.allergens}
                            />
                        </Grid>
                    ))}
                </Grid>

                {/* Nessun risultato */}
                {filtered.length === 0 && (
                    <Box sx={{ textAlign: "center", mt: 4 }}>
                        <Typography variant="h6" color="text.secondary">
                            Nessun prodotto trovato.
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    )
}