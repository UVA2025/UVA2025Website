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

                    <Row style={{ paddingTop: "30px", paddingBottom: "30px" }}>
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
                            <FooterLink href="https://www.instagram.com/classof2025uva/?hl=en" target="_blank">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        YouTube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                        <Column style={{ color: "white" }}>
                            <span style={{marginBottom: "1em"}}><b>James Edwards, President:</b> jyq2ey@virginia.edu</span>
                            <br></br>
                            <span> <b>Liv Schortmann, Vice President:</b> kba3bw@virginia.edu</span>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </ThemeProvider>
    );
};
export default Footer;