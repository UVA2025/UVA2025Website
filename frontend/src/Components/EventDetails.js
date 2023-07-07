import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const EventDetails = (props) => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/v1/events/${eventId}`);
        const data = await response.json();
        // Update the state with the received event data
        setEvent(data);
      } catch (error) {
        // Handle any errors that occur during the request
        console.log(error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return (
      <div>
        <Typography variant="h4">Loading...</Typography>
      </div>
    );
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4">{event.eventName}</Typography>
          <Typography variant="subtitle1">{event.dateAndTime}</Typography>
          {/* <Typography variant="body1">{event.description}</Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetails;