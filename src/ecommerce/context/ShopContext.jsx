import React from 'react'
import { createContext } from 'react'
import Popular from '../components/popular/Popular';
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const ContextValue ={Popular};
  return (
    <div>
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    </div>
  )
}

export default ShopContextProvider