import { Box, Container, Typography, IconButton, Divider } from "@mui/material"
import { Facebook, Instagram, X, Phone, Email,  } from "@mui/icons-material"
import RoomIcon from '@mui/icons-material/Room';
import useTheme from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//bottoni social Footer
const socialStyle = {
    color: "white",
    backgroundColor: "#FF6B35",
    "&:hover": {
        backgroundColor: "#E55A2B",
        transform: "scale(1.1)",
    },
    transition: "all 0.3s ease",
    width: 40,
    height: 40,
};


// inizio Footer
export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <>
            {isMobile ? (
        <Box sx=
                 {{
                     backgroundColor: "#591216",
                     color: "white",
                     py: 0.5
                 }}>
            <Container
                maxWidth="md">

                {/* Logo e Social */}
                <Box
                    sx=
                        {{ textAlign: "center",
                            mb: 1
                        }}>
                    <Box
                        component="img"
                        src="/images/erasebg-transformed.png"
                        alt="Meat-N-Cheese Logo"
                        sx={{
                            height: 100,
                            width: "auto" ,
                            mb: 1,
                            objectFit: "contain",
                        }}
                    />

                    {/* Social Media */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 4,
                            justifyContent: "center",
                            mb: 1.5
                        }}>

                        <IconButton
                            sx={socialStyle}
                        >
                            <
                                Instagram
                            />

                        </IconButton>

                        <IconButton
                            sx={socialStyle}
                        >
                            <
                                Facebook
                            />

                        </IconButton>

                        <IconButton
                            sx={socialStyle}
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
                             gap: 1,
                             mb: 1,
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
                <Divider sx=
                             {{ backgroundColor: "rgba(255,255,255,0.2)",
                                 mb: 1
                }}
                />

                {/* Copyright */}
                <Box sx=
                         {{
                             textAlign: "center" ,
                }}
                >
                    <Typography variant="body2"
                                sx=
                        {{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "0.9rem" ,
                            mb:0 ,
                            pb: 0,

                    }}
                    >
                        © 2025 Meat-N-Cheese Food Truck. Tutti i diritti riservati.
                    </Typography>

                </Box>

            </Container>
        </Box>


            ) : (
                // Footer desktop
                <Box sx=
                         {{
                    backgroundColor: "#591216",
                    color: "white",
                             py: 3,
                             pb: 1.3
                }}
                >
                    <Container
                        maxWidth="lg"
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                flexWrap: "wrap",
                                gap: 1,
                                columnGap: "40px" ,
                                mb: 0,
                            }}
                        >
                            {/* COLONNA 1: Logo */}

                            <Box
                                sx={{
                                    flex: "1 1 250px",              // occupa spazio flessibile
                                    display: "flex",
                                    justifyContent: "center",      // centro orizzontale
                                    alignItems: "center",          // centro verticale
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/images/erasebg-transformed.png"
                                    alt="Meat-N-Cheese Logo"
                                    sx={{
                                        height: 140,
                                        width: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>

                            {/* COLONNA 2: Descrizione + Social */}
                            <Box
                                sx={{
                                    flex: "2 1 400px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(255,255,255,0.85)",
                                        fontSize: "1.05rem",
                                        maxWidth: "400px",
                                        mb: 2,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Il food truck che porta i migliori SmashBurger direttamente a te. Ingredienti freschi, sapori autentici e qualità premium su ruote.
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        justifyContent: "center",

                                    }}
                                >
                                    <IconButton
                                        sx={socialStyle}>
                                        <Instagram />
                                    </IconButton>

                                    <IconButton
                                        sx={socialStyle}>
                                        <Facebook />
                                    </IconButton>

                                    <IconButton sx={socialStyle}>
                                        <X />
                                    </IconButton>

                                </Box>
                            </Box>



                            {/* COLONNA 3: Contatti */}

                            <Box
                                sx=
                                    {{
                                    flex: "1 1 300px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                    alignItems: "center",
                                    pt: 1.5

                                }}
                            >

                                <Box
                                    sx=
                                         {{ display: "flex",
                                             alignItems: "center",
                                             gap: 1
                                }}
                                >
                                    <Phone
                                        sx=
                                               {{
                                                   color: "#FF6B35",
                                                   fontSize: 25
                                    }}
                                    />
                                    <Typography
                                        sx=
                                                    {{
                                        color: "rgba(255,255,255,0.85)",
                                                        fontSize: "1.05rem"
                                    }}
                                    >
                                        +39 327 312 7528
                                    </Typography>

                                </Box>


                                <Box
                                    sx=
                                         {{
                                             display: "flex", alignItems: "center", gap: 1
                                }}
                                >
                                    <RoomIcon
                                        sx=
                                                  {{ color: "#FF6B35",
                                                      fontSize: 25
                                    }}
                                    />
                                    <Typography
                                        sx=
                                                    {{ color: "rgba(255,255,255,0.85)",
                                                        fontSize: "1.05rem"
                                    }}
                                    >
                                        Via Repubblica, Acquaviva delle Fonti
                                    </Typography>

                                </Box>


                                <Box
                                    sx=
                                         {{
                                             display: "flex",
                                             alignItems: "center",
                                             gap: 1
                                }}
                                >
                                    <Email
                                        sx=
                                            {{
                                                color: "#FF6B35",
                                                fontSize: 25
                                    }}
                                    />
                                    <Typography
                                        sx=
                                                    {{
                                        color: "rgba(255,255,255,0.85)",
                                                        fontSize: "1.05rem"
                                    }}
                                    >
                                        Meat-N-Cheese@gmail.com

                                    </Typography>

                                </Box>

                            </Box>

                        </Box>

                        <Divider
                            sx=
                                {{
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                    mt: 2 ,
                                    mb: 1
                        }}
                        />

                        <Typography
                            variant="body2"
                            align="center"
                            sx=
                                {{
                                    color: "rgba(255,255,255,0.6)",
                                    fontSize: "0.9rem" ,
                                    mt:1.5}
                        }
                        >
                            © 2025 Meat-N-Cheese Food Truck. Tutti i diritti riservati.

                        </Typography>

                    </Container>

                </Box>
            )}

        </>

    );
}