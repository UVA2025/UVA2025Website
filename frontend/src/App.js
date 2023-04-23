import Navbar from './Components/Navbar';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import WelcomeText from './Components/WelcomeText';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Events from './Components/Events'
import Resources from './Components/Resources'
import About from './Components/About'
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
