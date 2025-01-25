import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import All from './ecommerce/Allfile'
import ShopContextProvider from './ecommerce/context/ShopContext'


createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <All/>
  </ShopContextProvider>
  
)
