import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

import './thankyou.styles.scss'

class ThankYouForPurchase extends React.Component {
    
    render () {
        return (
            <Layout>
                <div className="ty-purchase">
                    <h1>Thank you for your purchase</h1>
                    <p className="text-green">We will start processing your order and will let you know when it is on it's way</p>
                    <Link 
                        to="/" 
                        className="cta"
                    >
                        Return Home
                    </Link>
                </div>
            </Layout>
        )
    }
}

export default ThankYouForPurchase