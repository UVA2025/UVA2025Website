import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const ClassGiving = () => {

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
                        What does the Fourth Year Trustees Class Giving Committee do?
                    </Typography>
                    <Typography paragraph>
                        The Class Giving Campaign is an annual tradition that empowers graduating students to support organizations that shaped our UVA experience. Your gift ensure future students enjoy the same opportunities we have during out four years at UVA. You can donate <a href="https://www.givecampus.com/schools/UniversityofVirginia/class-of-2025-campaign/?a=8987911#advocates" target="_blank">here</a>.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what Class Giving does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Akanksha Munshi - <a href="mailto:tvw8cd@virginia.edu">tvw8cd@virginia.edu</a></li>
                            <li>Josh Maggiano - <a href="mailto:urt6qe@virginia.edu">urt6qe@virginia.edu</a></li>
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
export default ClassGiving