/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Layout from '@lekoarts/gatsby-theme-emilia/src/components/layout'
import HeaderProject from '@lekoarts/gatsby-theme-emilia/src/components/header-project'
import ProjectPagination from '@lekoarts/gatsby-theme-emilia/src/components/project-pagination'
import SEO from '@lekoarts/gatsby-theme-emilia/src/components/seo'
import Carousel from '../../../components/Carousel'

const Project = ({
  data: { project, images },
  pageContext: { prev, next }
}) => {
  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.excerpt}
        pathname={project.slug}
        image={project.cover.childImageSharp.resize.src}
      />
      <HeaderProject
        title={project.title}
        description={project.body}
        areas={project.areas}
        date={project.date}
      />
      <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`] }}>
        <Carousel images={images.nodes} />
        <ProjectPagination prev={prev} next={next} />
      </Container>
    </Layout>
  )
}

export default Project