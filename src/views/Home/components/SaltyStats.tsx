import React from 'react'
import { Card, CardBody, Heading, Text } from '@saltswap/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getSaltAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledSaltyStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const SaltyStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getSaltAddress())
  const farms = useFarms()
  const saltSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  let saltPerBlock = 0
  if (farms && farms[0] && farms[0].saltPerBlock) {
    saltPerBlock = new BigNumber(farms[0].saltPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledSaltyStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Salty Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total SALT Supply')}</Text>
          {saltSupply && <CardValue fontSize="14px" value={saltSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total SALT Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New SALT per block')}</Text>
          <Text bold fontSize="14px">
            {saltPerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledSaltyStats>
  )
}

export default SaltyStats
