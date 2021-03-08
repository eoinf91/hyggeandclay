import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import './productItem.styles.scss'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import FourCols from '../components/FourCols/FourCols'

export const ProductItemTemplate = ({
  price,
  title,
  helmet,
  currency,
  priceId,
  productImage,
  productData,
  description,
}) => {
  const { addItem } = useShoppingCart()

  const newSku = {
    name: title,
    description: 'A pair of earrings',
    id: priceId,
    price: price,
    currency: currency,
    image: productImage,
  }

  return (
    <div>
      {/* {helmet || ''} */}
      <div className="product-item">
        <div className="selected-product">
          <div className="product-images">
            <div 
              className="main-image" 
              style={{
                "backgroundImage": `url(${newSku.image})`,
                "backgroundSize": "cover",
                "backgroundPosition": "center"
              }}
            />
            {/* <div className="image-selection">
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
            </div> */}
          </div>
          <div className="product-description">
            <div className="product-description-title">
              <h2>{newSku.name}</h2>
              <h4>
                {formatCurrencyString({
                  value: parseInt(newSku.price),
                  currency: newSku.currency,
                })}
              </h4>
            </div>
            <p>{description}</p>
            <button 
              className="cta"
              onClick={() => addItem(newSku)}
            >
                Add to cart
            </button>
          </div>
        </div>
        <FourCols productData={productData} />
      </div>
    </div>
  )
}

ProductItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  price: PropTypes.string
}

const ProductItem = ({ data }) => {
  const { stripePrice: post } = data

  return (
    <Layout
      pageTitle={post.product.name}
    >
      <ProductItemTemplate
        priceId={post.id}
        content="content"
        price={post.unit_amount}
        currency={post.currency}
        productImage={post.product.images[0]}
        contentComponent={HTMLContent}
        description={post.product.description}
        productData={data.productQuery}
        // helmet={
        //   <Helmet titleTemplate="%s | Hygge &amp; Clay">
        //     <title>{post.product.name}</title>
        //     <meta
        //       name="description"
        //       content="content"
        //     />
        //   </Helmet>
        // }
        tags="tags"
        title={post.product.name}
      />
    </Layout>
  )
}

ProductItem.propTypes = {
  data: PropTypes.shape({
    stripePrice: PropTypes.object,
    productQuery: PropTypes.shape({
      edges: PropTypes.object,
    }),
  }),
}

export default ProductItem

export const pageQuery = graphql`
  query ProductItemByID($slug: String!) {
    stripePrice(product: {metadata: {slug: {eq: $slug}}}) {
      id
      unit_amount
      currency
      product {
        name
        description
        metadata {
          slug
        }
        images
      }
    }
    productQuery: allStripePrice(limit: 4) {
      edges {
        node {
          product {
            name
            images
            metadata {
              slug
            }
          }
          unit_amount
          currency
        }
      }
    }
  }
`
