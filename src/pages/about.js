import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid'
import { Layout, AboutHeader, SideBar } from '../components'
import config from '../../config/about'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Bio = styled.div`
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px 0 0 0;
`

const Exhibitions = styled.ul`
  max-width: 600px;
  margin: 0 auto;
`

const ExTitle = styled.h3`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0 20px 0;
  text-decoration: underline;
`

const ExBio = styled.h3`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0 20px 0;
  text-decoration: underline;
`

const About = () => {
  return (
    <Layout customSEO id="outer-container">
      <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
      <AboutHeader />
      <BG id="page-wrap">
        <ExBio>About</ExBio>
        <Bio>{config.bio}</Bio>
        <ExTitle>Exhibitions</ExTitle>
        <Exhibitions>
          {config.exhibitionList.map(item => {
            return <li key={uuid.v4()}>{item}</li>
          })}
        </Exhibitions>
      </BG>
    </Layout>
  )
}

export default About
