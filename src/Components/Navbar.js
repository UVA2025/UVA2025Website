import { React } from "react";
import { AppBar, Box, Toolbar, Button } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../contexts/UserContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#26365A',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    button: {
        fontWeight: "bold",
    },
    spacing: 4,
});

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <ThemeProvider theme={theme}>
                    <Toolbar style={{ backgroundColor: "#26365A", display: 'flex', alignItems: 'center' }}>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            <img src={require('../images/uva2025.png')} height={50} alt="Logo" />
                        </Link>


                        <Box sx={{ flexGrow: 1 }}></Box>

                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            <Button variant="text" color="secondary" onClick="">
                                HOME
                            </Button>
                        </Link>

                        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                            <Button variant="text" color="secondary" onClick="/about">
                                ABOUT
                            </Button>
                        </Link>

                        <Link to="/events" style={{ textDecoration: "none", color: "white" }}>
                            <Button variant="text" color="secondary" onClick="/events">
                                EVENTS
                            </Button>
                        </Link>

                        <Link to="/resources" style={{ textDecoration: "none", color: "white" }}>
                            <Button variant="text" color="secondary" onClick="/resources">
                                RESOURCES
                            </Button>
                        </Link>

                        <Box sx={{ flexGrow: 1 }}></Box>
                    </Toolbar>
                </ThemeProvider>
            </AppBar>
        </Box>
    );
}

export default Navbar;