import { AppBar, Toolbar, Button, Box, Divider } from "@mui/material"
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {useState} from "react";
import FastfoodIcon from '@mui/icons-material/LunchDining';
import { Link, useNavigate } from 'react-router-dom';



const hoverColor = "#A0522D"



//dichiaro dentro gli hook che devo utilizzare

export default function Navbar() {
    const isLoggedIn = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }

    //useState crea una variabile con stato settato
    const [openDrawer, setOpenDrawer] = useState(false);
//hook di materialUI che permette di prendere colori del progetto
    const theme = useTheme();
//useMediaQuery mi fa controllare se lo schermo attuale rispetta la condizione tra parentesi
//theme breakpoints è di materialUI metodo che si attiva per il parametro tra parentesi down significa fino a lg (1200px)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (

        <AppBar
            position="static"
            elevation={0}
            sx={{
                background: "#591216",
                borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                minHeight: "100px",
            }}
        >

            <Toolbar sx={{ py: 3, minHeight: "100px" }}>

                <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, ml:1 }}>
                    <Link to={"/"}>
                    <img
                        src="/images/Logo_NoBg.png"
                        alt="Meat-N-Cheese Logo"
                        style={{
                            height: "70px",           // aumenta se vuoi più grande
                            width: "auto",            // auto per mantenere proporzioni
                            marginRight: "1rem",      // più spazio dai bottoni
                            objectFit: "contain",
                            display: "block",         // evita comportamento inline
                        }}
                    />
                    </Link>
                </Box>


                {/* Navbar desktop o mobile */}
                {isMobile ? (
                    <>
                        {/* Icona ☰ su mobile */}
                        <IconButton
                            onClick={() => setOpenDrawer(true)}
                            sx={{ color: "#eae3d1" }}
                        >
                            <FastfoodIcon fontSize="large" />
                        </IconButton>

                        {/* Drawer laterale */}
                        {/* Drawer si apre con open e poi le caratteristiche di ciò di esso contiene è il paper  */}
                        {/* prop open  */}
                        <Drawer
                            anchor="right"
                            open={openDrawer}
                            onClose={() => setOpenDrawer(false)}
                            slotProps={{
                                paper: {
                                    sx: {
                                        background: "#591216", // stesso colore della navbar
                                        color: "white",
                                        width: 250,
                                        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                                        borderLeft: "2px solid rgba(255, 255, 255, 0.1)",
                                    }
                                }
                            }}
                        >
                            {/* Box che ha i bottoni che mi interessano dentro */}
                            <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                                <Button
                                    component={Link}
                                    to="/Menu"
                                    sx={{
                                        mx: 1.5,
                                        fontWeight: "bold",
                                        fontSize: "1.1rem",
                                        border: "1px solid white",
                                        borderRadius: "10px",
                                        px: 2,
                                        py: 1,
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: hoverColor,
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                    onClick={() => setOpenDrawer(false)}
                                >
                                    Menu
                                </Button>


                                <Button
                                    sx={{
                                        mx: 1.5,
                                        fontWeight: "bold",
                                        fontSize: "1.1rem",
                                        border: "1px solid white",
                                        borderRadius: "10px",
                                        px: 2,
                                        py: 1,
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: hoverColor,
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                    onClick={() => setOpenDrawer(false)}
                                >
                                    Locations
                                </Button>


                                <Button
                                    sx={{
                                        mx: 1.5,
                                        fontWeight: "bold",
                                        fontSize: "1.1rem",
                                        border: "1px solid white",
                                        borderRadius: "10px",
                                        px: 2,
                                        py: 1,
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: hoverColor,
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                    onClick={() => setOpenDrawer(false)}
                                >
                                    About
                                </Button>

                                <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 2 }} />

                                {isLoggedIn ? (
                                    <Button
                                        variant="contained"
                                        sx={{
                                            mx: 1.5,
                                            background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            px: 3,
                                            py: 1,
                                            borderRadius: "10px",
                                            boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
                                            "&:hover": {
                                                background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 6px 20px rgba(255,107,53,0.6)",
                                            },
                                            transition: "all 0.3s ease",
                                        }}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            component={Link}
                                            to="/Login"
                                            variant="outlined"
                                            sx={{
                                                mx: 1.5,
                                                borderColor: "white",
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1rem",
                                                borderRadius: "10px",
                                                px: 3,
                                                py: 1,
                                                "&:hover": {
                                                    backgroundColor: hoverColor,
                                                    transform: "translateY(-2px)",
                                                },
                                                transition: "all 0.3s ease",
                                            }}
                                            onClick={() => setOpenDrawer(false)}
                                        >
                                            Login
                                        </Button>



                                        <Button
                                            component={Link}
                                            to="/Register"
                                            variant="contained"
                                            sx={{
                                                mx: 1.5,
                                                background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                                fontWeight: "bold",
                                                fontSize: "1rem",
                                                px: 3,
                                                py: 1,
                                                borderRadius: "10px",
                                                boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
                                                "&:hover": {
                                                    background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "0 6px 20px rgba(255,107,53,0.6)",
                                                },
                                                transition: "all 0.3s ease",
                                            }}
                                            onClick={() => setOpenDrawer(false)}
                                        >
                                            Register
                                        </Button>
                                    </>
                                )
                                }
                            </Box>
                        </Drawer>
                    </>
                ) : (

                    // Bottoni visibili normalmente  su desktop
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Button
                            component={Link}
                            to="/Menu"
                            sx={{
                                mx: 1.5,
                                fontWeight: "bold",
                                fontSize: "1.1rem",
                                border: "1px solid white",
                                borderRadius: "10px",
                                px: 2,
                                py: 1,
                                color: "white",
                                "&:hover": {
                                    backgroundColor: hoverColor,
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Menu
                        </Button>
                        <Button
                            sx={{
                                mx: 1.5,
                                fontWeight: "bold",
                                fontSize: "1.1rem",
                                border: "1px solid white",
                                borderRadius: "10px",
                                px: 2,
                                py: 1,
                                color: "white",
                                "&:hover": {
                                    backgroundColor: hoverColor,
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Locations
                        </Button>
                        <Button
                            sx={{
                                mx: 1.5,
                                fontWeight: "bold",
                                fontSize: "1.1rem",
                                border: "1px solid white",
                                borderRadius: "10px",
                                px: 2,
                                py: 1,
                                color: "white",
                                "&:hover": {
                                    backgroundColor: hoverColor,
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            About
                        </Button>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                mx: 2,
                                backgroundColor: "rgba(255,255,255,0.2)",
                                width: "1px",
                            }}
                        />

                        {isLoggedIn ? (
                            <Button
                                onClick={handleLogout}
                                variant="contained"
                                sx={{
                                    mx: 1.5,
                                    background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    px: 3,
                                    py: 1,
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
                                    "&:hover": {
                                        background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 6px 20px rgba(255,107,53,0.6)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button
                                    component={Link}
                                    to="/Login"
                                    variant="outlined"
                                    sx={{
                                        mx: 1.5,
                                        borderColor: "white",
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        borderRadius: "10px",
                                        px: 3,
                                        py: 1,
                                        "&:hover": {
                                            backgroundColor: hoverColor,
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    Login
                                </Button>

                                <Button
                                    component={Link}
                                    to="/Register"
                                    variant="contained"
                                    sx={{
                                        mx: 1.5,
                                        background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        px: 3,
                                        py: 1,
                                        borderRadius: "10px",
                                        boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
                                        "&:hover": {
                                            background: "linear-gradient(45deg, #A0522D, #D2691E)",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 6px 20px rgba(255,107,53,0.6)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    Register
                                </Button>
                            </>
                        )

                        }
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}