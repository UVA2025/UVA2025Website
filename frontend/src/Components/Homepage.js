import { Box, Container, Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import SYCBackgroundImage from '../images/SYC_Photo.jpg';

const Homepage = () => {
    return (
        <div>
            <Grid container spacing={5} justifyContent="center">
                <Grid item xs={12} md={12} lg={12} container
                    wrap="nowrap" // --> add this line to disable wrap
                    sx={{ overflow: "auto" }}>

                    <div
                        style={{
                            backgroundImage: `url(${SYCBackgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '70vh',
                        }}
                        className="front-page-image"
                    >
                        <div
                            style={{
                                textAlign: "center",
                                color: "White"
                            }}
                            className="front-page-image">
                            <Typography>
                                <h1>
                                    WELCOME TO THE UVA CLASS OF 2025 WEBSITE
                                </h1>
                            </Typography>
                        </div>
                        {/* Your content goes here */}
                    </div>
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                </Grid>
                <Grid item xs={10} sm={4} md={4} justifyContent="center">
                    <Box
                        display="in-line"
                        sx={{ justifyContent: "center" }}      >
                        <Typography><h1 style={{ textAlign: "right" }}>HOO WE ARE</h1></Typography>
                        <Typography><p style={{ textAlign: "right" }}>Welcome to the official website for the Class of 2025 Third Year Council! Check out upcoming events, resources, or learn more about our goal and various committees.</p></Typography>
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