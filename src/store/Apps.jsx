import React, { createContext, useState } from 'react'
import App from '../searchbar/App';

export const context = createContext();
const Apps = () => {
    const [istrue, setistrue] = useState(false);
  return (
    <context.Provider value={{istrue,setistrue}}>
        <App/>
    </context.Provider>
  )
}

export default Apps