import React from 'react'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const ImgCarousel = () => (
  <Carousel>
    <div>
      <img src="assets/1.jpeg" alt="temp alt" />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
)

export default ImgCarousel
