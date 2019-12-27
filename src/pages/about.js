import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import { Layout, AboutHeader } from '../components'

import portrait from '../../content/assets/portrait.jpg'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Bio = styled.div`
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
`

const Portrait = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0 20px 0;
  width: 300px;
  filter: grayscale(100%);
`

const About = () => {
  const intl = useIntl()
  return (
    <Layout>
      <AboutHeader />
      <BG id="page-wrap">
        <Portrait src={portrait} alt="" />
        <Bio>{intl.formatMessage({ id: 'about' })}</Bio>
      </BG>
    </Layout>
  )
}

export default About
