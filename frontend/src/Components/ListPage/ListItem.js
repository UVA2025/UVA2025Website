import { Button, Card, Typography } from "@mui/material";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';


const ListItem = (props) => {

    return (
        <div style={{margin: "10px"}}>
            <Card sx={{
            bgcolor: "lightskyblue",
            padding: "10px",
            boxShadow: 7,
            borderRadius: 2,
          }}>
                <Typography variant="h6">{props.body}</Typography>
                <Button style={{color: "green"}} startIcon={<CheckIcon/>}></Button>
                <Button startIcon={<EditIcon/>}></Button>
            </Card>
        </div>
    );
};

export default ListItem;