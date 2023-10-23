import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const DEI = () => {

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
                    What is Diversity, Equity, and Inclusion (DEI)’s mission?
                </Typography>
                <Typography paragraph>
                    The DEI mission is to host and co-sponsor events here on grounds that showcase different types of diversity and bring awareness to issues, minority groups, and current events. Moreover, we aim to support existing CIOs on grounds and help facilitate self-sufficiency in smaller CIOs.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Who Are We?
                </Typography>
                <ul>
                    <li>Onyii Eze - Chair</li>
                    <li>Jenna Sleiman</li>
                    <li>Julia DaSilva</li>
                    <li>Jonathon Scanlon</li>
                    <li>Keya Pokhriyal</li>
                    <li>James Siegener</li>
                    <li>Kayla Feliciano</li>
                    <li>Meg Annamaneni</li>
                </ul>

                <Typography variant="h6" gutterBottom>
                    What type of events does DEI host?
                </Typography>
                <Typography>
                    DEI holds all types of events in collaboration with cultural organizations around grounds and groups which encourage diversity, equity, and inclusion.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    How can my organization get involved with TYC DEI?
                </Typography>
                <Typography>
                    If your organization has an idea for an event but needs sponsorship to make it happen, you can email Onyii Eze at <a href="mailto:jsx6jb@virginia.edu">jsx6jb@virginia.edu</a> for support!
                </Typography>
            </Paper>
        </div>
    )

}
export default DEI