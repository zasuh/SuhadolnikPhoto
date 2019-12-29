import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import uuid from 'uuid'
import { Layout, AboutHeader } from '../components'

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
  const intl = useIntl()
  const cataloguesList = JSON.parse(intl.formatMessage({ id: 'cataloguesList' }))
  return (
    <Layout customSEO>
      <AboutHeader />
      <BG id="page-wrap">
        <WrapperBooksGrid>
          <h4 style={{ marginTop: 0 }}>{intl.formatMessage({ id: 'books' })}</h4>
          <BooksGrid>
            <img src="https://via.placeholder.com/300" alt="" />
            <p>Text for book</p>
            <img src="https://via.placeholder.com/300" alt="" />
            <p>Text for book 2</p>
          </BooksGrid>
          <h4>{intl.formatMessage({ id: 'catalogues' })}</h4>
          {cataloguesList.map(item => {
            return <li key={uuid.v4()}>{item}</li>
          })}
        </WrapperBooksGrid>
      </BG>
    </Layout>
  )
}

export default About
