import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestDark from "./TestDark";
import { DarkModeContext, DarkModeProvider } from './Context/DarkModeContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </StrictMode>,
)
