import Navbar from './Components/Navbar';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import WelcomeText from './Components/WelcomeText';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeText display={"WELCOME TO THE UVA CLASS OF 2025 WEBSITE"}/>
    </div>
  );
}

export default App;
