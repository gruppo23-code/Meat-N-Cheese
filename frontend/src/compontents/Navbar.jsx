import { AppBar, Toolbar, Typography, Button, Box, Divider } from "@mui/material"

export default function Navbar() {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                background: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)",
                borderBottom: "3px solid #FF6B35",
                minHeight: "100px",
            }}
        >
            <Toolbar sx={{ py: 3, minHeight: "100px" }}>
                <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                    <Box
                        component="img"
                        src="/placeholder.svg?height=50&width=150"
                        alt="Meat-N-Cheese Logo"
                        sx={{
                            height: 50,
                            width: 150,
                            mr: 2,
                            backgroundColor: "white",
                            borderRadius: 2,
                            p: 1,
                            objectFit: "contain",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            fontWeight: "bold",
                            background: "linear-gradient(45deg, #FFD700, #FFA500)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                            fontSize: "1.5rem",
                        }}
                    >
                        MEAT-N-CHEESE
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Button
                        color="inherit"
                        sx={{
                            mx: 1,
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            "&:hover": {
                                backgroundColor: "rgba(255,107,53,0.2)",
                                transform: "translateY(-2px)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        Menu
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            mx: 1,
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            "&:hover": {
                                backgroundColor: "rgba(255,107,53,0.2)",
                                transform: "translateY(-2px)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        Locations
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            mx: 1,
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            "&:hover": {
                                backgroundColor: "rgba(255,107,53,0.2)",
                                transform: "translateY(-2px)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        About
                    </Button>

                    <Divider orientation="vertical" flexItem sx={{ mx: 2, backgroundColor: "rgba(255,255,255,0.3)" }} />

                    <Button
                        variant="outlined"
                        sx={{
                            mx: 1,
                            borderColor: "white",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            px: 3,
                            py: 1,
                            "&:hover": {
                                borderColor: "#FFD700",
                                backgroundColor: "rgba(255,215,0,0.1)",
                                transform: "translateY(-2px)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            mx: 1,
                            background: "linear-gradient(45deg, #FF6B35, #FF8C42)",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            px: 3,
                            py: 1,
                            boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
                            "&:hover": {
                                background: "linear-gradient(45deg, #E55A2B, #E67A35)",
                                transform: "translateY(-2px)",
                                boxShadow: "0 6px 20px rgba(255,107,53,0.6)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        Register
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
