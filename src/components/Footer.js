import React from 'react'
import styled from 'styled-components'
import Languages from './Languages'

const Content = styled.footer`
  color: ${props => props.theme.colors.footer};
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Terms = styled.a`
  text-decoration: underline;
`

const Footer = () => (
  <Content>
    <Languages />
    &copy; 2019 by Žane Suhadolnik. Original theme by LekoArts - Emilia. Pictures by Jože Suhadolnik.
    <br />
    <Terms href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia" target="_blank" rel="noopener noreferrer">
      Terms and conditions.
    </Terms>
  </Content>
)

export default Footer
