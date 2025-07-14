import React from 'react';
import { cartActions } from './ContextProvider';

const CartProduct = ({ product }) => {
    const { cart, dispatch } = cartActions();

    const Increase = (id) => {
        dispatch({ type: "Increase", id });
    }

    const Decrease = (id) => {
        dispatch({ type: "Decrease", id });
    }

    const Remove = (id) => {
        dispatch({ type: "Remove", id });
    }

    return (
        <div>
            <div key={product.id} className='h-[480px] p-5 bg-amber-400 flex flex-col gap-3 items-center justify-center'>
                <h3>{product.id}</h3>
                <img src={product.thumbnail} alt="" />
                <h3>${product.price}</h3>

                <div className='flex gap-5 items-center justify-center'>
                    <button onClick={() => Decrease(product.id)} className='bg-white text-amber-800 font-bold text-2xl text-center rounded-4xl w-8 h-8'>-</button>
                    <button>{product.quantity}</button>
                    <button onClick={() => Increase(product.id)} className='bg-white text-amber-800 font-bold text-2xl text-center rounded-4xl w-8 h-8'>+</button>
                </div>
                <button onClick={() => Remove(product.id)} className='bg-red-800 text-white font-bold w-24 p-2'>Remove</button>
            </div>
        </div>
    );
}

export default CartProduct;