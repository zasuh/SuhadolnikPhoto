import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'
import SiteConfig from '../../config/site'
import SideBar from './SideBar'

import arrow from '../images/left-chevron.svg'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #6b6b6b;
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 2rem 1.0875rem 3rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  background-color: #6b6b6b;
`

const Back = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 20%;

  img[data-info='back'] {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem 0 0;
  }
`

const Name = styled(animated.h4)`
  margin: 0 0 0 1rem;
  color: ${props => props.theme.colors.color};
`

const Details = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.color};
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`

const Title = styled(animated.h1)`
  max-width: 200px;
  margin: 0 auto;
  padding: 0 0 20px 0;
`

const About = styled(Link)`
  margin-top: 3rem;
  padding: 0 1rem 0 0;
  text-decoration: underline;

  a {
    margin: 0 0.3rem;
    color: black;
  }
`

const Exhibitions = styled(Link)`
  margin-top: 3rem;
  padding: 0 1rem 0 0;
  text-decoration: underline;

  a {
    margin: 0 0.3rem;
    color: black;
  }
`

const Books = styled(Link)`
  margin-top: 3rem;
  text-decoration: underline;

  a {
    margin: 0 0.3rem;
    color: black;
  }
`

const Drawer = styled(SideBar)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const AboutHeader = () => {
  const intl = useIntl()
  const titleProps = useSpring({
    config: config.slow,
    delay: 200,
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  return (
    <Wrapper id="page-wrap">
      <Content>
        <Drawer />
        <Back to="/">
          <img src={arrow} data-info="back" alt="Back to home" aria-label="Back to home" />
          <Name>{SiteConfig.name}</Name>
        </Back>
        <Details>
          <Title style={titleProps}>{intl.formatMessage({ id: 'biography' })}</Title>
          <About to="/about/">{intl.formatMessage({ id: 'biography_link' })}</About>
          <Exhibitions to="/exhibitions/">{intl.formatMessage({ id: 'exhibitions_link' })}</Exhibitions>
          <Books to="/books/">{intl.formatMessage({ id: 'books_link' })}</Books>
        </Details>
      </Content>
    </Wrapper>
  )
}

export default AboutHeader
