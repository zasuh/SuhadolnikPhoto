import React from 'react'
import { addLocaleData } from 'react-intl'
import sl from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/sl'

import messages from '../data/messages/sl'
import Layout from '../components/index'

addLocaleData(sl)

const LayoutSL = props => {
  return <Layout {...props} i18nMessages={messages} />
}

export default LayoutSL
