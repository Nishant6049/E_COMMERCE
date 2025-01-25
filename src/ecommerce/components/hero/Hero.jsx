import React from 'react'
import './Hero.css'
import clapHand from '../assets/photo/clap.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import Sunil from '../assets/malika.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New arrivals only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={clapHand} alt="hand-icon" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn cursor-pointer">
                <div>Latest Collection</div>
                <FaLongArrowAltRight/>
            </div>
        </div> 
        
        <div className="hero-right">
            <img src={Sunil} alt="hero_img" />
        </div> 


    </div>
    

  )
}

export default Hero