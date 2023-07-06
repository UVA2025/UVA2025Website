import { Card, CardContent, Typography, Grid } from '@mui/material';

const EventDetails = (props) => {
  const { event } = props;

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardContent>
            <Typography variant="h4">{event.eventName}</Typography>
            <Typography variant="subtitle1">{event.dateAndTime}</Typography>
            <Typography variant="body1">{event.location}</Typography>
            <Typography variant="body1">{event.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EventDetails;