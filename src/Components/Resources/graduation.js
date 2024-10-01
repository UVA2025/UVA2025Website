import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const Graduation = () => {

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
                        What does the Graduation Committee do?
                    </Typography>
                    <Typography paragraph>
                    The Graduation Committee plans and orchestrates the weekend of Final Exercises for the Class of 2025. Our committee is responsible for finding and selecting the Valediction Speaker, facilitating the Valediciton (awards) Ceremony, planning and throwing the Class Party, and organizing volunteers. While the culmination of our work takes place over the course of three days, we work diligently throughout the year to make Finals Weekend as enjoyable and memorable as possible to celebrate the end of our undergraduate careers. 
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what Graduation does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Ben Ueltschey - <a href="mailto:zgd7wr@virginia.edu">zgd7wr@virginia.edu</a></li>
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
export default Graduation