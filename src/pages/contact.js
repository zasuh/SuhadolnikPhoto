/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { animated } from 'react-spring'
import { Layout } from '../components'
import config from '../../config/site'

import arrow from '../images/left-chevron.svg'

const Content = styled.div`
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  color: white;
`

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Back = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img[data-info='back'] {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem 0 0;
  }
`

const Name = styled(animated.h4)`
  margin: 0 0 0 1rem;
  color: ${props => props.theme.colors.color};
`

const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 3rem;
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
  width: 100%;
  max-width: 100%;
  border-radius: 0;
`

const Label = styled.label`
  padding: 0.75rem;
`

const contact = () => {
  return (
    <Layout customSEO>
      <BG>
        <Back to="/">
          <img src={arrow} data-info="back" alt="Back to home" aria-label="Back to home" />
          <Name>{config.name}</Name>
        </Back>
        <Content>
          <h1>Contact</h1>
          <Form method="post" action="#">
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
            <Button type="submit">Send</Button>
            <Input type="reset" value="Clear" />
          </Form>
        </Content>
      </BG>
    </Layout>
  )
}

export default contact
