import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import uuid from 'uuid'
import { Layout, AboutHeader, SideBar } from '../components'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Exhibitions = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
`

const About = () => {
  const intl = useIntl()
  const exhibitionList = JSON.parse(intl.formatMessage({ id: 'exhibitionList' }))
  return (
    <Layout customSEO id="outer-container">
      <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
      <AboutHeader />
      <BG id="page-wrap">
        <Exhibitions>
          {exhibitionList.map(item => {
            return <li key={uuid.v4()}>{item}</li>
          })}
        </Exhibitions>
      </BG>
    </Layout>
  )
}

export default About
