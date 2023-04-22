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
        <>
            <Box sx={{ flexgrow: 1 }}>
                <AppBar position="static">
                    <ThemeProvider theme={theme}>
                        <Toolbar style={{ backgroundColor: "#26365A" }} sx={{ justifyContent: "center" }} >
                            <img src={require('../images/uva2025.png')} height={50} class='float-left' />

                            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                <Button variant="text" color="secondary" onclick="">
                                    HOME
                                </Button>
                            </Link>

                            <Link to="/events" style={{ textDecoration: "none", color: "white" }}>
                                <Button variant="text" color="secondary" onclick="/events">
                                    EVENTS
                                </Button>
                            </Link>

                            <Link to="/resources" style={{ textDecoration: "none", color: "white" }}>
                                <Button variant="text" color="secondary" onclick="/resources">
                                    RESOURCES
                                </Button>
                            </Link>

                            <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                                <Button variant="text" color="secondary" onclick="/about">
                                    ABOUT
                                </Button>
                            </Link>
                        </Toolbar>
                    </ThemeProvider>
                </AppBar>
            </Box>
        </>
    )
}
export default Navbar;