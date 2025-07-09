import {Box, Paper, Typography, TextField, InputAdornment, IconButton, Button, MenuItem,} from "@mui/material";
import {Email, Lock, Visibility, VisibilityOff, CalendarToday, AccountCircle, Wc, Person, } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        nome: "",
        cognome: "",
        email: "",
        password: "",
        username: "",
        dataNascita: "",
        sesso: "",
    });

    const handleTogglePassword = () => setShowPassword((prev) => !prev);

    //modo per gestire tanti input con un'unica funzione onChange
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5001/api/utenti/register", formData);
            console.log(response.data.message);
            navigate("/");
        } catch (err) {
            //console.log(err.response.data.dettagli);
            const dettagli = err.response.data.dettagli;

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
                        sm: "480px",
                        md: "500px",
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
                    Crea un nuovo Account
                </Typography>

                {/* NOME */}
                <TextField
                    label="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 3, "& .MuiInputBase-input": { fontSize: "1.12rem", padding: "13.5px 14px" } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* COGNOME */}
                <TextField
                    label="Cognome"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 3, "& .MuiInputBase-input": { fontSize: "1.12rem", padding: "13.5px 14px" } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* EMAIL */}
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 3, "& .MuiInputBase-input": { fontSize: "1.12rem", padding: "13.5px 14px" } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* USERNAME */}
                <TextField
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 3, "& .MuiInputBase-input": { fontSize: "1.12rem", padding: "13.5px 14px" } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* PASSWORD */}
                <TextField
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 3, "& .MuiInputBase-input": { fontSize: "1.12rem", padding: "13.5px 14px" } }}
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

                {/* DATA NASCITA (ho tolto calendario predef. a dx) */}
                <TextField
                    label="Data di nascita"
                    name="dataNascita"
                    type="date"
                    value={formData.dataNascita}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        mb: 3,
                        "& input[type='date']::-webkit-calendar-picker-indicator": {
                            display: "none",
                            WebkitAppearance: "none",
                        },
                    }}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CalendarToday sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* SESSO */}
                <TextField
                    select
                    label="Sesso"
                    name="sesso"
                    value={formData.sesso}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 4 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Wc sx={{ color: "#FF6B35" }} />
                            </InputAdornment>
                        ),
                    }}
                >
                    <MenuItem value="M">Maschio</MenuItem>
                    <MenuItem value="F">Femmina</MenuItem>
                    <MenuItem value="Altro">Altro</MenuItem>
                </TextField>

                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#FF6B35",
                        color: "#FFF4EC",
                        fontWeight: "bold",
                        py: 1.5,
                        borderRadius: "30px",
                        "&:hover": {
                            backgroundColor: "#e45b27",
                        },
                    }}
                >
                    Registrati
                </Button>
            </Paper>
        </Box>
    );
}