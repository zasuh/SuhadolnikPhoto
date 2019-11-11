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
  padding: 15px;
`

const Exhibitions = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
`

const Title = styled.h3`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0 20px 0;
  text-decoration: underline;
`

const WrapperBooksGrid = styled.div`
  margin: 0 auto 0 auto;
  max-width: 600px;
  padding: 0 1.0875rem 6rem;
  position: relative;
`

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const About = () => {
  return (
    <Layout customSEO id="outer-container">
      <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
      <AboutHeader />
      <BG id="page-wrap">
        <Title>About</Title>
        <Bio>{config.bio}</Bio>
        <Title>Exhibitions</Title>
        <Exhibitions>
          {config.exhibitionList.map(item => {
            return <li key={uuid.v4()}>{item}</li>
          })}
        </Exhibitions>
        <Title>Books</Title>
        <WrapperBooksGrid>
          <BooksGrid>
            <img src="https://via.placeholder.com/300" alt="" />
            <p>Text for book</p>
            <img src="https://via.placeholder.com/300" alt="" />
            <p>Text for book 2</p>
          </BooksGrid>
        </WrapperBooksGrid>
      </BG>
    </Layout>
  )
}

export default About
