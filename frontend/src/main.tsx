import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importing the main CSS file
import App from './App.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={"dev-zdkigftaz2v0bnvz.us.auth0.com"}
      clientId={"SHFzgSuMrRXdv8AApf9Gi8orgxqZif4Q"}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://weatherr-app/api",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);