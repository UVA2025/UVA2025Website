import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const SocialEvents = () => {

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
                        What does the Fourth Year Trustees Social & Events committee do?
                    </Typography>
                    <Typography paragraph>
                        As a committee, we focus on planning fun and interactive events for members of the Class of 2025 to participate in to promote bonding and inclusion within our class. In the past, we have hosted a formal, spring fair, poker night, talent show, sunset series, tote bag painting event, movie night, and spring fairs. We are excited to keep organizing events this year and would love any feedback or suggestions!
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what the Social & Events Committee does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Jessie Lewis - <a href="mailto:feq4wc@virginia.edu">feq4wc@virginia.edu</a></li>
                            <li>Erin McGahan - <a href="mailto:zrz4gw@virginia.edu">zrz4gw@virginia.edu</a></li>
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
export default SocialEvents