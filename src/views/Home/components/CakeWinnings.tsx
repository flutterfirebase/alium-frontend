import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const claimAmountBusd = new BigNumber(claimAmount).multipliedBy(usePriceCakeBusd()).toNumber()

  return (
    <>
      <CardValue value={getBalanceNumber(claimAmount)} lineHeight="1.5" />
      <CardBusdValue value={claimAmountBusd} />
    </>
  )
}

export default CakeWinnings
