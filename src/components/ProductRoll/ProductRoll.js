import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductWindow from '../ProductWindow/ProductWindow'

export default (props) => (
  <StaticQuery
    query={graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { active: { eq: true } }
          sort: { fields: [unit_amount] }
        ) {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                metadata {
                  slug
                }
              }
            }
          }
        }
      }
    `}
    render={({ prices }) => (
      <div className="four-cols">
        {prices.edges.map(({ node: price }) => {
          const newSku = {
            sku: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
          }
          return <ProductWindow key={price.id} sku={newSku} slug={price.product.metadata.slug} />
        })}
      </div>
    )}
  />
)