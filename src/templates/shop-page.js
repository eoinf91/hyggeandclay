import React from 'react'
import { graphql } from 'gatsby'
import Search from '../components/ShopFilter/ShopFilter'
import Layout from '../components/Layout'

import './shop.styles.scss'

export const ShopPageTemplate = () => (
  <div></div>
)

const ShopPage = props => {
  const { data } = props

  return (
    <Layout
      pageTitle={"Shop"}
    >
      <Search searchList={data.productQuery.edges} />
    </Layout>
  )
}

export default ShopPage

export const shopQuery = graphql`
  query {
    productQuery: allStripePrice {
      edges {
        node {
          id
          product {
            name
            metadata {
              slug
              style
              color
            }
          }
          unit_amount
          currency
        }
      }
    }
  }
`
