import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const ThirdYearCeremony = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const styles = {
    paperContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // height: '100vh', // This ensures the Paper is centered vertically
    },
    paper: {
      padding: '16px',
      maxWidth: '600px',
    },
  };

  return (
    <div>
      <br></br>
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
        <br></br>
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="h5" gutterBottom>
            What is the Third Year Ceremony?
          </Typography>
          <Typography paragraph>
            The Third Year Ceremony is the premier event planned by the Third Year Council, with support from the Alumni Association and the Division of Student Affairs, marking the halfway point of the undergraduate experience. Students and their families join to celebrate their collegiate efforts and achievements thus far, as well as to look forward to what’s ahead. <b>Any student who purchased a class ring will receive it at the reception following the ceremony.</b>
          </Typography>

          <Typography variant="h6" gutterBottom>
            Who will be speaking at the ceremony?
          </Typography>
          <Typography paragraph>
            University leaders include President Jim Ryan; Senior Associate Vice President for Student Affairs and Dean of Students Cedric Rucker; and President and CEO of the Alumni Association Lily West. Student leaders include Third Year Council President James Edwards; Third Year Council Vice-President Liv Schortmann; and Third Year Ceremony Chair Sophia Ditty.
          </Typography>

          <Typography variant="h6" gutterBottom>
            I didn’t purchase a ring. Should I still attend?
          </Typography>
          <Typography paragraph>
            Yes! All third-year students and their families are welcome to attend, regardless of whether they purchased a class ring. Guests will enjoy remarks by University and student leaders, a class video compilation, live performances, and more.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Is the event free to attend?
          </Typography>
          <Typography paragraph>
            The Third Year Ceremony is FREE and tickets are not required. We do, however, encourage students to <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9YoMzHXWJeXJc0jYTaZieLDZfAeXNh8iMFyR3h2Ms-nzXNA/viewform" target="_blank">RSVP for themselves and their guests</a> to help with planning.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Is there a dress code?
          </Typography>
          <Typography paragraph>
            Wear what you are comfortable in; business casual is recommended, but not required.
          </Typography>

          <Typography variant="h6" gutterBottom>
            How can I get there? Where can I park?
          </Typography>
          <Typography paragraph>
            Parking information for free and paid options on the Downtown Mall can be found on the <a href="https://charlottesville.org/239/Parking-Information" target="_blank">City of Charlottesville website</a>. For those coming from Grounds, <a href="https://www.charlottesville.gov/482/Free-Trolley" target="_blank">check out free transportation options</a>.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Will there be a reception after the ceremony?
          </Typography>
          <Typography paragraph>
            Yes! Join us for a reception outside the Paramount Theater immediately following the ceremony. Celebrate with other classmates and families, enjoy pastries and light refreshments, snap a photo in front of the marquee and receive your Class of 2025 gift – an engraved champagne flute.
          </Typography>
          <Typography paragraph>
            We hope you will join us for this special day of celebration. For any questions, you may contact the Third Year Ceremony Chair, Sophia Ditty, at <a href="mailto:wmn8zf@virginia.edu">wmn8zf@virginia.edu</a>.
          </Typography>
        </Paper>
      </div>
      <br></br>
    </div>
  )

}
export default ThirdYearCeremony