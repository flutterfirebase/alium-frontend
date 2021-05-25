import React from 'react'
import ReactDOM from 'react-dom'
import TagManager from 'react-gtm-module'
import 'typeface-roboto'
import App from './App'
import './i18n'
import Providers from './Providers'

const tagManagerArgs = {
  gtmId: 'GTM-MWZ3WL5',
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
