import { AppBar, Box, Toolbar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const WelcomeText = (props) => {

    return (
        <Box
            display="flex"
            sx={{justifyContent: "center"}}      >
            <Typography><h1>{props.display}</h1></Typography>
        </Box>

    );
};

export default WelcomeText;