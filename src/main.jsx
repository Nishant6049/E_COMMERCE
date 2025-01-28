import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apps from './store/Apps'


createRoot(document.getElementById('root')).render(
    <Apps/>
  
)
