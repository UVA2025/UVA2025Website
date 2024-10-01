import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const Lotl = () => {

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
                        What does the Lighting of the Lawn (LOTL) Committee do?
                    </Typography>
                    <Typography paragraph>
                        The Lighting of the Lawn (LOTL) Committee is responsible for planning, organizing, and executing one of the most anticipated annual events on Grounds. Fully student-led, the committee works to create an event that emphasizes the power of community, reflection, and celebration at the end of the Fall semester. The event includes performances from a cappella, dance, and other student groups, speeches from selected community and University members, and a light show on the Rotunda. The committee oversees everything from grant applications to light hanging to and vendor communication, ensuring a memorable experience for students, faculty, and the broader UVA community.                    
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what LOTL does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Chelsea Huffman - <a href="mailto:dtu8mu@virginia.edu">dtu8mu@virginia.edu</a></li>
                            <li>Riley McNeil - <a href="mailto:mqt3uz@virginia.edu">mqt3uz@virginia.edu</a></li>
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
export default Lotl