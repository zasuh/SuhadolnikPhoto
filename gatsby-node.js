const path = require('path')
const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slug
  // Search for MDX filenodes
  if (node.internal.type === 'Mdx') {
    // If the frontmatter has a "slug", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    // If not derive a slug from the "title" in the frontmatter
    else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.js')
  const aboutTemplate = require.resolve('./src/templates/about.js')

  const result = await wrapper(
    graphql(`
      {
        projects: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `)
  )

  const aboutResult = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
  )

  const projectPosts = result.data.projects.nodes
  const aboutBody = aboutResult.data.node

  projectPosts.forEach((n, index) => {
    const next = index === 0 ? null : projectPosts[index - 1]
    const prev = index === projectPosts.length - 1 ? null : projectPosts[index + 1]

    createPage({
      path: n.fields.slug,
      component: projectTemplate,
      context: {
        slug: n.fields.slug,
        // Pass the current directory of the project as regex in context so that the GraphQL query can filter by it
        absolutePathRegex: `/^${path.dirname(n.fileAbsolutePath)}/`,
        prev,
        next,
      },
    })
  })

  aboutBody.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: aboutTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
