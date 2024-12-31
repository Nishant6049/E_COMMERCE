import React from 'react'

const Navbar = () => {
  return (
   <>
    <div className='bg-emerald-500 h-[10vh] text-xl flex justify-between items-center px-10'>
      <div>LogO</div>
      <ul className='w-[50%] flex justify-between '>
        <li className='cursor-pointer active:bg-emerald-400 p-3'>About</li>
        <li className='cursor-pointer active:bg-emerald-400 p-3'>Home</li>
        <li className='cursor-pointer active:bg-emerald-400 p-3'>Contact</li>
      </ul>
    </div>
  </>
  )
}

export default Navbar