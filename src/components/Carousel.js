import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'

// Gatsby specific
import { graphql } from 'gatsby'

const ImgCarousel = ({ data }) => {
  console.log(data)
  return (
    <Carousel>
      <div>
        <img src="assets/1.jpeg" alt="temp alt" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  )
}

export default ImgCarousel

ImgCarousel.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query CarouselQuery {
    allMdx {
      nodes {
        fields {
          slug
        }
      }
    }
  }
`
