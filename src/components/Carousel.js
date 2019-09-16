import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'

import { graphql, Img } from 'gatsby'

const ImgCarousel = ({ data: { project: postNode, images } }) => {
  const project = postNode.frontmatter
  return (
    <Carousel>
      {images.nodes.map(image => (
        <div>
          <Img alt={image.name} key={image.childImageSharp.fluid.src} fluid={image.childImageSharp.fluid} />
          <p className="legend">{image.name}</p>
        </div>
      ))}
    </Carousel>
  )
}

export default ImgCarousel

ImgCarousel.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    project: PropTypes.object.isRequired,
    images: PropTypes.object.isRequired,
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

ImgCarousel.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const imgQuery = graphql`
  query($slug: String!, $absolutePathRegex: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    project: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
      frontmatter {
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
        date(formatString: "DD.MM.YYYY")
        title
        areas
      }
    }
  }
`
