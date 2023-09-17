import React from "react";
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";
import '../Styles/Navbar.css';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    "&.active-link-button": {
                        color: "#E57200",
                    },
                },
            },
        },
    },
});

const Navbar = () => {
    const location = useLocation();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <ThemeProvider theme={theme}>
                    <Toolbar style={{ backgroundColor: "#26365A", display: 'flex', alignItems: 'center' }}>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            <img src={require('../images/uva2025.png')} height={50} alt="Logo" style={{ borderRadius: '50%' }} />
                        </Link>

                        <div className="navbar-links">
                            <Link to="/" className="navbar-link-button">
                                <Button variant="text" color={location.pathname === '/' ? 'secondary' : 'inherit'} className={location.pathname === '/' ? 'active-link-button' : ''}>
                                    HOME
                                </Button>
                            </Link>

                            <Link to="/about" className="navbar-link-button">
                                <Button variant="text" color={location.pathname === '/about' ? 'secondary' : 'inherit'} className={location.pathname === '/about' ? 'active-link-button' : ''}>
                                    ABOUT
                                </Button>
                            </Link>

                            <Link to="/events" className="navbar-link-button">
                                <Button variant="text" color={location.pathname === '/events' ? 'secondary' : 'inherit'} className={location.pathname === '/events' ? 'active-link-button' : ''}>
                                    EVENTS
                                </Button>
                            </Link>

                            <Link to="/resources" className="navbar-link-button">
                                <Button variant="text" color={location.pathname === '/resources' ? 'secondary' : 'inherit'} className={location.pathname === '/resources' ? 'active-link-button' : ''}>
                                    RESOURCES
                                </Button>
                            </Link>
                        </div>
                    </Toolbar>
                </ThemeProvider>
            </AppBar>
        </Box>
    );
}

export default Navbar;
