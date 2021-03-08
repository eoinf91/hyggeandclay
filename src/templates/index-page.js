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
  aboutImage,
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
        twoColImage={aboutImage.publicURL}
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
    aboutImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <IndexPageTemplate
        image={data.markdownRemark.frontmatter.pageHead.image}
        title={data.markdownRemark.frontmatter.pageHead.title}
        theData={data.productQuery}
        subtitle={data.markdownRemark.frontmatter.pageHead.subTitle}
        productsTitle={data.markdownRemark.frontmatter.products.productsTitle}
        aboutTitle={data.markdownRemark.frontmatter.about.aboutTitle}
        aboutContent={data.markdownRemark.frontmatter.about.aboutContent}
        aboutImage={data.markdownRemark.frontmatter.about.aboutImage}
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
          aboutImage {
            publicURL
          }
        }
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
