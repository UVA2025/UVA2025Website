import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const PersonCard = ({ name, email, image, position }) => {
  return (
    <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
      <CardMedia
        component="img"
        alt="headshot"
        height="auto"
        image={image}
        style={{
          maxWidth: "100%",
          maxHeight: "250px",
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
          display: 'block',
          margin: 'auto'
        }}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{position}</Typography>
        <Typography variant="body2">{email}</Typography>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
