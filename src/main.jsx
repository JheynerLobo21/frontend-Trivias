import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './Components/App.jsx'
import './css/index.css'
import { Auth0ProviderWithNavigate } from './Components/Auth0/Auth0ProviderWithNavigate.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0ProviderWithNavigate>
    <App />
    </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
)
