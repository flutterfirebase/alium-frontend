import React from 'react'
import styled from 'styled-components'
import { Heading, Card, Flex, ArrowForwardIcon } from '@aliumswap/uikit'
// import useLotteryTotalPrizesUsd from 'hooks/useLotteryTotalPrizesUsd'

const StyledFarmStakingCard = styled(Card)`
  background: transparent;
  border-radius: 6px;
  border: 1px solid #FF723A;
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
  border-bottom: 1px solid #FF723A;
`

const Box = styled.div`
  padding: 24px;
`

const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: #FF723A;
`
const WinCard = () => {
  const lotteryPrize = "100000" // Math.round(useLotteryTotalPrizesUsd()).toLocaleString()

  return (
    <StyledFarmStakingCard>
      <Flex justifyContent="space-between" padding="24px">
        <Heading color="contrast" style={{ lineHeight: "24px", fontSize: "18px", letterSpacing: "0.3px" }}>
          Lottery with
        </Heading>
        <ArrowForwardIcon color="#FF723A" />
      </Flex>
      <Divider />
      <Box>
        <CardMidContent color="#7645d9">${lotteryPrize}</CardMidContent>
        <Flex justifyContent="space-between">
        <Heading color="#8990A5" style={{ lineHeight: "20px", fontSize: "16px", letterSpacing: "0.3px", fontWeight: "normal", marginTop: "5px" }}>
            up for Grabs
          </Heading>
        </Flex>
      </Box>
    </StyledFarmStakingCard>
  )
}

export default WinCard
