import { ModalProvider } from '@alium-official/uikit'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { BlockContextProvider } from 'contexts/BlockContext'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import React from 'react'
import { Provider } from 'react-redux'
import { IntercomProvider } from 'react-use-intercom'
import store from 'state'
import { getLibrary } from 'utils/web3React'

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

const Providers: React.FC = ({ children }) => {
  return (
    <IntercomProvider
      appId={process.env.REACT_APP_INTERCOM_APP_ID}
      autoBoot
      shouldInitialize={!!process.env.REACT_APP_INTERCOM_APP_ID}
    >
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Provider store={store}>
            <ThemeContextProvider>
              <LanguageContextProvider>
                <BlockContextProvider>
                  <RefreshContextProvider>
                    <ModalProvider>{children}</ModalProvider>
                  </RefreshContextProvider>
                </BlockContextProvider>
              </LanguageContextProvider>
            </ThemeContextProvider>
          </Provider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </IntercomProvider>
  )
}

export default Providers
