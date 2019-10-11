import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'
import { slide as Menu } from 'react-burger-menu'

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
  padding: 2rem 1.0875rem 13rem 1.0875rem;
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
  margin-top: 6rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.color};
  }
`

const ProjectHeader = ({ name, title, date, areas, projectData }) => {
  console.log(projectData)
  const titleProps = useSpring({
    config: config.slow,
    delay: 200,
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const contentProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Wrapper>
      <Content>
        <Back to="/">
          <img src={arrow} data-info="back" alt="Back to home" aria-label="Back to home" />
          <Name>{name}</Name>
        </Back>
        <Details>
          <animated.h1 style={titleProps}>{title}</animated.h1>
          <animated.div style={contentProps}>
            <p>{date}</p>
            <div>
              {areas.map((area, index) => (
                <React.Fragment key={area}>
                  {index > 0 && ', '}
                  {area}
                </React.Fragment>
              ))}
            </div>
          </animated.div>
        </Details>
      </Content>
    </Wrapper>
  )
}

export default ProjectHeader

ProjectHeader.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  areas: PropTypes.array.isRequired,
  projectData: PropTypes.object.isRequired,
}
