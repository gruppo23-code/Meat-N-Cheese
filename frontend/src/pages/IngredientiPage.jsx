import { Box, Typography, Grid, Paper, Divider } from "@mui/material";

export default function SmashburgerPage() {
    return (
        <Box sx={{ px: { xs: 2, md: 6 }, py: 6, backgroundColor: "#FFF4EC" }}>
            {/* Titolo */}
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#591216", mb: 4 }}>
                Cosa rende speciale uno Smashburger?
            </Typography>

            {/* Sezione 1: Cos'è uno Smashburger */}
            <Paper sx={{ p: 4, borderRadius: 4, mb: 5 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img
                            src="/images/smashburger_definizione.jpg"
                            alt="Smashburger sulla piastra"
                            style={{ width: "100%", borderRadius: 12 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold", mb: 2 }}>
                            La tecnica dello "Smash"
                        </Typography>
                        <Typography>
                            Lo Smashburger nasce dalla tecnica di schiacciare la carne direttamente sulla piastra rovente.
                            Questo processo caramellizza i bordi e crea una crosticina irresistibile, mantenendo l'interno succoso.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* Divider visivo */}
            <Divider sx={{ my: 5 }} />

            {/* Sezione 2: La qualità della carne */}
            <Paper sx={{ p: 4, borderRadius: 4, mb: 5 }}>
                <Grid container spacing={4} alignItems="center" direction="row-reverse">
                    <Grid item xs={12} md={6}>
                        <img
                            src="/images/carne_qualita.jpg"
                            alt="Carne di alta qualità"
                            style={{ width: "100%", borderRadius: 12 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: "#FF6B35", fontWeight: "bold", mb: 2 }}>
                            100% Carne Selezionata
                        </Typography>
                        <Typography>
                            Usiamo solo carne bovina italiana di alta qualità, senza additivi o conservanti. Ogni burger è preparato fresco
                            ogni giorno per garantire il massimo sapore e consistenza.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            {/* Sezione 3: Curiosità */}
            <Paper sx={{ p: 4, borderRadius: 4, backgroundColor: "#fff3ed" }}>
                <Typography variant="h5" sx={{ color: "#591216", fontWeight: "bold", mb: 2 }}>
                    Lo sapevi?
                </Typography>
                <Typography>
                    Il primo Smashburger è stato servito a Denver, in Colorado. Oggi questa tecnica è amata in tutto il mondo
                    per la sua capacità di esaltare il gusto autentico della carne.
                </Typography>
            </Paper>
        </Box>
    );
}