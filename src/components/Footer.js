import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${props => props.theme.colors.footer};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Footer = () => (
  <Content>
    &copy; 2019 by Žane Suhadolnik. Original theme by LekoArts - Emilia. Pictures by Jože Suhadolnik.
    <br />
    <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia" target="_blank" rel="noopener noreferrer">
      Terms and conditions.
    </a>
  </Content>
)

export default Footer
