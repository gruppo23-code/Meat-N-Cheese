import { Box, Container, Typography, IconButton, Divider } from "@mui/material"
import { Facebook, Instagram, X, Phone, Email,  } from "@mui/icons-material"
import RoomIcon from '@mui/icons-material/Room';

export default function Footer() {
    return (
        <Box sx=
                 {{
                     backgroundColor: "#591216",
                     color: "white",
                     py: 6
                 }}>
            <Container
                maxWidth="md">

                {/* Logo e Social */}
                <Box
                    sx=
                        {{ textAlign: "center",
                            mb: 4
                        }}>
                    <Box
                        component="img"
                        src="/images/erasebg-transformed.png"
                        alt="Meat-N-Cheese Logo"
                        sx={{
                            height: 90,
                            width: "auto" ,
                            mb: 3,
                            objectFit: "contain",
                        }}
                    />

                    {/* Social Media */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2, justifyContent: "center",
                            mb: 3
                        }}>

                        <IconButton
                            sx={{
                                color: "white",
                                backgroundColor: "#FF6B35",
                                "&:hover": { backgroundColor: "#E55A2B", transform: "scale(1.1)" },
                                transition: "all 0.3s ease",
                                width: 40,
                                height: 40,
                            }}
                        >
                            <
                                Instagram
                            />

                        </IconButton>

                        <IconButton
                            sx={{
                                color: "white",
                                backgroundColor: "#FF6B35",
                                "&:hover": { backgroundColor: "#E55A2B", transform: "scale(1.1)" },
                                transition: "all 0.3s ease",
                                width: 40,
                                height: 40,
                            }}
                        >
                            <
                                Facebook
                            />

                        </IconButton>
                        <IconButton
                            sx={{
                                color: "white",
                                backgroundColor: "#FF6B35",
                                "&:hover": { backgroundColor: "#E55A2B", transform: "scale(1.1)" },
                                transition: "all 0.3s ease",
                                width: 40,
                                height: 40,
                            }}
                        >
                            <X />
                        </IconButton>
                    </Box>
                </Box>

                {/* Contatti Essenziali */}
                <Box sx=
                         {{
                             display: "flex",
                             flexDirection: "column",
                             alignItems : "center",
                             gap: 4,
                             mb: 4,
                             flexWrap: "wrap"
                         }}>
                    {/* Instagram */}
                    <Box sx=
                             {{
                                 display: "flex",
                                 alignItems: "center",
                                 gap: 1
                             }}>
                        <Phone sx=
                                   {{
                                       color: "#FF6B35",
                                       fontSize: 20
                                   }}
                        />
                        <Typography sx=
                                        {{
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: "1rem"
                                        }}
                        >
                            +39 327 312 7528
                        </Typography>
                    </Box>

                    {/* Posizione */}

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1 }}>
                        <RoomIcon
                            sx={{
                                color: "#FF6B35",
                                fontSize: 20
                            }}
                        />

                        <Typography sx=
                                        {{
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: "1rem" }}
                        >
                            Via Repubblica, Acquaviva delle Fonti (BA)
                        </Typography>
                    </Box>


                    {/* Email */}

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1 }}>
                        <Email
                            sx={{
                                color: "#FF6B35",
                                fontSize: 20
                            }}
                        />

                        <Typography sx=
                                        {{
                                            color: "rgba(255,255,255,0.7)",
                                            fontSize: "1rem" }}
                        >
                            Meat-N-Cheese@gmail.com
                        </Typography>
                    </Box>

                </Box>

                {/* Divider */}
                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", mb: 3 }} />

                {/* Copyright */}
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                        © 2025 Meat-N-Cheese Food Truck. Tutti i diritti riservati.
                    </Typography>

                </Box>

            </Container>
        </Box>
    )
}