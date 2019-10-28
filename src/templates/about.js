import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Layout, AboutHeader, SideBar } from '../components'
import config from '../../config/site'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const About = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout customSEO id="outer-container">
      <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
      <AboutHeader />
      <BG id="page-wrap">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BG>
    </Layout>
  )
}

export default About

About.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
    html: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
