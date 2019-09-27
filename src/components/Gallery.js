import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'

const GalleryWrapper = styled.div`
  .image-gallery {
    max-width: 700px;
    max-height: 650px;
    margin: 3rem auto;
  }
  .image-gallery-image {
    text-align: center;
    background: #383838;
  }
  .image-gallery-slide img {
    width: initial;
  }
`

const Gallery = ({ images }) => {
  const items = images.map(item => {
    return {
      original: item.childImageSharp.fluid.src,
      thumbnail: item.childImageSharp.fluid.src,
    }
  })
  return (
    <GalleryWrapper>
      <ImageGallery items={items} />
    </GalleryWrapper>
  )
}

export default Gallery

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}
