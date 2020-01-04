import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rgba } from 'polished'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

const CardItem = styled(Link)`
  min-height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${props => props.theme.colors.color};

  &:hover {
    color: white;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    min-height: 300px;
  }
`

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  picture {
    img {
      object-fit: scale-down !important;
    }
  }
  .gatsby-image-wrapper div {
    padding-bottom: 0 !important;
  }
`

const Content = styled.div`
  padding: 1rem;
  position: relative;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;
  background: ${props => rgba(props.theme.colors.card_bg, 0.65)};
  height: 0;
  text-align: center;

  ${CardItem}:hover & {
    opacity: 1;
    height: 120px;
  }
`

const Bottom = styled.div`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  div:first-child {
    margin-right: 1rem;
  }
  text-align: center;
`

const Name = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
`

const Card = ({ path, cover, date, title }) => {
  const intl = useIntl()
  return (
    <div>
      <CardItem to={path}>
        <Cover>
          <Img fluid={cover} />
        </Cover>
        <Content>
          <Name>{intl.formatMessage({ id: title })}</Name>
          <Bottom>
            <div>{date}</div>
          </Bottom>
        </Content>
      </CardItem>
    </div>
  )
}

export default Card

Card.propTypes = {
  path: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
