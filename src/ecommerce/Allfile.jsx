import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSingUp from './pages/LoginSingUp'
import Footer from './components/footer/Footer'

const All = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/clothes' element={<ShopCategory category='clothes' />} />
            <Route path='/electronics' element={<ShopCategory category='Electronics' />} />
            <Route path='/shoes' element={<ShopCategory category='shoes' />} />
            <Route path='/furniture' element={<ShopCategory category='furniture' />} />
            <Route path='/miscellaneous' element={<ShopCategory category='miscellaneous' />} />
            <Route path='/product/:productId' element={<Product />} />
            
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSingUp />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default All
