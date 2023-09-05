import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Your Google Analytics tracking code
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-ZS2T5CKNB8', {
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null;
}

export default GoogleAnalytics;
