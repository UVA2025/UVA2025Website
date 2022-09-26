import React, { useContext } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const goToList = () => {
        setUser()
        navigate("/list");
    }

    return (
        <div>
            <div style={{margin: "auto", width: "15%", padding: "30px"}}>
                <TextField type="username" label="Username" variant="outlined" style={{margin: "10px"}} value={user} onChange={(e)=>{setUser(e.target.value);}}>

                </TextField>
                <TextField type="password" label="Password" variant="outlined" style={{margin: "10px"}}>
                     
                </TextField>
            <Button style={{marginLeft: "80px", marginTop: "10px"}} onClick={goToList}>
                Login
            </Button>
            </div>
        </div>
    );
};

export default Login;