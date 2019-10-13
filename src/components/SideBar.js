import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, useStaticQuery, graphql } from 'gatsby'
import uuid from 'uuid'

const SideBar = props => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  }
  const data = useStaticQuery(graphql`
    query SideBarQuery {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <Menu {...props} styles={styles}>
      {data.allMdx.nodes.map(item => {
        return (
          <Link id={item.fields.slug} className="menu-item" key={uuid.v4()} to={item.fields.slug}>
            Name
          </Link>
        )
      })}
    </Menu>
  )
}

export default SideBar
