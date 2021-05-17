import { useEffect, useState } from 'react'
import Web3 from 'web3'
import { CurrencyAmount, JSBI } from '@alium-official/sdk'
import web3NoAccount from 'utils/web3'

const useCurrencyBalance: any = (account: string, web3: Web3) => {
  const [balance, setBalance] = useState<CurrencyAmount>()
  const _web3 = web3 ?? web3NoAccount
  useEffect(() => {
    if (!account) return
    (async () => {
      const resBalance = await _web3.eth.getBalance(account)
      const currencyBalance = CurrencyAmount.ether(JSBI.BigInt(resBalance.toString()))
      setBalance(currencyBalance)
    })()
  }, [_web3.eth, account])
  return { balance }
}

export default useCurrencyBalance