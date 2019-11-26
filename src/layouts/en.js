import React from 'react'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'

import messages from '../data/messages/en'
import Layout from '../components/index'

addLocaleData(en)

const LayoutEN = props => {
  return <Layout {...props} i18nMessages={messages} />
}

export default LayoutEN
