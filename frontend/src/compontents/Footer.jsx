import { Box, Container, Grid, Typography, IconButton, Divider, Link } from "@mui/material"
import { Facebook, Instagram, X } from "@mui/icons-material"

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#2C1810",
                color: "white",
                py: 4,
                textAlign: "center"
            }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Colonna 1: Logo + descrizione */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", md: "flex-start" },
                            textAlign: { xs: "center", md: "left" }
                        }}>
                            <Box
                                component="img"
                                src="/images/Logo_NoBg.png"
                                alt="Meat-N-Cheese Logo"
                                sx={{ height: 60,
                                    width: 150,
                                    mb: 2,
                                    objectFit: "contain"
                                }}
                            />

                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                                Il food truck che porta i migliori SmashBurger direttamente a te. Ingredienti freschi, sapori autentici e qualità premium su ruote.

                            </Typography>

                        </Box>

                    </Grid>

                    {/* Colonna 2: Link utili */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Link Utili
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography sx={{ color: "#FF6B35" }}>Menù</Typography>
                            <Typography sx={{ color: "#FF6B35" }}>Dove Siamo</Typography>
                            <Typography sx={{ color: "#FF6B35" }}>Chi Siamo</Typography>
                            <Typography sx={{ color: "#FF6B35" }}>Contattaci</Typography>
                        </Box>

                    </Grid>

                    {/* Colonna 3: Social */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Seguici
                        </Typography>
                        <Box sx={{ display: "flex",
                            gap: 2,
                            mt: 1
                        }}>
                            <IconButton  sx={{ color: "white",
                                backgroundColor: "#FF6B35",
                                '&:hover': { backgroundColor: "#E55A2B" },
                                width: 42,
                                height: 42 }}>
                                <Facebook />
                            </IconButton>

                            <IconButton  sx={{ color: "white", backgroundColor: "#FF6B35", '&:hover': { backgroundColor: "#E55A2B" }, width: 42, height: 42 }}>
                                <Instagram />
                            </IconButton>

                            <IconButton  sx={{ color: "white",
                                backgroundColor: "#FF6B35",
                                '&:hover': { backgroundColor: "#E55A2B" },
                                width: 42, height: 42
                            }}>
                                <X />
                            </IconButton>

                        </Box>
                    </Grid>
                </Grid>


                {/* Divider + Copyright */}
                <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.1)" }} />

                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        color: "rgba(255,255,255,0.6)"
                    }}>
                    © 2025 Meat-N-Cheese Food Truck. Tutti i diritti riservati.
                </Typography>

            </Container>
        </Box>
    )
}
