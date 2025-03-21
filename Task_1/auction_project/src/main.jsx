import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from '../components/Navbar.jsx'
import Dashboard from '../components/Dashboard.jsx'
import Signin from '../components/Signin.jsx'
import Signup from '../components/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Dashboard />
    <Signin />
    <Signup />
  </StrictMode>,
)
