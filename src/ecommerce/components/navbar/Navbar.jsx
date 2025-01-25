import React from 'react'
import "./Navbar.css"
import { IoCart } from "react-icons/io5";
import logo from '../assets/photo/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu, setMenu] = useState("shop")

  return (
    <>
        <div className='first'>
        <div className="navbar ">
            <div className="nav-logo">
                <img className='h-[80px]' src={logo} alt="LOGO" />
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu("clothes")}} ><Link to='/'>Clothes</Link>{menu==="clothes"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("electronics")}} ><Link to='/electronics'>Electronics</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("furniture")}}><Link to='/furniture'>Furniture</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("shoes")}} ><Link to='/shoes'>Shoes</Link>{menu==="kids"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("miscellaneous")}} ><Link to='/miscellaneous'>Miscellaneous</Link>{menu==="kids"?<hr/>:<></>}</li>
                
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><IoCart className='text-4xl cursor-pointer'/></Link>
                <div className="nav-cart-count">5</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar