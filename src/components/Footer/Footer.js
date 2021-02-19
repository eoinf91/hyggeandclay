import React from 'react'
import { Link } from 'gatsby'
import Instagram from '../../img/instagram.svg'
import Facebook from '../../img/facebook.svg'

import './Footer.styles.scss'

const Footer = class extends React.Component {
	render() {
		return (
			<footer>
				<div className="two-col">
					<div className="col foot-nav">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/contact">Contact</Link>
					</div>
					<div className="col social-col">
						<a href="https://instagram.com">
							<img src={Instagram} alt="Instagram" />
						</a>
						<a href="https://facebook.com">
							<img src={Facebook} alt="Facebook" />
						</a>
					</div>
				</div>
				<div className="two-col">
					<div className="col copyright">
						<p>Copyright 2021, Hygge and clay.</p>
					</div>
					<div className="col legal">
						<p>
							<Link to="/">Terms &amp; Conditions</Link>
							&nbsp;|&nbsp;
							<Link to="/">Privacy</Link>
						</p>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
