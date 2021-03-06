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
}) => (
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  productsTitle: PropTypes.string,
  aboutTitle: PropTypes.string,
  aboutContent: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.pageHead.image}
        title={frontmatter.pageHead.title}
        theData={data.productQuery}
        subtitle={frontmatter.pageHead.subTitle}
        productsTitle={frontmatter.products.productsTitle}
        aboutTitle={frontmatter.about.aboutTitle}
        aboutContent={frontmatter.about.aboutContent}
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
