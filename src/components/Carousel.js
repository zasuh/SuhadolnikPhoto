import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'

import Img from 'gatsby-image'

const ImgCarousel = styled(ResponsiveCarousel)`
  margin: 3rem auto;
  max-width: 600px;
`

const Carousel = ({ images }) => (
  <ImgCarousel>
    {images.map(image => (
      <div key={image.name}>
        <img src={image.childImageSharp.fluid.src} alt={image.name} />
        <p>{image.name}</p>
      </div>
    ))}
  </ImgCarousel>
)

export default Carousel

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
}
