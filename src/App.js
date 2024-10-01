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
import SocialEvents from './Components/Resources/socialEvents';
import DEI from './Components/Resources/dei';
import Marketing from './Components/Resources/marketing';
import ServiceWellness from './Components/Resources/serviceWellness';
import PostGrad from './Components/Resources/postGrad';
import ClassGiving from './Components/Resources/classGiving';
import Lotl from './Components/Resources/lotl';
import Graduation from './Components/Resources/graduation';

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

          <Route path="/resource/graduation" element={<Graduation />} />
          <Route path="/resource/post-grad-transition" element={<PostGrad />} />
          <Route path="/resource/class-giving" element={<ClassGiving />} />
          <Route path="/resource/social-events" element={<SocialEvents />} />
          <Route path="/resource/marketing" element={<Marketing />} />
          <Route path="/resource/service-wellness" element={<ServiceWellness />} />
          <Route path="/resource/dei" element={<DEI />} />      
          <Route path="/resource/lotl" element={<Lotl />} />       
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
