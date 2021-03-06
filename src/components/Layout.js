/* eslint no-unused-expressions: off */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { SEO, Footer } from './index'
import theme from '../../config/theme'
import reset from '../styles/reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: "Courier", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    background: url("${props => props.theme.bgPattern}") #383838;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Courier", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .gatsby-resp-image-wrapper {
    margin: 2.75rem 0;
  }
`

const AbsoluteWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`

// eslint-disable-next-line react/prop-types
const Layout = ({ children, customSEO }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {!customSEO && <SEO />}
        <GlobalStyle />
        <noscript>To browse this site, please enable JavaScript.</noscript>
        <AbsoluteWrapper>
          {children}
          <Footer />
        </AbsoluteWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
