import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './Contexts/UserContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </UserProvider>
);
