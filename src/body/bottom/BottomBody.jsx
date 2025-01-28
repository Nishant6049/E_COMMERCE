import React from 'react'
import Sidebar from './slidebar/Sidebar'
import Mainbody from './mainbody/Mainbody'

const BottomBody = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Mainbody/>
    </div>
  )
}

export default BottomBody