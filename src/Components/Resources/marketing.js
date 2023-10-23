import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const Marketing = () => {

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
                        What does the Third Year Council Marketing Committee do?
                    </Typography>
                    <Typography paragraph>
                        As a committee, we help to distribute Third Year Council event information to the Class of 2025. We distribute this information through our instagram, newsletters, and more. We are also the ones responsible for class merchandise so if you have any ideas that you would like to see come to life, feel free to DM our instagram page!
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Who Are We?
                    </Typography>
                    <ul>
                        <li>Ethan Johnson - Co Chair</li>
                        <li>Sammy Vinh - Co Chair</li>
                        <li>Willoughby Hardesty - Third Year Ceremony Representative</li>
                        <li>Anran Zhao - Social Committee Representative</li>
                        <li>Kiera Chambers - Social Committee Representative</li>
                        <li>Leighton Klevana - Wellness and Service Representative</li>
                        <li>Nick Porter - Wellness and Service Representative</li>
                        <li>Matthew Moore - Academic and Career Development Representative</li>
                        <li>Shruthi Solaiappan - Diversity, Equity, and Inclusion Representative</li>
                    </ul>

                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what Marketing does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Ethan Johnson - <a href="mailto:cyt3cb@virginia.edu">cyt3cb@virginia.edu</a></li>
                            <li>Sammy Vinh - <a href="mailto:gak5ux@virginia.edu">gak5ux@virginia.edu</a></li>
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
export default Marketing