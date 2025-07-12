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
            <Paper elevation={3} sx={{ p: 4, background: "#FFF4EC", borderRadius: 4, mb: 5 , }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img
                            src="/images/ingredienti/smashburger.jpg"
                            alt="Smashburger"
                            style={{ width: "100%", borderRadius: "12px" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: "#FF6B35", fontWeight: "bold" , mb: 3}}>
                            Cosa sono gli Smashburger?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Gli <strong>SmashBurger</strong> non sono semplici hamburger: sono un rituale di croccantezza e succosità.
                            La carne viene “schiacciata” sulla piastra rovente, creando una crosticina caramellata fuori e un cuore tenero dentro.
                            Il risultato? Un’esplosione di sapore in ogni morso.
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Da <strong>Meat‑N‑Cheese</strong>, seguiamo questa tecnica americana con passione, ingredienti selezionati e una filosofia semplice:
                            meno fronzoli, più gusto autentico.
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Ogni panino è preparato al momento, con pane artigianale leggermente tostato, cheddar filante, salse homemade e topping freschissimi.
                            È street food, sì… ma fatto con la cura di una cucina stellata.
                        </Typography>

                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Assaggialo una volta, e capirai la differenza.
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
                        <Typography variant="h4" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Potato Bun di MrDobelina
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Il nostro panino inizia da qui: un <strong>potato bun</strong> soffice, leggermente dolce e perfettamente dorato. Prodotto artigianalmente da <strong>MrDobelina</strong>, è pensato per assorbire i succhi della carne senza perdere consistenza. Ogni morso è un abbraccio soffice e saporito.
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
                        <Typography variant="h4" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Carne di Manzo 70/30
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Solo <strong>carne di manzo reale</strong> selezionata, con un equilibrio perfetto tra <strong>70% parte magra</strong> e <strong>30% parte grassa</strong>. Questa combinazione garantisce una <em>crosta croccante</em> all’esterno e una <em>tenerezza succosa</em> all’interno, proprio come vuole la tradizione degli smashburger americani.
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
                        <Typography variant="h4" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Chicken Burger con Coleslaw
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Un'esplosione di gusto e croccantezza: <strong>sovracoscia di pollo marinata</strong> con spezie segrete, fritta alla perfezione, adagiata su potato bun e arricchita con <strong>coleslaw fresca</strong> e una <strong>BBQ affumicata</strong>. Una combinazione equilibrata tra acidità, dolcezza e croccantezza.
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
                        <Typography variant="h4" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Würstel di Maiale Affumicati
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            I nostri <strong>Würstel di puro maiale</strong> sono affumicati lentamente e <strong>cotti a vapore</strong> per ottenere una consistenza morbida e un profumo intenso. Perfetti per gli hot dog artigianali, con il giusto equilibrio tra affumicatura e gusto autentico della carne.
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
                        <Typography variant="h4" sx={{ color: "#FF6B35", fontWeight: "bold" }}>
                            Pulled Pork
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Il nostro <strong>pulled pork</strong> è preparato lentamente, affumicato a bassa temperatura per ore, fino a diventare tenerissimo. territorio.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}