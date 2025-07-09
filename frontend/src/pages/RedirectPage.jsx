import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Alert, Typography } from "@mui/material";

export default function RedirectPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000); // 3 secondi

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
                px: 2,
            }}
        >
            <Alert severity="warning" sx={{ fontSize: "1.2rem", px: 4, py: 2 }}>
                Accesso non consentito. Verrai reindirizzato alla Home...
            </Alert>
        </Box>
    );
}
