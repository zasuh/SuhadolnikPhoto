import React from 'react'
import { Language } from 'gatsby-plugin-i18next'

const Switcher = ({ changeLng, lng, availableLngs }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {availableLngs.map(value => (
        <li key={value} style={{ display: 'inline' }}>
          <button
            style={{
              background: 'rebeccapurple',
              color: 'white',
              textDecoration: value === lng ? 'underline' : 'none',
            }}
            onClick={() => changeLng(value)}
            type="submit"
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Switcher
