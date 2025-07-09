import { Card, CardContent, CardMedia, Typography, Box,  Tooltip } from "@mui/material"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"

export default function CardBurgerHome({ title, description, price, image, allergens = [] }) {
    return (
        <Card
            sx={{
                maxWidth: 350,
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
                image={image || "https://picsum.photos/seed/burger-placeholder/350/200"}
                alt={title || "burger"}
                sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}
            />

            <CardContent
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 3,
                    background: "linear-gradient(135deg, #FFF8DC 0%, #F8F4E6 100%)",
                }}
            >
                <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        color: "#8B4513",
                        mb: 2,
                        fontSize: "1.4rem",
                    }}
                >
                    {title || "Titolo Panino"}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#654321",
                        lineHeight: 1.6,
                        mb: 3,
                        flexGrow: 1,
                        fontSize: "1rem",
                    }}
                >
                    {description || "Descrizione del panino..."}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "auto",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "#FF6B35",
                            fontSize: "1.3rem",
                        }}
                    >
                        {price || "€0.00"}
                    </Typography>

                    {allergens.length > 0 && (
                        <Tooltip title={`Contiene: ${allergens.join(", ")}`} arrow>
                            <WarningAmberIcon sx={{ color: "#FF6B35" }} />
                        </Tooltip>
                    )}
                </Box>
            </CardContent>
        </Card>
    )
}