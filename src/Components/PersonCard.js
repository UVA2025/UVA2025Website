import React from "react";
import { Container, Grid, Typography, CardMedia } from "@mui/material";

const PersonCard = ({ name, email, image, position }) => {
  return (
    <div>
      <Container style={{ marginBottom: "40vh" }}>
        {console.log("image link", image)}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h6">{position}</Typography>
            <Typography variant="body1">{email}</Typography>
            <CardMedia
                            component="img"
                            alt="headshot"
                            height="auto"
                            image={image}
                            style={{
                                maxWidth: 300,
                                maxHeight: 250,
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                                display: 'block',
                                margin: 'auto'
                            }}
                        />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PersonCard;
