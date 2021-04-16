import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import getRpcUrl from 'utils/getRpcUrl'

const params = new URLSearchParams(window.location.search)
const id = params.get('network')
const chainId: any = id || parseInt(process.env.REACT_APP_CHAIN_ID as string, 10)
const RPC_URL = getRpcUrl(chainId)
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  return web3NoAccount
}

export { getWeb3NoAccount }
export default web3NoAccount
