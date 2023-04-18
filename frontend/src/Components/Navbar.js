import { React } from "react";
import { AppBar, Box, Toolbar, Button } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../contexts/UserContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
                            <Button variant="text" color="secondary">HOME</Button>
                            <Button variant="text" color="secondary">EVENTS</Button>
                            <Button variant="text" color="secondary">RESOURCES</Button>
                            <Button variant="text" color="secondary">ABOUT US</Button>
                        </Toolbar>
                    </ThemeProvider>
                </AppBar>
            </Box>
        </>
    )
}
export default Navbar;