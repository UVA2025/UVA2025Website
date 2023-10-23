import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Events from './Components/Events'
import EventDetails from './Components/EventDetails'
import Committees from './Components/Committees'
import About from './Components/About'
import Footer from './Components/Footer';
import React from 'react';
import GoogleAnalytics from './Utils/GoogleAnalytics';
import ReactGA from 'react-ga'
import ACD from './Components/Resources/acd';
import SocialEvents from './Components/Resources/socialEvents';
import DEI from './Components/Resources/dei';
import RingCeremony from './Components/Resources/ringCeremony';
import Marketing from './Components/Resources/marketing';
import ServiceWellness from './Components/Resources/serviceWellness';
import ThirdYearCeremony from './Components/Resources/thirdYearCeremony';

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
          <Route path="/resources" element={<Committees />} />

          <Route path="/resource/acd" element={<ACD />} />
          <Route path="/resource/dei" element={<DEI />} />
          <Route path="/resource/marketing" element={<Marketing />} />
          <Route path="/resource/ring-ceremony" element={<RingCeremony />} />
          <Route path="/resource/service-wellness" element={<ServiceWellness />} />
          <Route path="/resource/social-events" element={<SocialEvents />} />
          <Route path="/resource/third-year-ceremony" element={<ThirdYearCeremony />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
