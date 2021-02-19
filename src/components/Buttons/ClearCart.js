import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import './buttons.styles.scss'

const ClearCart = () => {
    const {
        clearCart,
    } = useShoppingCart()

    return (
        <button 
            onClick={clearCart}
            className="cta checkout-buttons hollow"
        >Clear Cart</button>
    )
}

export default ClearCart



// export default function ClearCart() {
//     const {
//         clearCart,
//     } = useShoppingCart()

//     const clearCartBtn = () => (
//         <button onClick={clearCart}>
//             Clear cart
//         </button>
//     )

//     return clearCartBtn
// }