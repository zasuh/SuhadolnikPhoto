import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

const languageName = {
  en: 'EN',
  sl: 'SL',
}

const Languages = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              onKeyDown={() => {}}
              role="button"
              tabIndex="0"
              style={{ paddingTop: 20, margin: 10, cursor: `pointer` }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Languages
