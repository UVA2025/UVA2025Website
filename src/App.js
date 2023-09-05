import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Events from './Components/Events'
import EventDetails from './Components/EventDetails'
import Resources from './Components/Resources'
import About from './Components/About'
import Footer from './Components/Footer';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-PREY4E28GE"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PREY4E28GE');
            `}
          </script>
        </Helmet>
      <Router>
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
