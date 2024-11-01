import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProviderWraper from './context/ContextProviderWraper.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <ContextProviderWraper>
    <App />
    </ContextProviderWraper>
    </Router>
  </React.StrictMode>,
)
