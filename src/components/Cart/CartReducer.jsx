const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            return [...state, { ...action.product, quantity: 1 }];

        case "Remove":
            return state.filter(product => product.id !== action.id);

        case "Increase":
            return state.map(product => 
                product.id === action.id 
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product
            );

        case "Decrease":
            return state.map(product => 
                product.id === action.id 
                    ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 } 
                    : product
            );

        default:
            return state; // Ensure you return the state
    }
}

// import React from 'react'

// const CartReducer = (state, action) => {
//     switch(action.type){
//         case "Add":
//             return [...state, action.product]

//         case "Remove":

//         case "Increase":
//              const indexI = state.findIndex((p)=> p.id === action.id)
//                state[indexI].quantity = +1
//             return[...state]
//         case "Decrease" :
//             const index = state.findIndex((p)=> p.id === action.id);
//             state[index].quantity = -1
//             return[...state]

//         default:
//             state
//     }

// }

export default CartReducer
