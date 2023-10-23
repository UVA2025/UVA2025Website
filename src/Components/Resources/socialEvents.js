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
                What does the Third Year Council Social & Events committee do?
                </Typography>
                <Typography paragraph>
                As a committee, we focus on planning fun and interactive events for members of the Class of 2025 to participate in to promote bonding and inclusion within our class. In the past, we have hosted a formal, spring fair, poker night, talent show, sunset series, tote bag painting event, movie night, and spring fairs. We are excited to keep organizing events this year and would love any feedback or suggestions!
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Who Are We?
                </Typography>
                <ul>
                    <li>Chelsea Huffman - Chair</li>
                    <li>Erin McGahan</li>
                    <li>Jessie Lewis</li>
                    <li>Spencer Henske</li>
                    <li>Sophie Atkinson</li>
                    <li>Amelia Brady</li>
                    <li>Will Clemens</li>
                    <li>Colin Halligan</li>
                    <li>Callahan Burton</li>
                    <li>Aramis Rolly</li>
                    <li>Sean Thiel</li>
                    <li>Sarah Rose Wilkinson</li>
                </ul>

                <Typography variant="h6" gutterBottom>
                Who should you contact if you have any questions about what the Social & Events Committee does?
                </Typography>
                <Typography>
                    <ul>
                        <li>Chelsea Huffman - <a href="mailto:dtu8mu@virginia.edu">dtu8mu@virginia.edu</a></li>
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
    )

}
export default SocialEvents