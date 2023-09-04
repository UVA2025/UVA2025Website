import { Container, Grid, Typography, Box } from "@mui/material"
import PersonCard from "./PersonCard"

export const About = () => {
    const exec = [
        {
            name: "James Edwards",
            email: "jyq2ey@virginia.edu",
            image: require("../images/Headshots/JamesEdwards.jpeg"),
            position: "President"
        },
        {
            name: "Liv Schortmann",
            email: "kba3bw@virginia.edu",
            image: require("../images/Headshots/LivSchortmann.JPEG"),
            position: "Vice President"
        },
        {
            name: "Jonathan Scanlon",
            email: "jbs7ah@virginia.edu",
            image: require("../images/Headshots/JonScanlon.jpg"),
            position: "Secretary"
        },
        {
            name: "Josh Maggiano",
            email: "urt6qe@virginia.edu",
            image: require("../images/Headshots/JoshMaggiano.jpg"),
            position: "Treasurer"
        }
    ];

    return (
        <div>
            <Container style={{ marginBottom: "15vh", marginTop: "2vh" }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{
                        '& > div': {
                            display: 'flex',
                            justifyContent: 'center',
                        },
                    }}>
                    <Tab label="Third Year Council">

                    </Tab>
                    <Tab label="Website Developer Team">

                    </Tab>
                </Tabs>
                {tabContent[selectedTab]}

                {/* <Grid>
                    <Typography variant="h4" style={{textAlign:"center", marginTop:"30vh"}}>
                        About Page Coming Soon!
                    </Typography>
                </Grid> */}
            </Container>
        </div>
    );
};

export default About