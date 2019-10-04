import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  background: url("${props => props.theme.bgPattern}") #b6b6b6;
  display: flex;
  position: relative;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 3rem 1.0875rem 3rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  height: 400px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 500px;
  }
`

const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${props => props.theme.colors.color};
  font-size: 4rem;
`

const Contact = styled(Link)`
  margin-top: 3rem;

  a {
    margin: 0 0.3rem;
    color: black;
    text-decoration: underline;
  }
`

const Header = ({ name }) => (
  <Wrapper>
    <Content>
      <Name>{name}</Name>
      <Contact to="/contact/">Contact</Contact>
    </Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  name: PropTypes.string.isRequired,
}
