import { Typography, TextField, Button, Paper, Box, InputAdornment, IconButton, } from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5001/api/utenti/login", formData, {
                withCredentials: true,      //Permetto al cookie di essere salvato nel browser
            });

            //salva il token nel localStorage e il ruolo
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("ruolo", response.data.utente.ruolo);

            console.log(response.data.message);
            navigate("/") ;
        } catch (err) {
            //console.log(err.response.data.dettagli);
            const dettagli = err.response?.data?.dettagli || err.response?.data?.message || "Errore sconosciuto";

            const messaggi = dettagli
                .split(",")               // divide in array ogni errore
                .map(msg => msg.trim())   // rimuove spazi inutili
                .join("\n");              // unisce con a capo

            alert(messaggi);
        }
    }


    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: `url("https://blackstone-suomi.com/cdn/shop/articles/47fa793be35fd9a9287a897955f8f62f.webp?v=1721725859")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                px: 2,
                py: 12,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 4,
                    background: "#FFF4EC",

                    width: {
                        xs: "100%",
                        sm: "450px",
                        md: "480px",
                    },
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 4,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#591216",
                    }}
                >
                    Accedi al tuo Account
                </Typography>

                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                        mb: 3,
                        width: "100%",
                        "& .MuiInputBase-input": {
                            fontSize: "1.12rem",
                            padding: "13.5px 14px",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{
                        mb: 4,
                        width: "100%",
                        "& .MuiInputBase-input": {
                            fontSize: "1.12rem",
                            padding: "13.5px 14px",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePassword} edge="end">
                                    {showPassword ? (
                                        <VisibilityOff sx={{ color: "#FF6B35" }} />
                                    ) : (
                                        <Visibility sx={{ color: "#FF6B35" }} />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{
                        backgroundColor: "#FF6B35",
                        color: "#FFF4EC",
                        fontWeight: "bold",
                        py: 1.5,
                        borderRadius: "30px",
                        width: "100%",
                        "&:hover": {
                            backgroundColor: "#e45b27",
                        },
                    }}
                >
                    ACCEDI
                </Button>

                <Typography
                    variant="body2"
                    align="center"
                    sx={{ mt: 3, color: "#8B4513" }}
                >
                    Non hai un account?{" "}
                    <RouterLink
                        to="/register"
                        style={{
                            color: "#FF6B35",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                    >
                        Registrati
                    </RouterLink>
                </Typography>
            </Paper>
        </Box>
    );
}