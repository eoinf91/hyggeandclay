import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header/Header'
import FourCols from '../components/FourCols/FourCols'
import TwoColImage from '../components/TwoColImage/TwoColImage'
import ContactBlock from '../components/ContactBlock/ContactBlock'

export const IndexPageTemplate = ({
  image,
  productsTitle,
  subtitle,
  title,
  theData,
  aboutTitle,
  aboutContent,
}) => {
  return (
    <div>
      <Header
        headerTitle={title}
        headerCopy={subtitle}
        productImage={image.publicURL}
      />
      <FourCols
        productsTitle={productsTitle}
        productData={theData}
      />
      <TwoColImage
        twoColHeader={aboutTitle}
        twoColCopy={aboutContent}
      />
      <ContactBlock />
    </div>
  )
}

IndexPageTemplate.propTypes = {
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  products: PropTypes.shape({
    productsTitle: PropTypes.string,
  }),
  about: PropTypes.shape({
    aboutTitle: PropTypes.string.isRequired,
    aboutContent: PropTypes.string.isRequired,
  }),
}

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <IndexPageTemplate
        image={data.frontmatter.pageHead.image}
        title={data.frontmatter.pageHead.title}
        theData={data.productQuery}
        subtitle={data.frontmatter.pageHead.subTitle}
        productsTitle={data.frontmatter.products.productsTitle}
        aboutTitle={data.frontmatter.about.aboutTitle}
        aboutContent={data.frontmatter.about.aboutContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    productQuery: PropTypes.shape({
      edges: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        pageHead {
          title
          subTitle
          image {
            publicURL
          } 
        }
        products {
          productsTitle
        }
        about {
          aboutTitle
          aboutContent
        }
      }
    }
    productQuery: allStripePrice(limit: 4) {
      edges {
        node {
          product {
            name
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
