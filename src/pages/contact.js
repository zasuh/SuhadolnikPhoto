/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Layout, ContactHeader, SideBar } from '../components'
import config from '../../config/site'

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

const Button = styled.button`
  text-transform: uppercase;
  height: 2rem;
  width: 30%;
  max-width: 100%;
  border-radius: 0;
  border: 0.1rem solid black;
  margin: 0 auto;
`

const Label = styled.label`
  padding: 0.75rem;
`

export default class contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout customSEO id="outer-container">
        <SideBar right pageWrapId="page-wrap" outerContainerId="outer-container" />
        <BG id="page-wrap">
          <ContactHeader links={config.socialMedia} />
          <Content>
            <Form name="contact" action="POST" netlify-honeypot="bot-field" data-netlify="true">
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
                <Input type="file" name="myfile" id="myfile" placeholder="Upload your file" />
              </Label>
              <div data-netlify-recaptcha="true" />
              <Button type="submit">Send</Button>
            </Form>
          </Content>
        </BG>
      </Layout>
    )
  }
}
