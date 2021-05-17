import React from 'react'
import { ModalProvider } from '@alium-official/uikit'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { Provider } from 'react-redux'
import { getLibrary } from 'utils/web3React'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

const Providers: React.FC = ({ children }) => {
  return (
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
  )
}

export default Providers
