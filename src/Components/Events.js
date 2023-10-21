import Typography from '@mui/material/Typography';
import { Container, Grid, Box, Divider, Tabs, Tab } from '@mui/material';
import StudentEvents from '../images/student_events.jpeg';
import EventCard from './EventCard';
import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import ReactGA from 'react-ga';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    async function fetchEventData() {
        try {
            const response = await API.get('ContentfulEvents', '/events');
            setEvents(response);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchEventData();
    }, []);

    const handleTabChange = (event, newIndex) => {
        setSelectedTab(newIndex);
    };

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const months = Array.from({ length: 12 }, (_, i) => {
        const month = (currentMonth + i) % 12;
        const year = currentYear + Math.floor((currentMonth + i) / 12);
        return new Date(year, month)
            .toLocaleString("en-US", { month: "long" })
            .toLocaleUpperCase();
    });

    const filteredMonths = months.filter((month) => {
        const filteredEventItems = events.filter((event) => {
            const isoDateString = event.dateAndTime;
            const dateObject = new Date(isoDateString);

            return dateObject
                .toLocaleString("default", { month: "long" })
                .toUpperCase()
                .includes(month);
        });

        return filteredEventItems.length > 0;
    });

    const centeredTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh', // You can adjust the height as needed
    };

    const now = new Date();

    const futureEvents = events.filter((event) => {
        const eventDate = new Date(event.dateAndTime);
        return eventDate > now;
    });
    
    const priorEvents = events.filter((event) => {
        const eventDate = new Date(event.dateAndTime);
        return eventDate < now;
    });
    
    const tabContent = [
        <div>
            {futureEvents.length > 0 ? (
                filteredMonths.map((month, index) => {
                    const filteredEventItems = futureEvents.filter((event) => {
                        const isoDateString = event.dateAndTime;
                        const dateObject = new Date(isoDateString);
                        return dateObject
                            .toLocaleString("default", { month: "long" })
                            .toUpperCase()
                            .includes(month);
                    });
    
                    if (filteredEventItems.length > 0) {
                        return (
                            <div key={index}>
                                <Box my={4}>
                                    <Typography variant="h4"><b>{month}</b></Typography>
                                </Box>
                                <Grid container spacing={2}>
                                    {filteredEventItems.map((event, eventIndex) => (
                                        <Grid item xs={12} sm={6} key={eventIndex}>
                                            <EventCard event={event} />
                                        </Grid>
                                    ))}
                                </Grid>
                                <br></br>
                                <br></br>
                                <Divider variant="middle" />
                            </div>
                        );
                    }
                    return null;
                })
            ) : (
                <div style={centeredTextStyle}>
                <Typography variant="h4">
                    Check back later for future events
                </Typography>
            </div>
            )}
        </div>,
        <div>
            {filteredMonths.map((month, index) => {
                const filteredEventItems = priorEvents.filter((event) => {
                    const isoDateString = event.dateAndTime;
                    const dateObject = new Date(isoDateString);
                    return dateObject
                        .toLocaleString("default", { month: "long" })
                        .toUpperCase()
                        .includes(month);
                });
    
                if (filteredEventItems.length > 0) {
                    return (
                        <div key={index}>
                            <Box my={4}>
                                <Typography variant="h4"><b>{month}</b></Typography>
                            </Box>
                            <Grid container spacing={2}>
                                {filteredEventItems.map((event, eventIndex) => (
                                    <Grid item xs={12} sm={6} key={eventIndex}>
                                        <EventCard event={event} />
                                    </Grid>
                                ))}
                            </Grid>
                            <br></br>
                            <br></br>
                            <Divider variant="middle" />
                        </div>
                    );
                }
                return null;
            })}
        </div>,
    ];
    

    return (
        <div>
            {!isLoading ? (<div
                style={{
                    backgroundImage: `url(${StudentEvents})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "48vh",
                }}
                className="front-page-image"
            >
                <div style={{ textAlign: "center", color: "white" }}>
                    <Typography>
                        <h1 style={{
                            marginTop: "5vh", marginBottom: "0", paddingRight: "12px",
                            paddingLeft: "12px", backgroundColor: "#26365A", display: "inline-block", borderRadius: "10px"
                        }}>EVENTS</h1>
                    </Typography>
                </div>
            </div>) : (<div></div>)}

            <Container>
                {isLoading ? (
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                        Loading events...
                    </Typography>
                ) : (
                    <>
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
                            <Tab label="Upcoming Events">

                            </Tab>
                            <Tab label="Prior Events">

                            </Tab>
                        </Tabs>
                        {tabContent[selectedTab]}

                    </>
                )}
            </Container>
            <br></br>
            <br></br>
        </div>
    );
};

export default Events;
