// import React from 'react'
// import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
// import { Helmet } from 'react-helmet'
// import { graphql, Link } from 'gatsby'
// import Layout from './Layout'
// import Content, { HTMLContent } from './Content'
// import './productItem.styles.scss'
// import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

// export const ProductItemTemplate = ({
//   content,
//   price,
//   contentComponent,
//   description,
//   tags,
//   title,
//   helmet,
//   currency,
//   priceId,
// }) => {
//   const PostContent = contentComponent || Content
//   const { addItem } = useShoppingCart()

//   const newSku = {
//     sku: priceId,
//     name: title,
//     price: price,
//     currency: currency,
//   }

//   return (
//     <div>
//       {helmet || ''}
//       <div className="product-item">
//         <div className="selected-product">
//           <div className="product-images">
//             <div className="main-image" />
//             <div className="image-selection">
//               <div className="image" />
//               <div className="image" />
//               <div className="image" />
//               <div className="image" />
//             </div>
//           </div>
//           <div className="product-description">
//             <div className="product-description-title">
//               <h2>{title}</h2>
//               {/* <h4>€{price}</h4> */}
//               <h4>
//                 {formatCurrencyString({
//                   value: parseInt(price),
//                   currency: currency,
//                 })}
//               </h4>
//             </div>
//             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
//             {/* <div className="color-selection">
//               <h4>Colour:</h4>
//               <div className='selectors'>
//                 <p>Colours tba</p>
//               </div>
//             </div> */}
//             <button 
//               className="cta"
//               onClick={() => addItem(newSku)}
//             >
//                 Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// ProductItemTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
//   price: PropTypes.string
// }

// const ProductItem = ({ data }) => {
//   const { stripePrice: post } = data

//   return (
//     <Layout>
//       <ProductItemTemplate
//         // content={post.html}
//         priceId={post.id}
//         content="content"
//         price={post.unit_amount}
//         currency={post.currency}
//         // price="price"
//         contentComponent={HTMLContent}
//         // description={post.frontmatter.description}
//         description="description"
//         helmet={
//           <Helmet titleTemplate="%s | Shop">
//             {/* <title>{`${post.frontmatter.title}`}</title> */}
//             <title>{post.product.name}</title>
//             <meta
//               name="description"
//               // content={`${post.frontmatter.description}`}
//               content="content"
//             />
//           </Helmet>
//         }
//         // tags={post.frontmatter.tags}
//         // title={post.frontmatter.title}
//         tags="tags"
//         title={post.product.name}
//       />
//     </Layout>
//   )
// }

// ProductItem.propTypes = {
//   data: PropTypes.shape({
//     stripePrice: PropTypes.object,
//   }),
// }

// export default ProductItem

// export const pageQuery = graphql`
//   query ProductItemByID($slug: String!) {
//     stripePrice(product: {metadata: {slug: {eq: $slug}}}) {
//       id
//       unit_amount
//       currency
//       product {
//         name
//         metadata {
//           slug
//         }
//       }
//     }
//   }
// `
