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
          <Container style={{ marginBottom: "40vh" }}>
            <Typography
              variant="h4"
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                marginTop: "2rem" // Add margin at the top
              }}
            >
              Exec
            </Typography>
            <Grid container spacing={2}>
              {exec.map((person, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <PersonCard
                    name={person.name}
                    email={person.email}
                    image={person.image}
                    position={person.position}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      );
};

export default About