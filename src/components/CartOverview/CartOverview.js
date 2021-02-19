import React from 'react'

import { useShoppingCart } from 'use-shopping-cart'
import CartToggle from './CartToggle'

import './CartOverview.styles.scss'

const CartOverview = () => {
  const {
    cartCount,
    cartDetails,
  } = useShoppingCart()

  return (
    <div className="account">
      <CartToggle
        cartCount = {cartCount}
        cartDetails = {cartDetails}
      />
    </div>
  )
}

export default CartOverview