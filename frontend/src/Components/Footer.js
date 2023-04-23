import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
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

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Container>

                    <Row>
                        <Column>
                        <img src={require('../images/footericon.jpg')} height={100} width={100} alt="Logo" />
                        </Column>
                        <Column>
                            <FooterLink href="#">Meet the Team</FooterLink>
                        </Column>

                        <Column>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                        <Column style={{ color: "white" }}>
                            <b>Contact the President:</b> presidentemail@virginia.edu
                            <b>Contact the Vice-President:</b> vpemail@virginia.edu
                        </Column>
                    </Row>
                </Container>
            </Box>
        </ThemeProvider>
    );
};
export default Footer;