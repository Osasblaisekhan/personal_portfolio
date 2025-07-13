import React, { createContext, useContext, useEffect, useReducer } from 'react'

import CartReducer from './CartReducer'

const cartContext = createContext();

export const ContextProvider = ({children}) => {

    const [cart, dispatch] = useReducer(CartReducer, [], ()=>{
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart): [];
    });

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  return (
   <cartContext.Provider value={{cart, dispatch}}>
    {children }
   </cartContext.Provider>
  )
}

export const cartActions = ()=> useContext(cartContext);
