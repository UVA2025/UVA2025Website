import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Rotunda from '../images/Rotunda.jpeg';
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

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${Rotunda})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "60vh",
                }}
                className="front-page-image"
            >
                <div style={{ textAlign: "center", color: "white" }}>
                    <Typography>
                        <h1 style={{ margin: "0" }}>EVENTS</h1>
                    </Typography>
                </div>
            </div>
            <Container>
                {isLoading ? (
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                        Loading events...
                    </Typography>
                ) : (
                    <>
                        {months.map((month, index) => {
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
                                    <Typography variant="h4">{month}</Typography>
                                    <Grid container spacing={2}>
                                        {filteredEventItems.map((event, eventIndex) => (
                                            <Grid item xs={12} sm={6} key={eventIndex}>
                                                <EventCard event={event} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            );
                        })}
                    </>
                )}
            </Container>
        </div>
    );
};

export default Events;
