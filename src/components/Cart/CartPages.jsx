import React from 'react'

import { Routes, Route } from 'react-router-dom';

import CartNav from './CartNav'

import Home from './Home';

import ShoppingCart from './ShoppingCart';

const CartPages = () => {
  return (
    <div>
      <CartNav />

      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/' exact element={<Home />}/>
        <Route path='/' exact element={<Home />}/>

        <Route path='/cart' element={<ShoppingCart />}/>
      </Routes>
    </div>
  )
}

export default CartPages
