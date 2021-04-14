import React from 'react'
import { Text } from '@aliumswap/uikit'
import { useWeb3React } from '@web3-react/core'
// import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
// import useAllEarnings from 'hooks/useAllEarnings'
// import { usePriceCakeBusd } from 'state/hooks'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeHarvestBalance = () => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  // const allEarnings = useAllEarnings()
  const earningsSum = 1000 // allEarnings.reduce((accum, earning) => {
    // return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  // }, 0) 
  const earningsBusd = 10000 // new BigNumber(earningsSum).multipliedBy(usePriceCakeBusd()).toNumber() || 100

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '1.5px', marginTop: "20px", marginBottom: "55px" }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={earningsSum} decimals={4} lineHeight="1.5" fontSize="40px" />
      <CardBusdValue value={earningsBusd} />
    </>
  )
}

export default CakeHarvestBalance
