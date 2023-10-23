import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const ServiceWellness = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    const styles = {
        paperContainer: {
            display: 'flex',
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
                        What does the Third Year Council Service & Wellness Committee do?
                    </Typography>
                    <Typography paragraph>
                        As a committee, we aim to extend our impact beyond the student body and towards the greater community. For the Class of 2025, we identify and schedule events to serve the unique needs of our class, focusing on implementing programs and events that promote mental health and well-being. Some initiatives we have promoted include mental health awareness campaigns, stress-relief activities, and mindfulness entirely. If you have any ideas you would like to see come to life, please email our co-chairs!
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Who Are We?
                    </Typography>
                    <ul>
                        <li>Josh Novick - Co-Chair</li>
                        <li>Ryan Bowers - Co-Chair</li>
                        <li>Claire Butorac</li>
                        <li>Sarah Dowd</li>
                        <li>Ellie Cowan</li>
                        <li>Kat Winters</li>
                        <li>Emily Pitts</li>
                        <li>Pablo Calvo</li>
                        <li>Abbey Foley</li>
                    </ul>

                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what Service & Wellness does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Josh Novick - <a href="mailto:jn5hm@virginia.edu">jn5hm@virginia.edu</a></li>
                            <li>Ryan Bowers - <a href="mailto:qtn4wn@virginia.edu">qtn4wn@virginia.edu</a></li>
                        </ul>
                    </Typography>
                </Paper>

            </div>
            <br></br>
        </div>
    )

}
export default ServiceWellness