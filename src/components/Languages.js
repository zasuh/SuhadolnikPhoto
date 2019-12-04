import React from 'react'
import styled from 'styled-components'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

const languageName = {
  en: 'EN',
  sl: 'SL',
}

const Wrapper = styled.div`
  padding-bottom: 1rem;
`

const Languages = () => {
  return (
    <Wrapper>
      <IntlContextConsumer>
        {({ languages }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              onKeyDown={() => {}}
              role="button"
              tabIndex="0"
              style={{ margin: 15, cursor: `pointer`, textDecoration: `underline` }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </Wrapper>
  )
}

export default Languages
