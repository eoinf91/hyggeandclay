import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header/Header'
import TwoColImage from '../components/TwoColImage/TwoColImage'
import ContactBlock from '../components/ContactBlock/ContactBlock'

export const AboutPageTemplate = ({ 
  title,
  subtitle,
  headImage,
  introHead,
  introCopy,
  profileImage,
  profileText,
  contentComponent,
  content
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="about-page">
      <Header
        headerTitle={title}
        headerCopy={subtitle}
      />
      <PageContent className="page-content" content={content} />
      <TwoColImage
        twoColCopy={profileText}
        twoColImage={profileImage.publicURL}
      />
      <ContactBlock />
    </div>
  )
}

AboutPageTemplate.propTypes = {
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  pageIntro: PropTypes.shape({
    introHead: PropTypes.string.isRequired,
    introCopy: PropTypes.string.isRequired,
  }),
  profile: PropTypes.shape({
    profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {

  return (
    <Layout
      pageTitle={data.markdownRemark.frontmatter.pageHead.title}
    >
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
        title={data.markdownRemark.frontmatter.pageHead.title}
        subtitle={data.markdownRemark.frontmatter.pageHead.subTitle}
        headImage={data.markdownRemark.frontmatter.pageHead.headImage}
        introHead={data.markdownRemark.frontmatter.pageIntro.introHead}
        introCopy={data.markdownRemark.frontmatter.pageIntro.introCopy}
        profileImage={data.markdownRemark.frontmatter.profile.profileImage}
        profileText={data.markdownRemark.frontmatter.profile.profileText}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageHead {
          title
          subTitle
        }
        pageIntro {
          introHead
          introCopy
        }
        profile {
          profileImage {
            publicURL
          }
          profileText
        }
      }
    }
  }
`
