import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import uuid from 'uuid'
import { Layout, AboutHeader } from '../components'

import NSK from '../images/ALBUM 01.jpg'
import BP1 from '../images/BALKAN PANK 01.jpg'
import REF from '../images/BEGUNCI 01.jpg'
import CIR from '../images/CIRCUS 01.jpg'
import MIR from '../images/JUTRA V RUSIJI 01.jpg'
import MW from '../images/JUTRANJI SPREHAJALEC 01.jpg'
import FFW from '../images/OBČUTEK ZA VETER 01.jpg'
import POR from '../images/PORTRETI 01.jpg'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const WrapperBooksGrid = styled.div`
  margin: 0 auto 0 auto;
  max-width: 700px;
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
            <img src={NSK} height="300" width="300" alt="The first book" />
            <p>Album - neue slowenische kunst</p>
            <img src={BP1} height="500" width="400" alt="The first book" />
            <p>Balkan Pank</p>
            <img src={REF} height="500" width="400" alt="The first book" />
            <p>{intl.formatMessage({ id: 'refugees' })}</p>
            <img src={CIR} height="500" width="400" alt="The first book" />
            <p>Circus</p>
            <img src={MIR} height="500" width="400" alt="The first book" />
            <p>{intl.formatMessage({ id: 'russia' })}</p>
            <img src={MW} height="500" width="400" alt="The first book" />
            <p>Kajetan Kovič: {intl.formatMessage({ id: 'walker' })}</p>
            <img src={FFW} height="500" width="400" alt="The first book" />
            <p>Feri Lainšček & Dušan Šarotar: {intl.formatMessage({ id: 'wind' })}</p>
            <img src={POR} height="500" width="400" alt="The first book" />
            <p>{intl.formatMessage({ id: 'portraits' })}</p>
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
