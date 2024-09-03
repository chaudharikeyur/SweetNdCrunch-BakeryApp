import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(

  <Auth0Provider
  domain="dev-2kse80k24bl5jbdd.us.auth0.com"
  clientId="BPmLuMo7suI80ibsF5Tf1oay87TI8I3i"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
  
)
