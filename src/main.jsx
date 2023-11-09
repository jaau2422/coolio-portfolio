import React from 'react'
import App from './App.jsx'
import './index.css'
import Overlay from './Overlay.jsx';
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
    <>
    <Overlay />
      <App />
      
    </>
  )