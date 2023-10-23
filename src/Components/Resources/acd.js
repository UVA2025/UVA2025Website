import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const ACD = () => {

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
                    What does the Academic Career Development Committee do?
                </Typography>
                <Typography paragraph>
                    As a committee, we work to provide access to the resources UVA has available for students in building their professional and academic network. In addition, we host events such as Head Shots on the Lawn and the annual Internship Summit which help prepare students for their future careers.
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Who Are We?
                </Typography>
                <ul>
                    <li>Ezra Attisso - Co-Chair</li>
                    <li>Ben Ueltschey - Co-Chair</li>
                    <li>Michael Kodsi - Head Website Development</li>
                    <li>Meagan Bass</li>
                    <li>Maddie Cahill</li>
                    <li>Trisha Gulati</li>
                    <li>Shreya Malani</li>
                    <li>Fiona O’Connor</li>
                    <li>Scott Wallace</li>
                    <li>Justin Wachtel</li>
                </ul>

                <Typography variant="h6" gutterBottom>
                Who should you contact if you have any questions about what the Academic Career Development Committee does?
                </Typography>
                <Typography>
                    <ul>
                        <li>Ezra Attisso - <a href="mailto:hdg6zf@virginia.edu">hdg6zf@virginia.edu</a></li>
                        <li>Ben Ueltschey - <a href="mailto:zgd7wr@virginia.edu">zgd7wr@virginia.edu</a></li>
                    </ul>
                </Typography>
            </Paper>
        </div>
    )

}
export default ACD