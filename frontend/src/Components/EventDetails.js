import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const formatDate = (dateString) => {
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Extract the day number from the date and add the appropriate suffix
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    const formattedDay = `${day}${daySuffix}`;

    return formattedDate.replace(/(\d+\/\d+\/\d+)/, formattedDay);
};

const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
        return "th";
    }

    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

const getParagraphText = (event) => {
    let text = "";

    event.content.forEach((contentElement) => {
        console.log("contentElement", contentElement);
        if (contentElement.nodeType === 'paragraph') {
            contentElement.content.forEach((textVal) => {
                text += textVal.value;
            })
        }
    });

    console.log("text", text);

    return text.trim();
};


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
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <div style={{ height: 300, overflow: 'hidden' }}>
            <img
              src={event.image.file.url}
              alt={event.eventName}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {event.eventName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {formatDate(event.dateAndTime)}
            </Typography>
            <Typography variant="body1" paragraph>
              {console.log("event NEW", event)}
            </Typography>
            {/* Additional event details or components */}
            {getParagraphText(event)}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EventDetails;