/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import PropTypes from 'prop-types'
import { Layout, ProjectHeader, ProjectPagination, SEO } from '../../../components'
import Carousel from '../../../components/Carousel'

const Project = ({ data: { project, images }, pageContext: { prev, next } }) => {
  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.excerpt}
        pathname={project.slug}
        image={project.cover.childImageSharp.resize.src}
      />
      <ProjectHeader title={project.title} description={project.body} areas={project.areas} date={project.date} />
      <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`] }}>
        <Carousel images={images.nodes} />
        <ProjectPagination prev={prev} next={next} />
      </Container>
    </Layout>
  )
}

export default Project

Project.propTypes = {
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

Project.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}
