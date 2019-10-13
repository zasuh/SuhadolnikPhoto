import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'
import uuid from 'uuid'
import SiteConfig from '../../config/site'
import SideBar from './SideBar'

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

const LinkWrapper = styled.div`
  margin: 0 auto;
  left: -1.5rem;
  position: relative;
  padding: 1rem 0 0 0;
`

const Links = styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    padding: 0 0 0 1rem;
    max-width: 200px;
    margin: 0 auto;
    text-decoration: underline;
  }
`

const Title = styled(animated.h1)`
  max-width: 200px;
  margin: 0 auto;
`

const ContactHeader = () => {
  const titleProps = useSpring({
    config: config.slow,
    delay: 200,
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const contentProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <div id="outer-container">
      <SideBar pageWrapId="page-wrap" outerContainerId="outer-container" />
      <Wrapper id="page-wrap">
        <Content>
          <Back to="/">
            <img src={arrow} data-info="back" alt="Back to home" aria-label="Back to home" />
            <Name>{SiteConfig.name}</Name>
          </Back>
          <Details>
            <Title style={titleProps}>Contact</Title>
            <animated.div style={contentProps}>
              <LinkWrapper>
                <Links>
                  {SiteConfig.socialMedia.map(item => {
                    return (
                      <li key={uuid.v4()}>
                        <a target="_blank" rel="noopener noreferrer" href={item.url}>
                          {item.name}
                        </a>
                      </li>
                    )
                  })}
                </Links>
              </LinkWrapper>
            </animated.div>
          </Details>
        </Content>
      </Wrapper>
    </div>
  )
}

export default ContactHeader
