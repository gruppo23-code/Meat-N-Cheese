import { Box, Typography, Container, Grid, Paper } from "@mui/material";

export default function IngredientiPage() {
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Box textAlign="center" mb={6}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#591216" }}>
                    Ingredienti di Qualità, Gusto Autentico
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, color: "#5D4037" }}>
                    Ogni elemento è selezionato con cura, per offrirti il vero sapore dello smashburger artigianale.
                </Typography>
            </Box>


            {/* Introduzione: Smashburger */}
            <Paper elevation={3} sx={{ p: 4, background: "#FFF4EC", borderRadius: 4, mb: 5 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img
                            src="/images/ingredienti/smashburger.jpg"
                            alt="Smashburger"
                            style={{ width: "100%", borderRadius: "12px" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Cosa sono gli Smashburger?
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Gli <strong>smashburger</strong> sono hamburger preparati pressando la carne sulla piastra bollente,
                            creando una crosticina caramellata e irresistibile. Utilizziamo una miscela 70/30 di manzo per
                            garantire succosità e sapore autentico. Ogni panino viene cucinato al momento, con ingredienti
                            freschi e locali.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>


            {/* 1. Potato Bun */}
            <Paper elevation={3} sx={{ p: 4, background: "#FFF4EC", borderRadius: 4, mb: 5 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img
                            src="/images/ingredienti/potato-bun.jpg"
                            alt="Potato Bun"
                            style=
                                {{
                                    width: "100%",
                                    borderRadius: "12px"
                        }}

                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Potato Bun di MrDobelina
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Pane soffice e leggermente dolce prodotto da <strong>MrDobelina</strong>, ideale per trattenere i sapori del nostro smashburger.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* 2. Carne Smash 70/30 */}
            <Paper elevation={3} sx={{ p: 4, background: "#FFF4EC", borderRadius: 4, mb: 5 }}>
                <Grid container spacing={4} alignItems="center" direction="row-reverse">
                    <Grid item xs={12} md={6}>
                        <img src="/images/ingredienti/carne-smash.jpg" alt="Carne Smash" style={{ width: "100%", borderRadius: "12px" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Carne di Manzo 70/30
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Utilizziamo una miscela <strong>70% magra / 30% grassa</strong> per una crosticina perfetta e un interno succoso. Tagli selezionati di <strong>manzo reale</strong>.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* 3. Pollo Croccante + Coleslaw */}
            <Paper elevation={3} sx={{ p: 4, background: "#FFF4EC", borderRadius: 4, mb: 5 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="/images/ingredienti/chicken-burger.jpg" alt="Pollo Croccante" style={{ width: "100%", borderRadius: "12px" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Chicken Burger con Coleslaw
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Preparato con <strong>sovracoscia di pollo marinata</strong> e fritta croccante, servita su <strong>potato bun</strong>, con fresca <strong>insalata coleslaw</strong> e salsa <strong>BBQ affumicata</strong>.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* 4. Würstel di Maiale */}
            <Paper elevation={3} sx={{ p: 4, background: "#FFF4EC", borderRadius: 4, mb: 5 }}>
                <Grid container spacing={4} alignItems="center" direction="row-reverse">
                    <Grid item xs={12} md={6}>
                        <img src="/images/ingredienti/wurstel.jpg" alt="Würstel di Maiale" style={{ width: "100%", borderRadius: "12px" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Würstel di Maiale Affumicati
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Würstel 100% <strong>maiale</strong> affumicati naturalmente e <strong>cotti a vapore</strong>. Morbidi, aromatici e saporiti: perfetti per i nostri panini hot dog artigianali.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* 5. Pulled Pork + Cipolla Acquaviva */}
            <Paper elevation={3} sx={{ p: 4, background: "#FFF4EC", borderRadius: 4 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="/images/ingredienti/pulled-pork.jpg" alt="Pulled Pork" style={{ width: "100%", borderRadius: "12px" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Pulled Pork
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Il nostro <strong>pulled pork</strong> è cotto lentamente e affumicato con ingredienti freschi a km 0 per un sapore autentico del territorio.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}