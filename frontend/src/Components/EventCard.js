import { Card, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

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

const EventCard = (props) => {
  return (
    <Card>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <img
            src={"https:" + props.event.image.file.url}
            alt={props.event.eventName}
            height={500}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div><b>{props.event.eventName.toUpperCase()}</b></div>
          <div>{formatDate(props.event.dateAndTime)}</div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventCard;
