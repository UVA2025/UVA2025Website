import React from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";
import '../Styles/Navbar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to close the dropdown menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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

                            <div className="navbar-link-button">
                                <Button
                                    variant="text"
                                    color={location.pathname.includes('/resource') ? 'secondary' : 'inherit'}
                                    className={location.pathname.includes('/resource') ? 'active-link-button' : ''}
                                    onClick={handleMenuOpen}
                                >
                                    RESOURCES
                                    <ExpandMoreIcon />
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/resource/acd" style={{ textDecoration: "none", color: "inherit" }}>
                                            Academic and Career Development
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/resource/dei" style={{ textDecoration: "none", color: "inherit" }}>
                                            Diversity Equity & Inclusion
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/resource/marketing" style={{ textDecoration: "none", color: "inherit" }}>
                                            Marketing
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/resource/ring-ceremony" style={{ textDecoration: "none", color: "inherit" }}>
                                            Ring Ceremony
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/resource/service-wellness" style={{ textDecoration: "none", color: "inherit" }}>
                                            Service & Wellness
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/resource/social-events" style={{ textDecoration: "none", color: "inherit" }}>
                                            Social & Events
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link to="/resource/third-year-ceremony" style={{ textDecoration: "none", color: "inherit" }}>
                                            Third Year Ceremony
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </Toolbar>
                </ThemeProvider>
            </AppBar>
        </Box>
    );
}

export default Navbar;
