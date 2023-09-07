import { Container, Grid, Typography, Box, Tabs, Tab } from "@mui/material"
import PersonCard from "./PersonCard"
import { useState } from 'react';

export const About = () => {
    const [selectedTab, setSelectedTab] = useState(0);

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
            image: require("../images/Headshots/JonScanlon1.jpeg"),
            position: "Secretary"
        },
        {
            name: "Josh Maggiano",
            email: "urt6qe@virginia.edu",
            image: require("../images/Headshots/JoshMaggiano.jpg"),
            position: "Treasurer"
        }
    ];

    const bonding = [
        {
            name: "Erin McGahan",
            email: "zrz4gw@virginia.edu",
            image: require("../images/Headshots/ErinMcGahan.jpeg"),
            position: "Bonding Chair"
        },
        {
            name: "Sophia Palumbo",
            email: "rwy5er@virginia.edu",
            image: require("../images/Headshots/SophiaPalumbo.jpeg"),
            position: "Bonding Chair"
        }
    ];

    const acd = [
        {
            name: "Ezra Attisso",
            email: "hdg6zf@virginia.edu",
            image: require("../images/Headshots/EzraAttisso.jpeg"),
            position: "ACD Chair"
        },
        {
            name: "Ben Ueltschey",
            email: "zgd7wr@virginia.edu",
            image: require("../images/Headshots/BenUeltschey.jpeg"),
            position: "ACD Chair"
        }
    ];

    const dei = [
        {
            name: "Onyii Eze",
            email: "sx6jb@virginia.edu",
            image: require("../images/Headshots/OnyiiEze.jpeg"),
            position: "DEI Chair"
        }
    ];

    const ceremony = [
        {
            name: "Sophia Ditty",
            email: "wmn8zf@virginia.edu",
            image: require("../images/Headshots/SophiaDitty.jpeg"),
            position: "Ceremony Chair"
        }
    ];

    const socialEvents = [
        {
            name: "Chelsea Huffman",
            email: "tu8mu@virginia.edu",
            image: require("../images/Headshots/ChelseaHuffman.jpeg"),
            position: "Social & Events Chair"
        }
    ];

    const marketing = [
        {
            name: "Ethan Johnson",
            email: "cyt3cb@virginia.edu",
            image: require("../images/Headshots/EthanJohnson.jpeg"),
            position: "Marketing Co-Chair"
        },
        {
            name: "Sammy Vinh",
            email: "gak5ux@virginia.edu",
            image: require("../images/Headshots/SammyVinh.jpeg"),
            position: "Marketing Co-Chair"
        }
    ];

    const serviceWellness = [
        {
            name: "Ryan Bowers",
            email: "qtn4wn@virginia.edu",
            image: require("../images/Headshots/RyanBowers.jpeg"),
            position: "Service/Wellness Chair"
        },
        {
            name: "Josh Novick",
            email: "jn5hm@virginia.edu",
            image: require("../images/Headshots/JoshNovick.jpeg"),
            position: "Service/Wellness Chair"
        }
    ];

    const webDev = [
        {
            name: "Michael Kodsi",
            email: "tdq2kp@virginia.edu",
            image: require("../images/Headshots/MichaelKodsi.jpeg"),
            position: "Project Lead"
        },
        {
            name: "Param Patel",
            email: "jpg5wq@virginia.edu",
            image: require("../images/Headshots/ParamPatel.jpeg"),
            position: "Frontend Lead"
        },
        {
            name: "Julian Donald",
            email: "jed5gpx@virginia.edu",
            image: require("../images/Headshots/JulianDonald.png"),
            position: "Backend Lead"
        },
        {
            name: "Ananya Raam",
            email: "example@virginia.edu",
            image: require("../images/Headshots/JoshNovick.jpeg"),
            position: "UX Designer"
        },
    ];

    const webDevLine2 = [
        {
            name: "Vishal Kamalakrishnan",
            email: "cjq2cw@virginia.edu",
            image: require("../images/Headshots/VishalKamalakrishnan.jpeg"),
            position: "DevOps and Backend Developer"
        },
        {
            name: "Oybek Askarov",
            email: "cqv7se@virginia.edu",
            image: require("../images/Headshots/OybekAskarov.jpeg"),
            position: "Frontend Developer"
        },
        {
            name: "Hennok Tilahun",
            email: "bwe6awvirginia.edu",
            image: require("../images/Headshots/HennokTilahun.jpeg"),
            position: "Frontend Developer"
        },
        {
            name: "Daniel Farmer",
            email: "jn5hm@virginia.edu",
            image: require("../images/Headshots/DanielFarmer.jpeg"),
            position: "Frontend Developer"
        },
    ];

    const tabContent = [
        <div>
            <Box my={4}>
                <Typography variant="h4"><b>Executive Board</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {exec.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box my={4}>
                <Typography variant="h4"><b>Academic and Career Development</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {acd.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box my={4}>
                <Typography variant="h4"><b>Bonding</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {bonding.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box my={4}>
                <Typography variant="h4"><b>DEI</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {dei.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box my={4}>
                <Typography variant="h4"><b>Marketing</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {marketing.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box my={4}>
                <Typography variant="h4"><b>Ring Ceremony</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {ceremony.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box my={4}>
                <Typography variant="h4"><b>Service / Wellness</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {serviceWellness.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box my={4}>
                <Typography variant="h4"><b>Social / Events</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {socialEvents.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>,
        <div>
            <Box my={4}>
                <Typography variant="h4"><b>Developer Team Coming Soon!</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {webDev.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={2} style={{ marginTop: "4vh"}}>
                {webDevLine2.map((person, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <PersonCard
                            name={person.name}
                            email={<a href={`mailto:${person.email}`}>{person.email}</a>}
                            image={person.image}
                            position={person.position}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>,
    ];

    const handleTabChange = (event, newIndex) => {
        setSelectedTab(newIndex);
    };

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