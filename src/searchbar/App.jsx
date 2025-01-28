import React from 'react'
import Nav from './Nav'
import Body from '../body/Body'
import Mainbody from '../body/bottom/mainbody/Mainbody'
import ShopCategory from '../body/bottom/mainbody/box/ShopCategory'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../footer/Footer'

const App = () => {
  return (
    <>
      <div>
      <BrowserRouter>
          <Nav />
          <Body/>
          <Routes>
            <Route path='/clothes' element={<ShopCategory category='clothes' />} />
            <Route path='/electronics' element={<ShopCategory category='Electronics' />} />
            <Route path='/shoes' element={<ShopCategory category='shoes' />} />
            <Route path='/furniture' element={<ShopCategory category='furniture' />} />
            <Route path='/miscellaneous' element={<ShopCategory category='miscellaneous' />} />
     
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App