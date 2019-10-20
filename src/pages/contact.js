/* eslint-disable react/no-string-refs */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'
import { Layout, ContactHeader, SideBar } from '../components'
import config from '../../config/site'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

const Content = styled.div`
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  color: white;
`

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 1rem;
  max-width: 100%;

  input,
  textarea {
    background: white;
    font-size: inherit;
    border: none;
    outline: none;
    padding: 1em;
  }
`

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 0;
`

const TextArea = styled.textarea`
  width: 100%;
  line-height: 1.6;
  resize: vertical;
  min-height: 150px;
`

const Label = styled.label`
  padding: 0.75rem;
`

export default class contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleRecaptcha = value => {
    console.log(value)
  }

  render() {
    return (
      <Layout customSEO id="outer-container">
        <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
        <BG id="page-wrap">
          <ContactHeader links={config.socialMedia} />
          <Content>
            <Form
              name="contact"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <Label>
                Name
                <Input type="text" name="name" id="name" />
              </Label>
              <Label>
                Email
                <Input type="email" name="email" id="email" />
              </Label>
              <Label>
                Subject
                <Input type="text" name="subject" id="subject" />
              </Label>
              <Label>
                Message
                <TextArea name="message" id="message" rows="5" />
              </Label>
              <Label>
                Upload File
                <Input type="file" name="file" id="file" placeholder="Upload your file" />
              </Label>
              <Recaptcha
                sitekey={RECAPTCHA_KEY !== undefined ? RECAPTCHA_KEY : 101010}
                onChange={this.handleRecaptcha}
              />
              <Input type="submit" value="Send Message" />
            </Form>
          </Content>
        </BG>
      </Layout>
    )
  }
}
