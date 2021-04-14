import React from 'react'
// import styled from 'styled-components'
// import { Heading, Text, BaseLayout } from '@aliumswap/uikit'
// import { BaseLayout } from '@aliumswap/uikit'
// import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
// import FarmStakingCard from 'views/Home/components/FarmStakingCard'
// import LotteryCard from 'views/Home/components/LotteryCard'
// import CakeStats from 'views/Home/components/CakeStats'
// import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
// import EarnAPYCard from 'views/Home/components/EarnAPYCard'
// import EarnAssetCard from 'views/Home/components/EarnAssetCard'
// import WinCard from 'views/Home/components/WinCard'
import HomeGreetings from './components/HomeGreetings'

// const Hero = styled.div`
//   background-repeat: no-repeat;
//   background-position: top center;
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   margin-bottom: 32px;
//   margin-top: 20px;
// `

// const Cards = styled(BaseLayout)`
//   align-items: stretch;
//   justify-content: stretch;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//     width: 100%;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 6;
//     }
//   }
// `

// const CTACards = styled(BaseLayout)`
//   align-items: start;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 4;
//     }
//   }
// `

const Home: React.FC = () => {
  return (
    <Page>
        <HomeGreetings />
    </Page>
  )
}



// const HomeCards = () => {
//   const TranslateString = useI18n()

//   return (
//     <>
//       <Hero>
//           <Heading as="h1" size="xl" color="heading" mb="10px">
//             {TranslateString(576, 'Alium Swap')}
//           </Heading>
//           <Text color="#8990A5">Decentralized AMM Exchange with multi-blockchain option and NFTs</Text>
//         </Hero>
//         <div>
//           <Cards>
//             <FarmStakingCard />
//             <LotteryCard />
//           </Cards>
//           <CTACards>
//             <EarnAPYCard />
//             <EarnAssetCard />
//             <WinCard />
//           </CTACards>
//           <Cards>
//             <CakeStats />
//             <TotalValueLockedCard />
//           </Cards>
//         </div>
//     </>
//   )
// }

export default Home
