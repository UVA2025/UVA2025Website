import { Button, TextField } from "@mui/material";
import ListItem from "./ListItem";
import AddIcon from '@mui/icons-material/Add';
import { useRef, useState } from "react";

const List = () => {
    const [toDoList, setToDoList] = useState([]);
    const [refresh, setRefresh] = useState([]);
    const body = useRef(null);

    const addToTheList = () => {
        toDoList.push({body: body.current.value})
        setRefresh(!refresh);
    }

    const removeFromList = () => {
        
    }

    return (
        <div>
            <h1 style={{marginLeft: "38%"}}> Your List of Things To Do! </h1>
            <div style={{margin: "auto", width: "25%", padding: "30px"}}>
                <div>
                    <TextField inputRef={body} style={{marginLeft: "60px"}} ></TextField>
                    <Button onClick={addToTheList} startIcon={<AddIcon style={{ fontSize: 40, color: "green" }}/>}></Button>
                </div>
                {toDoList.map((item) => (
                    <ListItem
                        key={item.body}
                        body={item.body}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;