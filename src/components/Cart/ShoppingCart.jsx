import React from 'react'

import { cartActions } from './ContextProvider';

import CartProduct from './cartProduct';

const ShoppingCart = () => {
    const {cart} = cartActions();

    const totalItems = (box)=>{
        return box.reduce((sum, product)=> sum + product.quantity, 0)
    }

       const totalPrice = (box)=>{
        return box.reduce((total, product)=> total + product.quantity * product.price, 0)
    }

  return (
    <div className='flex p-8'>
      <div className='md:grid md:grid-cols-4 md:gap-6 gap-6 grid  mt-5'>
        {
            cart.map((item)=>(
                <CartProduct key={item.id} product={item}/>
            ))
        }
      </div>

      <div>
        <h4>Total item:{totalItems(cart)}</h4>
        <h4>Total price:${totalPrice(cart)}</h4>
      </div>
    </div>
  )
}

export default ShoppingCart
