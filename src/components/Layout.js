/* eslint no-unused-expressions: off */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'

import { SEO, Footer } from './index'
import theme from '../../config/theme'
import reset from '../styles/reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    background: url("${props => props.theme.bgPattern}") #383838;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  bottom: 0;
  width: 100%;
  height: 100%;
`

// eslint-disable-next-line react/prop-types
const Layout = ({ children, customSEO, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        // eslint-disable-next-line react/prop-types
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/')
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => ({
          ...item,
          link: item.link.replace(`/${defaultLangKey}/`, '/'),
        }))
        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <ThemeProvider theme={theme}>
              <>
                {!customSEO && <SEO />}
                <GlobalStyle />
                <noscript>To browse this site, please enable JavaScript.</noscript>
                <AbsoluteWrapper>
                  {children}
                  <Footer langs={langsMenu} />
                </AbsoluteWrapper>
              </>
            </ThemeProvider>
          </IntlProvider>
        )
      }}
    />
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
