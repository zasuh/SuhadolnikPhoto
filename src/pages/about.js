import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import { Layout, AboutHeader, SideBar } from '../components'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Bio = styled.div`
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
`

const About = () => {
  const intl = useIntl()
  return (
    <Layout customSEO id="outer-container">
      <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
      <AboutHeader />
      <BG id="page-wrap">
        <img src="../../content/assets/portrait.jpg" alt="" />
        <Bio>{intl.formatMessage({ id: 'about' })}</Bio>
      </BG>
    </Layout>
  )
}

export default About
