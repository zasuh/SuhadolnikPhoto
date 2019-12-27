import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'

import arrowLeft from '../images/left-chevron.svg'
import arrowRight from '../images/right-chevron.svg'

const Wrapper = styled.div`
  display: flex;
  max-width: ${props => props.theme.maxWidths.general};
  margin: 0 auto;
  padding: 5rem 0 1rem 0;
  a {
    color: ${props => props.theme.colors.color};
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
  }
  justify-items: center;
`

const Prev = styled.div`
  img {
    width: 15px;
    height: 15px;
    margin: 0 1rem 0 0;
  }
  a {
    font-size: 1rem;
  }
`

const Next = styled.div`
  img {
    width: 15px;
    height: 15px;
    margin: 0 0 0 1rem;
  }
  a {
    font-size: 1rem;
  }
  margin-left: auto;
`

const ProjectPagination = ({ next, prev }) => {
  const intl = useIntl()
  return (
    <Wrapper>
      {prev && (
        <Prev>
          <Link to={prev.fields.slug}>
            <img src={arrowLeft} alt="Arrow Left" />
            {intl.formatMessage({ id: prev.frontmatter.title })}
          </Link>
        </Prev>
      )}

      {next && (
        <Next>
          <Link to={next.fields.slug}>
            {intl.formatMessage({ id: next.frontmatter.title })}
            <img src={arrowRight} alt="Arrow Right" />
          </Link>
        </Next>
      )}
    </Wrapper>
  )
}

export default ProjectPagination

ProjectPagination.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

ProjectPagination.defaultProps = {
  next: null,
  prev: null,
}
