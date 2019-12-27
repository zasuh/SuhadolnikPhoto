import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const Text = styled.div`
  max-width: 450px;
  margin: 1rem auto;
  padding-top: 1rem;
  color: white;
  text-align: center;
  padding-bottom: 1rem;
`

const Slider = styled(AwesomeSlider)`
  --loader-bar-color: white;
  --organic-arrow-thickness: 1px;

  .awssld__content > img {
    object-fit: scale-down;
  }
  .awssld__bullets .awssld__bullets--active {
    background: white;
  }
  .awssld__bullets button {
    background: white;
    width: 5px;
    height: 5px;
    margin: 1%;
  }
`

const SliderWrapper = styled.div`
  .awssld {
    --loader-bar-color: white;
    --organic-arrow-thickness: 1px;
    --content-background-color: #6b6b6b;
    --organic-arrow-color: var(--control-button-background);
  }
  .awssld:hover {
    --organic-arrow-color: white;
  }
`

const Gallery = ({ images, text }) => {
  const items = images.map(item => {
    return {
      original: item.childImageSharp.fluid.src,
      thumbnail: item.childImageSharp.fluid.src,
    }
  })
  return (
    <div>
      {text && (
        <Text>
          <MDXRenderer>{text}</MDXRenderer>
        </Text>
      )}
      <SliderWrapper>
        <Slider bullets>
          {items.map(item => {
            return <div data-src={item.original} key={uuid.v4()} />
          })}
        </Slider>
      </SliderWrapper>
    </div>
  )
}

export default Gallery

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
}
