import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Events from './Components/Events'
import EventDetails from './Components/EventDetails'
import Committees from './Components/Committees'
import About from './Components/About'
import Footer from './Components/Footer';
import React, { useEffect } from 'react';
import GoogleAnalytics from './Utils/GoogleAnalytics';
import ReactGA from 'react-ga'

const TRACKING_ID = "G-PREY4E28GE";
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <div>
      <Router>
      <GoogleAnalytics />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route exact path="/events/:eventId" element={<EventDetails />} />
          <Route path="/committees" element={<Committees />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
