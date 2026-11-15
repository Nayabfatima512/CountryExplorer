import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MainContext } from './Component/MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
      
  </StrictMode>,
)
