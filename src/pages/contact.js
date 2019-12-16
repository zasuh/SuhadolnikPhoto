/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-string-refs */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'
import useClipboard from 'react-use-clipboard'
import { Layout, ContactHeader } from '../components'
import config from '../../config/site'

const E_MAIL = process.env.E_MAIL

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
    padding: 0.5em;
  }
`

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 0;
`

const Send = styled.input`
  width: 25%;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 0;
  margin: 0 auto;
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

const CopyText = styled.div`
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
  margin: 0.75rem 0 0 0;
`

const Contact = () => {
  const [isCopied, setCopied] = useClipboard(E_MAIL, {
    successDuration: 4000,
  })
  const intl = useIntl()
  return (
    <Layout>
      <BG id="page-wrap">
        <ContactHeader links={config.socialMedia} />
        <CopyText onClick={() => setCopied(true)}>
          {isCopied ? intl.formatMessage({ id: 'copied' }) : intl.formatMessage({ id: 'clickToCopy' })}
        </CopyText>
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
              {intl.formatMessage({ id: 'contact_name' })}
              <Input type="text" name="name" id="name" />
            </Label>
            <Label>
              {intl.formatMessage({ id: 'contact_email' })}
              <Input type="email" name="email" id="email" />
            </Label>
            <Label>
              {intl.formatMessage({ id: 'contact_subject' })}
              <Input type="text" name="subject" id="subject" />
            </Label>
            <Label>
              {intl.formatMessage({ id: 'contact_message' })}
              <TextArea name="message" id="message" rows="9" />
            </Label>
            <Label>
              {intl.formatMessage({ id: 'contact_upload_file' })}
              <Input type="file" name="file" id="file" placeholder="Upload your file" />
            </Label>
            <Send type="submit" value={intl.formatMessage({ id: 'contact_send_msg' })} />
          </Form>
        </Content>
      </BG>
    </Layout>
  )
}

export default Contact
