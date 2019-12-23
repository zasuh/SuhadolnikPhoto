import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import uuid from 'uuid'
import { Layout, AboutHeader } from '../components'

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
    <Layout customSEO>
      <AboutHeader />
      <BG id="page-wrap">
        <Exhibitions>
          <h4>{intl.formatMessage({ id: 'soloExhibitions' })}</h4>
          {exhibitionList.map(item => {
            return <li key={uuid.v4()}>{item}</li>
          })}
          <h4>{intl.formatMessage({ id: 'groupExhibitions' })}</h4>
          {['1'].map(item => {
            return <li key={uuid.v4()}>{item}</li>
          })}
        </Exhibitions>
      </BG>
    </Layout>
  )
}

export default About
