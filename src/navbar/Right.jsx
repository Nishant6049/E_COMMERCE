import React from 'react'
import { IoCartSharp } from "react-icons/io5";


const Right = () => {
    return (
        <div className="flex items-center">
            <div className="mr-5 cursor-pointer">Login</div>
            <IoCartSharp className="text-xl cursor-pointer" />
        </div>
    )
}

export default Right