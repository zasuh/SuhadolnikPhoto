import React from 'react'
import styled from 'styled-components'
import { Layout, AboutHeader, SideBar } from '../components'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
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
