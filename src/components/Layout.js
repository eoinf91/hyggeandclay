import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import './font-face.css'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const TemplateWrapper = ({ children, pageTitle }) => {
  const { title, description } = useSiteMetadata()
  const PageUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return (
    <div>
      <Helmet>
        <html lang="en" />
        {pageTitle
          ? <title>{pageTitle} | {title}</title>
          : <title>{title}</title>
        }
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl={`${PageUrl}/shop/thank-you`}
        cancelUrl={`${PageUrl}/`}
        currency="EUR"
        allowedCountries={['IE']}
        billingAddressCollection={true}
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </CartProvider>
    </div>
  )
}

export default TemplateWrapper
