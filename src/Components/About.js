import { Container, Grid, Typography } from "@mui/material"
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
            name: "Jonathan Scanlon"
        }
        // Add more exec objects here
    ];

    return (
        <div>
            {/* <Container style={{ marginBottom: "40vh" }}>
                <Grid container spacing={2}>
                    {exec.map((person, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <PersonCard
                                name={person.name}
                                email={person.email}
                                image={person.image}
                                position={person.position}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container> */}
            <Container style={{ marginBottom: "40vh" }}>
                <Grid>
                    <Typography variant="h4" style={{textAlign:"center", marginTop:"30vh"}}>
                        Resources Page Coming Soon!
                    </Typography>
                </Grid>
            </Container>
        </div>
    );
};

export default About