import { Box, Container, Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const EventCard = (props) => {
    console.log(props);
    return (
        <>
            <Grid container spacing={5} justifyContent="center">
                <Grid item xs={12} md={12} lg={12} container
                    wrap="nowrap" // --> add this line to disable wrap
                    sx={{ overflow: "auto" }}>

                    {/* <div
                        style={{
                            backgroundImage: `url(${props.event.image.file.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '70vh',
                        }}
                        className="front-page-image"
                    >
                        <div
                            style={{
                                textAlign: "center",
                                color: "White"
                            }}
                            className="front-page-image">
                            <Typography>
                                <h1>
                                    WELCOME TO THE UVA CLASS OF 2025 WEBSITE
                                </h1>
                            </Typography>
                        </div>
                    </div> */}
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                </Grid>
                <Grid item xs={10} sm={4} md={4} justifyContent="center">
                    {/* <Box
                        display="in-line"
                        sx={{ justifyContent: "center" }}      >
                        <Typography><h1 style={{ textAlign: "right" }}>WHO WE ARE</h1></Typography>
                        <Typography><p style={{ textAlign: "right" }}>Welcome to the official website for the Class of 2025 Third Year Council! Check out upcoming events through the Events tab or various committees through the Resources tab.</p></Typography>
                    </Box> */}
                </Grid>
                <Grid item xs={10} sm={4} md={4} justifyContent="center">
                    <img
                        src={"https:" + props.event.image.file.url}
                        alt={props.event.eventName}
                        height={500}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Grid>
                {console.log("props event image url", props.event.image.file.url)}
                <Grid item xs={1} sm={2} md={2}>
                </Grid>
            </Grid>
            {props.event.eventName}
        </>
    )
}
export default EventCard;