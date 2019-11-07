import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import uuid from 'uuid'

const SideBar = props => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '25px',
      right: '30px',
      top: '30px',
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
      width: '270px',
    },
    bmMenu: {
      height: '100vh',
      background: '#242424',
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
      color: 'white',
      // display: 'inline-block',
      textDecoration: 'underline',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  }

  const SideNavHeader = styled.h2`
    margin: 0 auto;
    padding: 0.5em 1em;
    color: rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);
  `

  const data = useStaticQuery(graphql`
    query SideBarQuery {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
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

  return (
    <Menu {...props} styles={styles} noTransition disableAutoFocus>
      <SideNavHeader className="menu-item">Stories</SideNavHeader>
      {data.allMdx.nodes.map(item => {
        return (
          <Link id={item.fields.slug} className="menu-item" key={uuid.v4()} to={item.fields.slug}>
            {item.frontmatter.title}
          </Link>
        )
      })}
    </Menu>
  )
}

export default SideBar
