import { Container, Grid, Typography } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const Committees = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div>
            <Container style={{ marginBottom: "40vh" }}>
                <Grid>
                    <Typography variant="h4" style={{textAlign:"center", marginTop:"30vh"}}>
                        Resources Page Coming Soon!
                    </Typography>
                </Grid>
            </Container>
        </div>
    )

}
export default Committees