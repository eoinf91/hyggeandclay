import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import './buttons.styles.scss'

const CartCheckout = () => {
    const {
        redirectToCheckout,
    } = useShoppingCart()
    const [ loading, setLoading ] = useState(false)

    return (
        <button 
            onClick={() => {
                setLoading(true)
                redirectToCheckout()
            }}
            className="cta checkout-buttons"
        >Checkout</button>
    )
}

export default CartCheckout