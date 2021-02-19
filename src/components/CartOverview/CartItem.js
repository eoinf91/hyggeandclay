import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function CartItems() {
    const {
        cartDetails,
        decrementItem,
        incrementItem,
    } = useShoppingCart()

    const cart = []
    for (const sku in cartDetails) {
        const cartEntry = cartDetails[sku]

        cart.push(
            <div className="cart-item">
                <div 
                    className="item-image"
                    style={{
                        'background-image': `url(${cartEntry.image})`,
                        'backgroundSize': 'cover',
                        'backgroundPosition': 'center',
                    }}
                />
                <div className="item-details">
                    <p className="text-green">{cartEntry.name}</p>
                    <p className="pink-text">{cartEntry.formattedValue}</p>
                    <div className="quantity">
                        <button
                            onClick={() => decrementItem(sku)}
                            aria-label={`Remove one ${cart.name} from your cart`}
                        >
                            -
                        </button>
                        <p className="pink-text">{cartEntry.quantity}</p>
                        <button
                            onClick={() => incrementItem(sku)}
                            aria-label={`Add one ${cart.name} from your cart`}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return cart
}