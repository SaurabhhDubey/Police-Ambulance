import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Portal from './components/Portal/Portal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portal />
  </StrictMode>,
)
