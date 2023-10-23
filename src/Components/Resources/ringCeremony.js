import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const RingCeremony = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    const styles = {
        paperContainer: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // This ensures the Paper is centered vertically
        },
        paper: {
          padding: '16px',
          maxWidth: '600px',
        },
      };

    return (
        <div style={styles.paperContainer}>
    <Paper elevation={3} style={styles.paper}>
      <Typography variant="h5" gutterBottom>
        What Does the Third Year Council Ceremony Committee Do?
      </Typography>
      <Typography paragraph>
        As a committee, we focus on the planning and execution of the Third Year Ceremony in the Fall. Third Year Ceremony is designed to celebrate the halfway point of our college careers, which traditionally is expressed in the purchase of a class ring. The Ceremony Committee has worked since the summer to create ring scholarship applications, find donors to support the recipients, and organize the events and logistics on the day of.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Who Are We?
      </Typography>
      <ul>
        <li>Sophia Ditty - Chair</li>
        <li>Dana Jou Alban</li>
        <li>Madi Asher</li>
        <li>Faith Crosley</li>
        <li>Chris Joseph</li>
        <li>Riley McNeill</li>
        <li>Katie McLaughlin</li>
        <li>Akanksha Munshi</li>
        <li>Sophia Palumbo</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Typography>
        If you have any questions about what TYC Ceremony Committee does, please contact Sophia Ditty at <a href="mailto:wmn8zf@virginia.edu">wmn8zf@virginia.edu</a>.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Stay Informed
      </Typography>
      <Typography>
        To stay up to date on class events, follow our Instagram: <a href="https://www.instagram.com/classof2025uva/" target="_blank" rel="noopener noreferrer">@classof2025uva</a>
      </Typography>
    </Paper>
  </div>
    )

}
export default RingCeremony