import { Web3Provider } from '@ethersproject/providers'
import { ChainId } from '@alium-official/sdk'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'

function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & { chainId?: ChainId } {
  const context = useWeb3ReactCore<Web3Provider>()
  const contextNetwork = useWeb3ReactCore<Web3Provider>('NETWORK')
  return context.active ? context : contextNetwork
}

export default useActiveWeb3React