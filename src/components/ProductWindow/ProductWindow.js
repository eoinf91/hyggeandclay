import React from "react"
import { Link } from 'gatsby'
import './ProductWindow.styles.scss'
import { formatCurrencyString } from 'use-shopping-cart'

import ProductImage from "../../img/header_arch_img.jpg"

import './ProductWindow.styles.scss'

const ProductWindow = ({ sku, slug }) => {

  return (
    <div className="product-window">
      <Link to={`/products/${slug}`}>
        <div
          className="product-image"
          style={{
            'background': `url(${ProductImage})`,
            'backgroundSize': 'cover',
            'backgroundPosition': 'center'
          }}
        />
        <div className="product-info">
          <p className="text-orange">{sku.name}</p>
          <p className="heavy text-orange">
            Price:{' '}
            {formatCurrencyString({
              value: parseInt(sku.price),
              currency: sku.currency,
            })}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ProductWindow