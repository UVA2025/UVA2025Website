import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Events from './Components/Events'
import EventDetails from './Components/EventDetails'
import Resources from './Components/Resources'
import About from './Components/About'
import Footer from './Components/Footer';
import React, { useEffect } from 'react';
import GoogleAnalytics from './Components/GoogleAnalytics';


function App() {
  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-ZS2T5CKNB8');
  }, []);

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
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
