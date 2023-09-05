import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const PersonCard = ({ name, email, image, position }) => {
  return (
    <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
      <div style={{ flex: 1, maxHeight: "250px" }}>
        <CardMedia
          component="img"
          alt="headshot"
          height="100%"
          image={image}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{position}</Typography>
        <Typography variant="body2">{email}</Typography>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
