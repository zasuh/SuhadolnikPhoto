import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LangSwitcher from './LangSwitcher'

const Content = styled.footer`
  color: ${props => props.theme.colors.footer};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Footer = ({ langs }) => (
  <Content>
    &copy; 2019 by Žane Suhadolnik. Original theme by LekoArts - Emilia. Pictures by Jože Suhadolnik.
    <br />
    <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia" target="_blank" rel="noopener noreferrer">
      Terms and conditions.
    </a>
    <LangSwitcher langs={langs} />
  </Content>
)

export default Footer

Footer.propTypes = {
  langs: PropTypes.array.isRequired,
}
