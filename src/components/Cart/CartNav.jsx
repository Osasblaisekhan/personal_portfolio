import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cartActions } from './ContextProvider'
const CartNav = () => {
    const {cart} = cartActions()
  return (
    <div className='flex items-center'>
      <nav className='bg-amber-950 w-full h-16 flex items-center gap-4 justify-between p-7'>
        <ul className='flex gap-5'>
            <li>
                <Link to={'/osas/'} className='text-2xl text-amber-200 font-bold'>
                Home
                </Link>
            </li>

             <li>
                <Link to={'/osas/'} className='text-2xl text-amber-200 font-bold'>
                Home
                </Link>
            </li>

             <li>
                <Link to={'/osas'} className='text-2xl text-amber-200 font-bold'>
                Home
                </Link>
            </li>
        </ul>

       <Link to={'/osas/cart'}>
        <div className='text-white flex gap-2'>
            <ShoppingCart color='white'/>
         {cart.length}
        </div>
       </Link>
      </nav>
    </div>
  )
}

export default CartNav;
