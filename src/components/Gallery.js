import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

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
  .image-gallery-slides {
    max-height: 650px;
  }
  .image-gallery-content.fullscreen {
    .image-gallery-slide img {
      width: auto;
      max-height: 60vh;
    }
    .image-gallery-image {
      text-align: center;
    }
  }
`

const Text = styled.div`
  max-width: 450px;
  margin: 1rem auto;
  padding-top: 1rem;
  color: white;
`

const Gallery = ({ images, text }) => {
  const items = images.map(item => {
    return {
      original: item.childImageSharp.fluid.src,
      thumbnail: item.childImageSharp.fluid.src,
    }
  })
  return (
    <GalleryWrapper>
      {text && (
        <Text>
          <MDXRenderer>{text}</MDXRenderer>
        </Text>
      )}
      <ImageGallery items={items} />
    </GalleryWrapper>
  )
}

export default Gallery

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
}
