import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import SYCBackgroundImage from '../images/TYC_Photo.jpeg';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { Button } from '@mui/material';

const Homepage = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div>
            <Grid container spacing={5} justifyContent="center">
                <Grid item xs={12} md={12} lg={12} container
                    wrap="nowrap"
                    sx={{ overflow: "auto" }}>

                    <div
                        style={{
                            backgroundImage: `url(${SYCBackgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '70vh',
                            textAlign: 'center'
                        }}
                        className="front-page-image"
                    >
                        <div style={{ textAlign: "center", color: "white" }}>
                            <Typography>
                                <h1 style={{
                                    marginTop: "5vh", marginBottom: "0", paddingRight: "12px",
                                    paddingLeft: "12px", backgroundColor: "#26365A", display: "inline-block", borderRadius: "10px"
                                }}>FOURTH YEAR TRUSTEES</h1>
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}
                    sx={{
                        width: "100vw",
                        margin: "0",
                        backgroundColor: "#E57200",
                        padding: "40px 0px", // Top & Bottom = 40px, Left & Right = 0px
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        borderRadius: "0px",
                    }}
                >
                    <Button
                        variant="contained"
                        href="https://www.givecampus.com/schools/UniversityofVirginia/class-of-2025-campaign/?a=8987911#advocates"
                        target="_blank"
                        sx={{
                            backgroundColor: "white",
                            color: "#26365A",
                            fontSize: "24px",
                            fontWeight: "bold",
                            padding: "12px 24px",
                            borderRadius: "10px",
                            textTransform: "none",
                            border: "2px solid #26365A",
                            '&:hover': { backgroundColor: "#f0f0f0" }
                        }}
                    >
                        MAKE YOUR CLASS GIFT HERE
                    </Button>
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                </Grid>
                <Grid item xs={10} sm={4} md={4} justifyContent="center">
                    <Box
                        display="in-line"
                        sx={{ justifyContent: "center" }}      >
                        <Typography><h1 style={{ textAlign: "right" }}>HOO WE ARE</h1></Typography>
                        <Typography><p style={{ textAlign: "right" }}>Welcome to the official website for the Class of 2025 Fourth Year Trustees! Check out upcoming events, resources, or learn more about our goal and various committees.</p></Typography>
                    </Box>
                </Grid>
                <Grid item xs={10} sm={4} md={4} justifyContent="center">
                    <img src={require('../images/uva2025.png')} height={500} style={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                </Grid>
            </Grid>
        </div>
    )

}
export default Homepage