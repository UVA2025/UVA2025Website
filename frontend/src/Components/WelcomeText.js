import { AppBar, Box, Container, Grid, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const WelcomeText = (props) => {

    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} md={12} lg={12} container
                    wrap="nowrap" // --> add this line to disable wrap
                    sx={{ overflow: "auto" }}>
                    <div>
                        <img src={require('../images/SYC_Photo.jpg')} height={800} width={1465} className="front-page-image" alt="logo" />
                    </div>
                </Grid>
                <Grid item xs={1} md={1}>
                </Grid>
                <Grid item xs={5} md={5}>
                    <Box
                        display="in-line"
                        sx={{ justifyContent: "center" }}      >
                        <Typography><h1 style={{ textAlign: "right" }}>WHO WE ARE</h1></Typography>
                        <Typography><p style={{ textAlign: "right" }}>This is the example text for the Second Year Council (soon to be Third Year Council)</p></Typography>
                    </Box>
                </Grid>
                <Grid item xs={5} md={5}>
                    <img src={require('../images/uva2025.png')} height={500} class='float-left' />
                </Grid>
                <Grid item xs={1} md={1}>
                </Grid>
            </Grid>

            <Box
                display="flex"
                sx={{ justifyContent: "center" }}      >
                <Typography><h1>{props.display}</h1></Typography>
            </Box>
        </div>

    );
};

export default WelcomeText;