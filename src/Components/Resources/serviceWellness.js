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
                        What does the Fourth Year Trustees Service & Wellness Committee do?
                    </Typography>
                    <Typography paragraph>
                        As a committee, we aim to extend our impact beyond the student body and towards the greater community. For the Class of 2025, we identify and schedule events to serve the unique needs of our class, focusing on implementing programs and events that promote mental health and well-being. Some initiatives we have promoted include mental health awareness campaigns, stress-relief activities, and mindfulness entirely. If you have any ideas you would like to see come to life, please email our co-chairs!
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what Service & Wellness does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Max Morrish - <a href="mailto:jrz9cd@virginia.edu">jrz9cd@virginia.edu</a></li>
                            <li>Kat Winters - <a href="mailto:txz5qx@virginia.edu">txz5qx@virginia.edu</a></li>
                        </ul>
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Stay Informed
                    </Typography>

                    <Typography>
                        To stay up to date on class events, follow our Instagram: <a href="https://www.instagram.com/classof2025uva/" target="_blank" rel="noopener noreferrer">@classof2025uva</a>
                    </Typography>
                </Paper>

            </div>
            <br></br>
        </div>
    )

}
export default ServiceWellness