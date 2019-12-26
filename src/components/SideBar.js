import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import grey from '@material-ui/core/colors/grey'

import { Link, useStaticQuery, graphql } from 'gatsby'

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  listItemText: {
    fontSize: '1em',
    fontFamily: 'Courier, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  },
  listItemHeader: {
    fontSize: '1.8em',
    fontFamily: 'Courier, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  },
  paper: {
    backgroundColor: grey[800],
  },
})

const DrawerButton = styled(Button)`
  float: right;
`

const SideBar = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })
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

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Stories / Zgodbe'].map(text => (
          <ListItem key={text}>
            <ListItemText primary={text} style={{ color: grey[50] }} classes={{ primary: classes.listItemHeader }} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {data.allMdx.nodes.map(item => {
          return (
            <ListItem button key={item}>
              <Link id={item.fields.slug} key={item} to={item.fields.slug}>
                <ListItemText primary={item.frontmatter.title} classes={{ primary: classes.listItemText }} />
              </Link>
            </ListItem>
          )
        })}
      </List>
    </div>
  )

  return (
    <div>
      <DrawerButton onClick={toggleDrawer('right', true)}>
        <MenuRoundedIcon style={{ color: grey[50] }} />
      </DrawerButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        classes={{ paperAnchorRight: classes.paper }}
      >
        {sideList('right')}
      </Drawer>
    </div>
  )
}

export default SideBar
