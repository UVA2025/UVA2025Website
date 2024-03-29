import Typography from '@mui/material/Typography';
import { Container, Grid, Box, Divider } from '@mui/material';
import StudentEvents from '../images/student_events.jpeg';
import EventCard from './EventCard';
import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchEventData = () => {
        fetch("http://localhost:9000/api/v1/events")
            .then(response => response.json())
            .then(data => {
                setEvents(data);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchEventData();
    }, []);

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
                        <h1 style={{ margin: "0" }}>EVENTS</h1>
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
                        {filteredMonths.map((month, index) => {
                            const filteredEventItems = events.filter((event) => {
                                const isoDateString = event.dateAndTime;
                                const dateObject = new Date(isoDateString);

                                return dateObject
                                    .toLocaleString("default", { month: "long" })
                                    .toUpperCase()
                                    .includes(month);
                            });

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
                        })}
                    </>
                )}
            </Container>
            <br></br>
            <br></br>
        </div>
    );
};

export default Events;
