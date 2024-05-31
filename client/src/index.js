import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <KindeProvider
          clientId="5884f94f7ba44096a63581ab6165a293"
          domain="https://euro2024.kinde.com"
          redirectUri="https://betting-euro2024.onrender.com/profile"
          logoutUri="https://betting-euro2024.onrender.com/"
          isDangerouslyUseLocalStorage={true}
      >
          <App />
      </KindeProvider>
  </React.StrictMode>
);
