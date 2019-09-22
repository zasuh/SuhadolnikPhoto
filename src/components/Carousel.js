import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'

const Carousel = ({ images }) => (
  <ResponsiveCarousel>
    {images.map(image => (
      <div key={image.name}>
        <img src={image.childImageSharp.fluid.src} alt={image.name} />
      </div>
    ))}
  </ResponsiveCarousel>
)

export default Carousel

Carousel.propTypes = {
  images: PropTypes.object.isRequired,
}
