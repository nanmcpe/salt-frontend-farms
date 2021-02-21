import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout } from '@saltswap/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Countdown from 'views/Countdown/Countdown'
import FarmStakingCard from './components/FarmStakingCard'
import SaltyStats from './components/SaltyStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/salt-stars-bg-2.svg'), url('/images/salt-stars-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(10004, 'SaltSwap Farms Opening In')}
        </Heading>
        {/* <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'SaltSwap')}
        </Heading>
        <Text>{TranslateString(578, 'The saltiest AMM and yield farm on Binance Smart Chain.')}</Text> */}
        <div className="wrapper">
          <Countdown date="February 21 2021 10:00 GMT" />
        </div>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <SaltyStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
