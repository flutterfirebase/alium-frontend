import React from 'react'
import styled from 'styled-components'
import { Heading, Card, Flex, ArrowForwardIcon } from '@aliumswap/uikit'
// import useI18n from 'hooks/useI18n'
// import BigNumber from 'bignumber.js'
// import { QuoteToken } from 'config/constants/types'
// import { useFarms, usePriceBnbBusd } from 'state/hooks'
// import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'

const StyledFarmStakingCard = styled(Card)`
  background: transparent;
  border-radius: 6px;
  border: 1px solid #24BA7B;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid #24BA7B;
`

const Box = styled.div`
  padding: 24px;
`

const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: #24BA7B;
`
const EarnAPYCard = () => {
  // const TranslateString = useI18n()
  // const farmsLP = useFarms()
  // const bnbPrice = usePriceBnbBusd()

  // const maxAPY = useRef(Number.MIN_VALUE)

  // const getHighestAPY = () => {
  //   const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')

  //   calculateAPY(activeFarms)

  //   return (maxAPY.current * 100).toLocaleString('en-US').slice(0, -1)
  // }

  // const calculateAPY = useCallback(
  //   (farmsToDisplay) => {
  //     const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)

  //     farmsToDisplay.map((farm) => {
  //       if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
  //         return farm
  //       }
  //       const cakeRewardPerBlock = CAKE_PER_BLOCK.times(farm.poolWeight)
  //       const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

  //       let apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)

  //       if (farm.quoteTokenSymbol === QuoteToken.BUSD) {
  //         apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice)
  //       } else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
  //         apy = cakeRewardPerYear.div(farm.lpTotalInQuoteToken)
  //       } else if (farm.dual) {
  //         const cakeApy =
  //           farm && cakePriceVsBNB.times(cakeRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
  //         const dualApy =
  //           farm.tokenPriceVsQuote &&
  //           new BigNumber(farm.tokenPriceVsQuote)
  //             .times(farm.dual.rewardPerBlock)
  //             .times(BLOCKS_PER_YEAR)
  //             .div(farm.lpTotalInQuoteToken)

  //         apy = cakeApy && dualApy && cakeApy.plus(dualApy)
  //       }

  //       if (maxAPY.current < apy.toNumber()) maxAPY.current = apy.toNumber()

  //       return apy
  //     })
  //   },
  //   [bnbPrice, farmsLP],
  // )

  return (
    <StyledFarmStakingCard>
      <Flex justifyContent="space-between" padding="24px">
        <Heading color="contrast" style={{ lineHeight: "24px", fontSize: "18px", letterSpacing: "0.3px" }}>
          Earn up to
        </Heading>
        <ArrowForwardIcon color="#24BA7B" />
      </Flex>
      <Divider />
      <Box>
        <CardMidContent color="#7645d9">
          {/* {getHighestAPY() ? ( */}
            {/* `${getHighestAPY()}% ${TranslateString(736, 'APR')}` */}
          {/* // ) : ( */}
          1,447.19% APR
            {/* // <Skeleton animation="pulse" variant="rect" height="44px" /> */}
          {/* // )} */}
        </CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="#8990A5" style={{ lineHeight: "20px", fontSize: "16px", letterSpacing: "0.3px", fontWeight: "normal", marginTop: "5px" }}>
            in Farms
          </Heading>
        </Flex>
    </Box>
    </StyledFarmStakingCard>
  )
}

export default EarnAPYCard
