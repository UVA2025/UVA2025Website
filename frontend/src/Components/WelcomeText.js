import { AppBar, Box, Container, Grid, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const WelcomeText = (props) => {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={1} md={0}>

                </Grid>
                <Grid item xs={10} md={10} container
                    wrap="nowrap" // --> add this line to disable wrap
                    sx={{ overflow: "auto" }}>
                    <img src={require('../images/SYC_Photo.jpg')} height={800} width={1465} className="front-page-image" alt="logo" />
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