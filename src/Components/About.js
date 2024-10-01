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
            name: "Josh Novick",
            email: "jn5hm@virginia.edu",
            image: require("../images/Headshots/JoshNovick.jpeg"),
            position: "Treasurer"
        }
    ];

    const bonding = [
        {
            name: "Colin Halligan",
            email: "haa9vs@virginia.edu",
            image: require("../images/Headshots/ColinHalligan.jpg"),
            position: "Bonding Chair"
        },
        {
            name: "Kiera Chambers",
            email: "tsu6bd@virginia.edu",
            image: require("../images/Headshots/KieraChambers.jpg"),
            position: "Bonding Chair"
        }
    ];

    const grad = [
        {
            name: "Ben Ueltschey",
            email: "zgd7wr@virginia.edu",
            image: require("../images/Headshots/BenUeltschey.jpeg"),
            position: "Graduation Chair"
        }
    ];

    const post_grad = [
        {
            name: "Maddie Cahill",
            email: "pcm8vy@virginia.edu",
            image: require("../images/Headshots/MaddieCahill.jpg"),
            position: "Post Grad Transition Chair"
        }
    ];

    const class_giving = [
        {
            name: "Akanksha Munshi",
            email: "tvw8cd@virginia.edu",
            image: require("../images/Headshots/AkankshaMunshi.jpg"),
            position: "Class Giving Chair"
        },
        {
            name: "Josh Maggiano",
            email: "urt6qe@virginia.edu",
            image: require("../images/Headshots/JoshMaggiano.jpg"),
            position: "Class Giving Chair"
        }
    ];

    const socialEvents = [
        {
            name: "Jessie Lewis",
            email: "feq4wc@virginia.edu",
            image: require("../images/Headshots/JessieLewis.jpg"),
            position: "Social & Events Chair"
        },
        {
            name: "Erin McGahan",
            email: "zrz4gw@virginia.edu",
            image: require("../images/Headshots/ErinMcGahan.jpeg"),
            position: "Social & Events Chair"
        },
    ];

    const marketing = [
        {
            name: "Ethan Johnson",
            email: "cyt3cb@virginia.edu",
            image: require("../images/Headshots/EthanJohnson.jpg"),
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
            name: "Max Morrish",
            email: "jrz9cd@virginia.edu",
            image: require("../images/Headshots/MaxMorrish.jpg"),
            position: "Service/Wellness Chair"
        },
        {
            name: "Kat Winters",
            email: "txz5qx@virginia.edu",
            image: require("../images/Headshots/KatWinters.jpg"),
            position: "Service/Wellness Chair"
        }
    ];

    const dei = [
        {
            name: "Onyii Eze",
            email: "sx6jb@virginia.edu",
            image: require("../images/Headshots/OnyiiEze.jpeg"),
            position: "DEI Chair"
        },
        {
            name: "Jenna Sleiman",
            email: "bxm2pe@virginia.edu",
            image: require("../images/Headshots/JennaSleiman.jpg"),
            position: "DEI Chair"
        }
    ];

    const lotl = [
        {
            name: "Chelsea Huffman",
            email: "dtu8mu@virginia.edu",
            image: require("../images/Headshots/ChelseaHuffman.jpg"),
            position: "LOTL Chair"
        },
        {
            name: "Riley McNeil",
            email: "mqt3uz@virginia.edu",
            image: require("../images/Headshots/RileyMcNeil.jpg"),
            position: "LOTL Chair"
        }
    ]

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
            email: "sfg6xt@virginia.edu",
            image: require("../images/Headshots/AnanyaRaam.jpeg"),
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

    const webDevLine3 = [
        {
            name: "Trisha Gulati",
            email: "rxy3ct@virginia.edu",
            image: require("../images/Headshots/TrishaGulati.jpeg"),
            position: "Fullstack Developer"
        }
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
                <Typography variant="h4"><b>Graduation</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {grad.map((person, index) => (
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
                <Typography variant="h4"><b>Post Grad Transition</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {post_grad.map((person, index) => (
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
                <Typography variant="h4"><b>Class Giving</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {class_giving.map((person, index) => (
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
                <Typography variant="h4"><b>Social & Events</b></Typography>
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
                <Typography variant="h4"><b>LOTL</b></Typography>
            </Box>
            <Grid container spacing={2}>
                {lotl.map((person, index) => (
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
                <Typography variant="h4"><b>Developer Team</b></Typography>
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

            <Grid container spacing={2} style={{ marginTop: "4vh"}}>
                {webDevLine3.map((person, index) => (
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
                    <Tab label="Fourth Year Trustees">

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