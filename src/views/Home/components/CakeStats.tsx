import React from 'react'
import { Card, CardBody, Text } from '@alium-official/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { /* useTotalSupply, */ useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  border-radius: 6px;
`

const Row = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid #f4f5fa;
  margin: 20px 0;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = 10000000 // useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const almPerBlock = 25

  return (
    <StyledCakeStats>
      <CardBody>
        <Text
          style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0.3px', color: '#0B1359', fontWeight: 'bold' }}
        >
          {TranslateString(534, 'ALM Stats')}
        </Text>
        <Divider />
        <Row>
          <Text fontSize="16px" color="#8990A5" style={{ fontWeight: 'normal' }}>
            {TranslateString(536, 'Total ALM Supply')}
          </Text>
          <CardValue fontSize="16px" color="#0B1359" bold value={totalSupply} />
        </Row>
        <Row>
          <Text fontSize="16px" color="#8990A5">
            {TranslateString(538, 'Total ALM Burned')}
          </Text>
          <CardValue fontSize="16px" color="#0B1359" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="16px" color="#8990A5">
            {TranslateString(540, 'New ALM/block')}
          </Text>
          <CardValue fontSize="16px" color="#0B1359" value={almPerBlock} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
