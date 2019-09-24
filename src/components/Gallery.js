import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'

const ImgGallery = styled(ImageGallery)`
  margin: 3rem auto;
  max-width: 600px;
`

const Gallery = ({ images }) => {
  const items = images.map(item => {
    return {
      original: item.childImageSharp.fluid.src,
      thumbnail: item.childImageSharp.fluid.src,
    }
  })
  return <ImgGallery items={items} />
}

export default Gallery

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}
