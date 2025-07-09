import { Card, CardContent, CardMedia, Typography, Box, Button, Chip } from "@mui/material"

export default function CardBurgerMenu({ name, description, price, image, allergens, category }) {
    return (
        <Card
            sx={{
                maxWidth: 400,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: "0 8px 32px rgba(139,69,19,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 40px rgba(139,69,19,0.25)",
                },
                overflow: "hidden",
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={image || "https://picsum.photos/seed/burger-placeholder/600/400"}
                alt={name}
                sx={{ objectFit: "cover" }}
            />

            <CardContent sx={{ p: 3, flexGrow: 1 }}>
                {/* Categoria */}
                {category && (
                    <Chip
                        label={category}
                        size="small"
                        sx={{
                            mb: 1,
                            backgroundColor: "#FFF3ED",
                            color: "#FF6B35",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                        }}
                    />
                )}

                <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", color: "#8B4513", mb: 1 }}>
                    {name}
                </Typography>

                <Typography variant="body2" sx={{ color: "#654321", mb: 2 }}>
                    {description}
                </Typography>

                <Typography variant="body1" sx={{ color: "#FF6B35", fontWeight: "bold", mb: 2 }}>
                    €{price}
                </Typography>

                {allergens?.length > 0 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                        {allergens.map((a, i) => (
                            <Chip key={i} label={a} color="warning" variant="outlined" size="small" />
                        ))}
                    </Box>
                )}

                <Button
                    variant="contained"
                    sx={{
                        background: "#FF6B35",
                        fontWeight: "bold",
                        borderRadius: 2,
                        mt: "auto",
                    }}
                    fullWidth
                >
                    Ordina
                </Button>
            </CardContent>
        </Card>
    )
}