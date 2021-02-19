import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../img/logo.svg'
import CartOverview from '../CartOverview/CartOverview'

import './Navbar.styles.scss'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      cartActive: false,
      cartActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  toggleCart = () => {
    this.setState(
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

  render() {

    return (
      <nav
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/* MAIN NAV */}
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Hygge and Clay" />
            </Link>
          </div>
          {/* <div className="account"> */}
            {/* Membership nav */}
            <CartOverview />
            {/* <Link to="/cart">Cart ({this.props.cartCount})</Link> */}
          {/* </div> */}
          <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
