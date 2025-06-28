import {Box, Container, Typography, Button, Grid, Paper, useTheme, useMediaQuery} from "@mui/material"
import { AccessTime } from "@mui/icons-material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import CardBurgerHome from "../compontents/CardBurgerHome";
import { Phone, Email, Instagram, Facebook, X } from "@mui/icons-material"

export default function Home() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"))

    const slideItems = [
        "https://picsum.photos/id/1080/1600/900",
        "https://picsum.photos/id/292/1600/900",
        "https://picsum.photos/id/866/1600/900",
    ]

    const burgers = [
        {
            id: 1,
            title: "Classic Smash",
            description: "100% manzo, cheddar fuso, cipolla caramellata e salsa speciale.",
            price: "€8.90",
            image: "https://picsum.photos/seed/classic-smash/600/400",
            allergens: ["Glutine", "Lattosio"]
        },
        {
            id: 2,
            title: "Spicy BBQ",
            description: "Con bacon croccante, BBQ affumicata e jalapeños.",
            price: "€9.50",
            image: "https://picsum.photos/seed/spicy-bbq/600/400",
            allergens: ["Glutine"]
        },
        {
            id: 3,
            title: "Truffle Deluxe",
            description: "Black Angus, crema al tartufo e formaggio stagionato.",
            price: "€11.00",
            image: "https://picsum.photos/seed/truffle-deluxe/600/400",
            allergens: ["Lattosio"]
        },
        {
            id: 4,
            title: "Smoky Jalapeño",
            description: "Smashburger con cheddar, salsa affumicata e jalapeños.",
            price: "€9.00",
            image: "https://picsum.photos/seed/smoky-jalapeno/600/400",
            allergens: ["Glutine", "Lattosio"]
        },
        {
            id: 5,
            title: "Double Trouble",
            description: "Doppio manzo, doppio cheddar, doppia bontà.",
            price: "€10.50",
            image: "https://picsum.photos/seed/double-trouble/600/400",
            allergens: ["Glutine", "Lattosio"]
        },
        {
            id: 6,
            title: "Veggie Delight",
            description: "Burger vegetale con avocado, pomodori freschi e hummus.",
            price: "€8.50",
            image: "https://picsum.photos/seed/veggie-delight/600/400",
            allergens: ["Sesamo"]
        },
    ]

    return isMobile ? (
        <Box>
            {/* Hero Section Mobile */}
            <Box
                sx=
                    {{
                        position: "relative",
                        height: "65vh"
            }}
            >
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 10000 }}
                    pagination={{ clickable: true }}
                    loop
                    style={{ height: "100%" }}
                >
                    {slideItems.map((src, i) => (
                        <SwiperSlide
                            key={i}
                        >
                            <Box
                                sx={{
                                    height: "65vh",
                                    backgroundImage: `linear-gradient(45deg, rgba(89,18,22,0.6), rgba(255,107,53,0.2)), url(${src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    color: "#fff",
                                    px: 2,
                                }}
                            >
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FFD700", mb: 1 }}>
                                        The SmashBurger Experience
                                    </Typography>
                                    <Typography variant="body1">
                                        Gusto autentico, ogni sera.
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>



            </Box>
            {/* Bottone Ordina Ora Mobile  */}
            <Box
                sx=
                     {{
                         backgroundColor: "#FFF3ED",
                         py: 3,
                         px: 2,
                         display: "flex",
                         justifyContent: "center"
            }}
            >
                <Button
                    variant="contained"
                    sx={{
                        background: "#FF6B35",
                        px: 4,
                        py: 1.5,
                        borderRadius : 3
                    }}
                >
                    Ordina Ora
                </Button>
            </Box>


            {/* La nostra Storia Mobile */}
            <Box sx=
                     {{
                         backgroundColor: "#FFF3ED",
                         py: 4,
                         px: 2
            }}
            >

                <Typography
                    variant="h4"
                    sx=
                    {{
                        color: "#591216",
                        mb: 2,
                        textAlign: "center"
                }}
                >
                    La Nostra Storia
                </Typography>

                <Typography variant="body1"
                            sx=
                                {{
                                    color: "#333",
                                    lineHeight: 1.6
                }}
                >
                    Meat‑N‑Cheese porta su strada il gusto autentico dei panini fatti bene. Freschezza, qualità, passione in ogni morso.
                </Typography>

            </Box>


            {/* Card Best Buy Mobile */}
            <Box sx=
                     {{
                         background: "#FFF4EC",
                         py: 4,
                         px: 2
            }}
            >

                <Typography variant="h4"
                            sx=
                                {{
                                    textAlign: "center",
                                    color: "#591216",
                                    mb: 4
                }}
                >
                    I Nostri Best Buy

                </Typography>


                <Grid
                    container spacing={4}
                >
                    {burgers.map((b) => (
                        <Grid
                            item xs={12} key={b.id}
                        >
                            <CardBurgerHome
                                title={b.title}
                                description={b.description}
                                price={b.price}
                                image={b.image}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Box>

            {/* Parte Locazione Mobile */}
            <Box
                sx=
                    {{
                        py: 10,
                        background: "#fff7f4",
                        px: 2
            }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    sx=
                        {{ color: "#591216",
                            mb: 4
                }}
                >
                    Dove Trovarci
                </Typography>

                <Box
                    sx=
                        {{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4
                }}
                >

                    {/* MAPPA */}
                    <Paper
                        sx=
                            {{ borderRadius: 3,
                                overflow: "hidden"
                    }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.5456165849196!2d16.84374061295296!3d40.90378117124597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347969bc1f24c4f%3A0x9a90e27373b604e5!2sVia%20della%20Repubblica%2C%2070021%20Acquaviva%20delle%20Fonti%20BA!5e0!3m2!1sit!2sit!4v1751048360610!5m2!1sit!2sit"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Paper>

                    {/* Orari apertura Mobile */}
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            background: "linear-gradient(135deg, #FFF8F0 0%, #FFEEDD 100%)",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                        }}
                    >
                        <Box
                            sx=
                                {{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2
                        }}
                        >
                            <AccessTime sx={{ color: "#FF6B35", mr: 1 }} />
                            <Typography
                                variant="h6"
                                sx=
                                    {{ fontWeight: "bold",
                                        color: "#8B4513"
                            }}>

                                Orari di Apertura
                            </Typography>

                        </Box>

                        {[
                            ["Mar. – Ven.", "19:00 – 00:00"],
                            ["Sabato", "19:00 – 02:00"],
                            ["Domenica", "19:00 – 01:00"],
                        ].map(([day, time], i) => (
                            <Box key={i} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    {day}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                                    {time}
                                </Typography>
                            </Box>
                        ))}
                    </Paper>


                    {/* Sezione Contatti Mobile */}
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            background: "linear-gradient(135deg, #FFF8F0 0%, #FFEEDD 100%)",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx=
                                {{ color: "#8B4513",
                                    mb: 2,
                                    fontWeight: "bold"
                        }}
                        >
                            Contatti

                        </Typography>

                        <Box
                            sx=
                                {{ display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    mb: 1
                        }}
                        >
                            <Phone
                                sx=
                                    {{
                                        color: "#FF6B35"
                            }}
                            />

                            <Typography
                                variant="body2"
                            >
                                +39 327 312 7528

                            </Typography>
                        </Box>


                        <Box sx=
                                 {{ display: "flex",
                                     alignItems: "center",
                                     gap: 2,
                                     mb: 1
                        }}
                        >
                            <Email sx=
                                       {{ color: "#FF6B35" }}
                            />
                            <Typography
                                variant="body2"
                            >
                                Meat-N-Cheese@gmail.com
                            </Typography>


                        </Box>

                        <Box
                            sx=
                                {{
                                    display: "flex",
                                    gap: 2,
                                    mt: 2,
                                    justifyContent: "center"
                        }}
                        >
                            <Instagram
                                sx=
                                    {{
                                        color: "#FF6B35"
                            }}
                            />

                            <Facebook sx=
                                          {{
                                              color: "#FF6B35"
                            }}
                            />
                            <X
                                sx=
                                    {{
                                        color: "#FF6B35"
                            }}
                            />

                        </Box>

                    </Paper>

                </Box>

            </Box>

        </Box>






    ) : (


        //Versione Desktop

        <Box>
            {/* Hero Section Desktop */}

            <Box
                sx=
                    {{
                        position: "relative",
                        minHeight: "100vh",
                        overflow: "hidden"
            }}
            >
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    loop
                    style={{ height: "100%" }}
                >
                    {slideItems.map((src, i) => (
                        <SwiperSlide key={i}>
                            <Box
                                sx={{
                                    minHeight: "100vh",
                                    backgroundImage: `linear-gradient(45deg, rgba(89,18,22,0.5), rgba(255,107,53,0.2)), url(${src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Container
                                    sx=
                                        {{ textAlign: "center",
                                            color: "#fff"
                                }
                                }>

                                    <Typography
                                        variant="h2"
                                        sx=
                                            {{
                                                fontWeight: "bold",
                                                color: "#FFD700",
                                                mb: 2
                                    }}
                                    >
                                        The Ultimate Smashburger Experience
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        sx=
                                            {{
                                                mb: 0
                                    }}
                                    >
                                        Fresh ingredients, perfectly smashed patties, and melted cheese perfection.

                                    </Typography>

                                </Container>

                            </Box>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </Box>

            {/*Bottone Ordina Ora Mobile */}
            <Box
                sx=
                    {{
                        backgroundColor: "#FFF3ED",
                        py: 5,
                        textAlign: "center"
            }}
            >

                <Container>

                    <Box
                        sx=
                            {{
                                display: "flex",
                                justifyContent: "center",
                                gap: 3,
                                flexWrap: "wrap"
                    }}
                    >

                        <Button
                            variant="contained"
                            sx=
                                {{
                                    background: "#FF6B35",
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    px: 4,
                                    py: 1.5
                        }}
                        >

                            Ordina Ora

                        </Button>

                        <Button
                            variant="outlined"
                            sx=
                                {{
                                    borderColor: "#FF6B35",
                                    color: "#FF6B35",
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    px: 4,
                                    py: 1.5
                        }}
                        >
                            Dove Trovarci

                        </Button>
                    </Box>

                </Container>

            </Box>


            {/* La Nostra Storia Desktop */}
            <Box
                sx=
                    {{
                        py: 10,
                        background: "#FFF8F0"
            }}
            >

                <Container

                    maxWidth="lg"
                >
                    <Grid
                        container spacing={6} alignItems="center">

                        {/* foto del Truck */}
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <Box
                                    component="img"
                                    src="https://picsum.photos/id/1025/800/600"
                                    alt="Il nostro truck"
                                    sx={{
                                        width: "100%",
                                        maxWidth: 500,
                                        borderRadius: 3,
                                        border: "4px solid #FF6B35",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                                    }}
                                />

                            </Box>

                        </Grid>

                        {/*  La Nostra Storia Testo Desktop */}
                        <Grid
                            item xs={12} md={7}
                        >
                            <Typography
                                variant="h3"
                                sx=
                                    {{
                                        color: "#591216",
                                        fontWeight: "bold",
                                        mb: 2
                            }}
                            >
                                Our Story

                            </Typography>

                            <Typography
                                variant="h6"
                                sx=
                                    {{
                                        color: "#FF6B35",
                                        fontWeight: 500,
                                        mb: 2
                            }}
                            >
                                At Meat‑N‑Cheese, we're passionate about creating the perfect SmashBurger experience.

                            </Typography>


                            <Typography
                                variant="body1"
                                sx=
                                    {{ color: "#333",
                                        lineHeight: 1.8,
                                        mb: 3
                            }}>
                                Our beef is sourced locally, our buns are baked fresh daily, and every burger is smashed to order
                                for that perfect crispy edge and juicy center. We bring gourmet quality to street food convenience.

                            </Typography>

                            {/* Box della nostra storia  */}
                            <Box
                                sx={{
                                    border: "2px dashed #FF6B35",
                                    p: 3,
                                    borderRadius: 2,
                                    backgroundColor: "#FFF1E8",
                                    mb: 3,
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: "#FF6B35",
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                        mb: 1,
                                        letterSpacing: 1,
                                    }}
                                >
                                    Inserisci qui la tua storia:
                                </Typography>


                                <Typography
                                    variant="body2"
                                    sx=
                                        {{ fontStyle: "italic",
                                            color: "#654321",
                                            lineHeight: 1.6
                                }}
                                >
                                    [Qui puoi scrivere la storia del vostro food truck - come è nato, la passione per i burger,
                                    i valori del brand, le origini, cosa vi rende speciali, la vostra missione, etc. Questo spazio
                                    è completamente personalizzabile per raccontare la vostra storia unica.]
                                </Typography>

                            </Box>

                            <Typography
                                variant="body1"
                                sx=
                                    {{ color: "#333",
                                        lineHeight: 1.8
                            }}
                            >
                                Every day we bring fresh ingredients and authentic flavors directly to our community, creating
                                not just meals, but memorable experiences on wheels.

                            </Typography>

                        </Grid>

                    </Grid>

                </Container>

            </Box>

            {/* Best Buy Desktop */}

            <Box
                sx=
                    {{ py: 8, background: "#FFF4EC",
                        px: { xs: 2, md: 0 }
            }}
            >
                <Container
                    maxWidth="lg">
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx=
                            {{
                                color: "#591216",
                                mb: 6
                    }}
                    >
                        I Nostri Best Buy

                    </Typography>

                    <Grid
                        container spacing={4}
                    >
                        {burgers.map((b) => (
                            <Grid
                                item xs={12} sm={6} md={4} key={b.id}
                            >
                                <CardBurgerHome
                                    title={b.title}
                                    description={b.description}
                                    price={b.price}
                                    image={b.image}
                                    allergens={b.allergens}
                                />
                            </Grid>

                        ))}

                    </Grid>

                </Container>

            </Box>


            {/*  Sezione Locazione  */}
            <Box
                sx=
                    {{
                        py: 10,
                        background: "#fff7f4",
                    }}
            >
                <Container

                    maxWidth="lg"
                >
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx=
                            {{ color: "#591216",
                                mb: 6
                    }}>

                        Dove Trovarci

                    </Typography>


                    <Grid
                        container spacing={15}
                        alignItems="center"
                        justifyContent="center">
                        <Grid
                            item xs={12} md={6}>
                            <Paper
                                sx={{
                                    height: "100%",
                                    p: 4,
                                    borderRadius: 3,
                                    background: "linear-gradient(135deg, #FFF8F0 0%, #FFEEDD 100%)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx=
                                        {{
                                            display: "flex",
                                            alignItems: "center",
                                            mb: 3
                                }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx=
                                            {{
                                                fontWeight: "bold",
                                                color: "#8B4513"
                                    }}
                                    >
                                        Contatti

                                    </Typography>

                                </Box>

                                <Box
                                    sx=
                                        {{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 3
                                }}
                                >
                                    <Box
                                        sx=
                                            {{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2
                                    }}
                                    >
                                        <Phone
                                            sx=
                                                {{
                                                    color: "#FF6B35"
                                        }}
                                        />

                                        <Typography
                                            variant="body1"
                                            sx=
                                                {{ color: "#333"
                                        }}
                                        >
                                            +39 327 312 7528

                                        </Typography>

                                    </Box>

                                    <Box
                                        sx=
                                            {{ display: "flex",
                                                alignItems: "center",
                                                gap: 2
                                    }}
                                    >
                                        <Email
                                            sx=
                                                {{
                                                    color: "#FF6B35"
                                        }}
                                        />

                                        <Typography
                                            variant="body1"
                                            sx=
                                                {{
                                                    color: "#333"
                                        }}
                                        >
                                            Meat-N-Cheese@gmail.com

                                        </Typography>

                                    </Box>

                                    <Box
                                        sx=
                                            {{ display: "flex",
                                                justifyContent: "center",
                                                gap: 2,
                                                mt: 2
                                    }}
                                    >
                                        <Instagram
                                            sx
                                                ={{ color: "#FF6B35" }}
                                        />
                                        <Facebook
                                            sx=
                                                {{
                                                    color: "#FF6B35"
                                        }}
                                        />

                                        <X
                                            sx=
                                                {{
                                                    color: "#FF6B35"
                                        }}
                                        />

                                    </Box>

                                </Box>

                            </Paper>

                        </Grid>


                        {/* Card Mappa Desktop  */}
                        <Grid
                            item xs={12} md={6}
                            sx=
                                {{
                                    display: "flex",
                                    justifyContent: "center"
                        }}
                        >

                            <Paper
                                sx={{
                                    width: "100%",
                                    maxWidth: 600,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.5456165849196!2d16.84374061295296!3d40.90378117124597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347969bc1f24c4f%3A0x9a90e27373b604e5!2sVia%20della%20Repubblica%2C%2070021%20Acquaviva%20delle%20Fonti%20BA!5e0!3m2!1sit!2sit!4v1751048360610!5m2!1sit!2sit"
                                    width="100%"
                                    height="300"
                                    style={{ border: 5 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Paper>

                        </Grid>

                        {/* Card Orario Desktop */}
                        <Grid
                            item xs={12} md={6}
                            sx=
                                {{
                                    display: "flex",
                                    justifyContent: "center"
                        }}
                        >

                            <Paper
                                sx={{
                                    width: "100%",
                                    maxWidth: 500,
                                    p: 4,
                                    borderRadius: 3,
                                    background: "linear-gradient(135deg, #FFF8F0 0%, #FFEEDD 100%)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                                }}
                            >
                                <Box
                                    sx=
                                        {{
                                            display: "flex",
                                            alignItems: "center",
                                            mb: 3
                                }}
                                >
                                    <AccessTime
                                        sx=
                                            {{
                                                color: "#FF6B35",
                                                mr: 1,
                                                fontSize: 28
                                    }}
                                    />

                                    <Typography
                                        variant="h5"
                                        sx=
                                            {{
                                                fontWeight: "bold",
                                                color: "#8B4513"
                                    }}
                                    >
                                        Orari di Apertura

                                    </Typography>

                                </Box>

                                <Box
                                    sx=
                                        {{ display: "flex",
                                            flexDirection: "column",
                                            gap: 2
                                }}
                                >
                                    {[
                                        ["Mar. – Ven.", "19:00 – 00:00"],
                                        ["Sabato", "19:00 – 02:00"],
                                        ["Domenica", "19:00 – 01:00"],
                                    ].map(([day, time], i) => (
                                        <Box
                                            key={i}
                                            sx=
                                                {{
                                                    display: "flex",
                                                    justifyContent: "space-between"
                                        }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx=
                                                    {{
                                                        fontWeight: 500,
                                                        color: "#333"
                                            }}
                                            >
                                                {day}

                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                sx=
                                                    {{
                                                        color: "#FF6B35",
                                                        fontWeight: "bold"
                                            }}
                                            >
                                                {time}

                                            </Typography>

                                        </Box>

                                    ))}

                                </Box>

                            </Paper>

                        </Grid>

                    </Grid>

                </Container>

            </Box>

        </Box>
    )
}