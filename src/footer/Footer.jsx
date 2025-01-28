import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import './Footer.css'


const Footer = () => {
  return (
    <div><hr />
        <div className="topFooter">
            <div className='flex flex-col justify-center items-center'>
                <img className='mt-12' src="" alt="LOGO" />
                <h1 className='font-bold text-4xl  underline mb-10'>SHOPPER</h1>
            </div>
            <ul className='listing flex justify-around'>
                <li><a href="">Company</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Offices</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="footer-social flex justify-center">
            <div className="insta">
                <FaSquareInstagram className='cursor-pointer'/>
            </div>
            <div className="pintester">
                <FaPinterest/>
            </div>
            <div className="whatshap">
                <FaWhatsapp/>
            </div>
        </div>
        <div className="footer-copy">
            <hr />
            <p>&copy;Copyright... 2024..</p>
        </div>
    </div>
  )
}

export default Footer