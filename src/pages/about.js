import React from 'react'
import styled from 'styled-components'
import { Layout, AboutHeader, SideBar } from '../components'
import config from '../../config/site'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const About = () => {
  return (
    <Layout customSEO id="outer-container">
      <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
      <AboutHeader />
      <BG id="page-wrap">
        <p>About page</p>
      </BG>
    </Layout>
  )
}

export default About
