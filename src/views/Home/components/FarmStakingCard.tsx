import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Button, Text } from '@aliumswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-color: #6C5DD3;
  background-image: url('/images/farms-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  color: white;
  border-radius: 6px;
`

const Block = styled.div`
  margin-bottom: 16px;
  margin-right: 45px;
`

const CardImage = styled.img`
  // margin-bottom: 16px;
`

const Label = styled.div`
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  opacity: 0.7;
`

const Box = styled.div`
  display: flex;
`

const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

const Actions = styled.div`
  margin-top: 24px;
  max-width: 30%;

  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 60%;
  }
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        {/* <Heading size="xl" mb="24px" fontSize="24" color="white">
          {TranslateString(542, 'Farms & Staking')}
        </Heading> */}
        <HeadingBox>
          <CardImage src="/images/farms-icon.svg" alt="icon" width="48px" height="48px" />
          <Text color="white" style={{ marginLeft: "16px", lineHeight: '30px', fontSize: "24px", fontWeight: "bold", letterSpacing: "0.3" }}>
            {TranslateString(298, 'Farms & Staking')}
          </Text>
        </HeadingBox>
        {/* <CardImage src="/images/cake.svg" alt="cake logo" width={64} height={64} /> */}
        <Box>
          <Block>
            <Label>{TranslateString(544, 'ALM to Harvest')}:</Label>
            <CakeHarvestBalance />
          </Block>
          <Block>
            <Label>{TranslateString(546, 'ALM in Wallet')}:</Label>
            <CakeWalletBalance />
          </Block>
        </Box>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullwidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting CAKE')
                : TranslateString(532, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton variant="tertiary" fullwidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
