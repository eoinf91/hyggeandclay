import React from 'react'
import { Link } from 'gatsby'

import ProductWindow from '../ProductWindow/ProductWindow'

import './FourCols.styles.scss'

const FourCols = ({ productData }) => {
    const { edges: products } = productData

    return (
        <div className="four-cols-container">
            <h2>Latest Products</h2>
            <div className="four-cols">
            {products.map(({ node: price }) => {
                const newSku = {
                    sku: price.id,
                    name: price.product.name,
                    price: price.unit_amount,
                    currency: price.currency,
                }
                return <ProductWindow key={price.id} sku={newSku} slug={price.product.metadata.slug} />
            })}
            </div>
            <Link to="/shop" className="cta">View Collection</Link>
        </div>
    )
}

export default FourCols