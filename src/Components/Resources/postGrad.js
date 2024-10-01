import { Typography, Paper } from "@mui/material";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const PostGrad = () => {

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
                        What does the Fourth Year Trustees Post Grad Transition Committee do?
                    </Typography>
                    <Typography paragraph>
                        The Post-Grad Transition Committee plays a vital role in supporting students as they transition into the post-graduate environment. By organizing events focused on job application preparation, networking, and city-specific resources, this committee empowers graduates to confidently navigate their next steps. The Post-Grad Transition Committee also plans events and promotes resources to help the Class of 2025 foster connections within their future cities, ensuring a smoother transition into post-college life. 
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Who should you contact if you have any questions about what Post Grad Transition does?
                    </Typography>
                    <Typography>
                        <ul>
                            <li>Maddie Cahill - <a href="mailto:pcm8vy@virginia.edu">pcm8vy@virginia.edu</a></li>
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
export default PostGrad