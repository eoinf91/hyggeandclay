import React from 'react'
import CartItem from './CartItem'
import ClearCart from '../Buttons/ClearCart'
import CartCheckout from '../Buttons/cartCheckout'
import PoweredByStripe from '../../img/powered_by_stripe.svg'

const CartToggle = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartActive: false,
            cartActiveClass: ''
        }
    }

    toggleCart = () => {
        this.setState (
            {
                cartActive: !this.state.cartActive,
            }, 
            () => {
                this.state.cartActive
                    ? this.setState({
                        cartActiveClass: 'is-active',
                    })
                    : this.setState({
                        cartActiveClass: '',
                    })
            }
        )
    }

    render () {
        return (
            <div className="account">
                <p 
                    className="nav-item" 
                    onClick={() => this.toggleCart()}
                >
                    Cart({this.props.cartCount})
                </p>
                <div 
                    className={`cart-box ${this.state.cartActiveClass}`}
                >
                    <p 
                    className="text-orange btn" 
                    onClick={() => this.toggleCart()}
                    >
                        Close Cart
                    </p>
                    <h4 className="text-green">Your Cart</h4>
                    <CartItem />
                    <div className="cart-buttons">
                        <CartCheckout />
                        <ClearCart />
                        <img src={PoweredByStripe} alt="Powered by Stripe" />
                    </div>
                </div>
            </div>
        )
    }
}

export default CartToggle