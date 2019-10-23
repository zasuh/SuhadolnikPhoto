import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'
import SiteConfig from '../../config/site'

import arrow from '../images/left-chevron.svg'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #b6b6b6;
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 2rem 1.0875rem 3rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  background-color: #b6b6b6;
`

const Back = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

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
  margin-top: 1rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.color};
  }
`

const Title = styled(animated.h1)`
  max-width: 200px;
  margin: 0 auto;
`

const AboutHeader = () => {
  const titleProps = useSpring({
    config: config.slow,
    delay: 200,
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  return (
    <Wrapper id="page-wrap">
      <Content>
        <Back to="/">
          <img src={arrow} data-info="back" alt="Back to home" aria-label="Back to home" />
          <Name>{SiteConfig.name}</Name>
        </Back>
        <Details>
          <Title style={titleProps}>Bio</Title>
        </Details>
      </Content>
    </Wrapper>
  )
}

export default AboutHeader
