import { getMainDomain } from '@alium-official/uikit'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  max-width: 1122px;
  width: 100%;
  margin: 0 auto 80px auto;

  @media screen and (min-width: 1320px) {
    flex-direction: row;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 546px;
  width: 100%;
  margin: 40px auto 0 auto;

  @media screen and (min-width: 1320px) {
    margin: 0;
  }
`

const RightColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 430px;
  height: 502px;
  padding-top: 102px;
  padding-left: 0;
  position: relative;
  margin: auto;
  zoom: 0.6;

  @media screen and (min-width: 640px) {
    zoom: 1;
  }

  @media screen and (min-width: 1320px) {
    margin: 0;
  }
`

const StartingSoon = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(155, 44%, 81%);
  border: 1px solid hsl(155, 68%, 44%);
  border-radius: 6px;
  width: 101px;
  height: 30px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  color: hsl(155, 68%, 44%);
`

const H1 = styled.h1`
  margin-top: 32px;
  font-family: Roboto, sans-serif;
  font-size: 90px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: 0.3px;
  color: hsl(234, 78%, 20%);
`

const H2 = styled.h2`
  margin-top: 16px;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: normal;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: hsl(225, 13%, 59%);
`

const ActionButton = styled.div`
  margin-top: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 164px;
  height: 48px;
  background: hsl(248, 57%, 60%);
  border-radius: 6px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: hsla(248, 57%, 65%);
  }
`

const Cards = styled.div`
  max-width: 546px;
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 258px;
  height: 144px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;

  & .title {
    margin: 24px 0 0 16px;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: hsl(0, 0%, 100%);
  }

  & .button {
    margin: 40px 0 0 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 40px;
    height: 40px;
    border: 1px solid hsl(0, 0%, 100%);
    border-radius: 6px;
    background: hsla(0, 0%, 100%, 0.1) url('/images/home/card-arrow-right.svg') no-repeat center;
    transition: background 0.2s;
  }

  &:hover .button {
    background: hsla(0, 0%, 100%, 0.3) url('/images/home/card-arrow-right.svg') no-repeat center;
  }
`

const CardExchange = styled(Card)`
  background: hsl(248, 57%, 60%) url('/images/home/card-exchange.svg');
`
const CardLiquidity = styled(Card)`
  background: hsl(155, 68%, 44%) url('/images/home/card-liquidity.svg');
`

const Rectangle = styled(motion.div)`
  background: linear-gradient(144.86deg, #6c5dd3 20.65%, #ffc581 107.09%);
  border-radius: inherit;
`

const Hand1 = styled(motion.div)`
  position: absolute;
  bottom: -50px;
  right: 0;
  width: 460px;
  height: 350px;
  background: url(/images/home/hand-1-x2.png) no-repeat;
  background-size: contain;
`

const Hand2 = styled(motion.div)`
  position: absolute;
  bottom: -3px;
  left: -20px;
  width: 203px;
  height: 152px;
  background: url(/images/home/hand-2-x2.png) no-repeat;
  background-size: contain;
`

const HandCardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HandCard1 = styled(motion.div)`
  margin-top: -107px;
  margin-left: -130px;
  background: url(/images/home/hand-card-1-x2.png) no-repeat;
  background-size: contain;
  position: absolute;
`

const HandCardShadow = styled(motion.div)`
  margin-bottom: -76px;
  margin-right: 114px;
  background: url(/images/home/hand-card-shadow-x2.png) no-repeat;
  background-size: contain;
  position: absolute;
`

const HandCard2 = styled(motion.div)`
  margin-top: 89px;
  margin-left: -103px;
  background: url(/images/home/hand-card-2-x2.png) no-repeat;
  background-size: contain;
  position: absolute;
`

const Ellipse1 = styled(motion.div)`
  top: 146px;
  left: 12px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 9px 3px white;
  position: absolute;
`

const Ellipse2 = styled(motion.div)`
  top: 181px;
  right: 119px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 12px 3px white;
  position: absolute;
`

const Ellipse3 = styled(motion.div)`
  top: 230px;
  right: 21px;
  width: 11px;
  height: 12px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 6px 3px white;
  position: absolute;
`

const MotionLeftColumn: FC<{
  opacityDelay?: number
  opacityDuration?: number
  xInitial?: number
  xDuration?: number
}> = ({ children, opacityDelay = 0, opacityDuration = 1.5, xInitial = 0, xDuration = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: opacityDelay, duration: opacityDuration, ease: 'easeOut' }}
  >
    <motion.div initial={{ x: xInitial }} animate={{ x: 0 }} transition={{ duration: xDuration, ease: 'easeOut' }}>
      {children}
    </motion.div>
  </motion.div>
)

const HomeNew = () => {
  return (
    <Container>
      <LeftColumn>
        <MotionLeftColumn xInitial={-20} xDuration={0.8}>
          <StartingSoon>MAY 18-20</StartingSoon>
        </MotionLeftColumn>
        <MotionLeftColumn xInitial={-60} xDuration={1}>
          <H1>Public Sale LIVE</H1>
        </MotionLeftColumn>
        {/* <MotionLeftColumn xInitial={-40} xDuration={0.8}>
          <H2>Have time to add yourself to the whitelist.</H2>
        </MotionLeftColumn> */}
        <MotionLeftColumn xInitial={-50} xDuration={1.1}>
          <a href="https://public.alium.finance">
            <ActionButton>Public Sale</ActionButton>
          </a>
        </MotionLeftColumn>
        <Cards>
          <a href={`https://exchange.${getMainDomain()}`}>
            <MotionLeftColumn opacityDelay={0.3} xInitial={-80} xDuration={1.4}>
              <CardExchange>
                <div className="title">Exchange</div>
                <div className="button" />
              </CardExchange>
            </MotionLeftColumn>
          </a>
          <a href={`https://exchange.${getMainDomain()}/pool`}>
            <MotionLeftColumn opacityDelay={0.5} xInitial={-100} xDuration={1.5}>
              <CardLiquidity>
                <div className="title">Liquidity</div>
                <div className="button" />
              </CardLiquidity>
            </MotionLeftColumn>
          </a>
        </Cards>
      </LeftColumn>
      <RightColumn>
        <motion.div
          initial={{
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
          }}
          animate={{
            borderTopLeftRadius: 200,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 200,
            borderBottomLeftRadius: 20,
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
        >
          <Rectangle
            initial={{ width: 0, height: 0 }}
            animate={{ width: 429, height: 500 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </motion.div>
        <Hand1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        />
        <HandCardContainer>
          <HandCard2
            initial={{ width: 0, height: 0, rotate: -60 }}
            animate={{ width: 383, height: 289, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          />
        </HandCardContainer>
        <Ellipse2
          initial={{ opacity: 0, y: -30, width: 84, height: 84 }}
          animate={{ opacity: 1, y: 0, width: 42, height: 42 }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        />

        <HandCardContainer>
          <HandCardShadow
            initial={{ width: 0, height: 0, rotate: -60 }}
            animate={{ width: 370, height: 330, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
          />
          <HandCard1
            initial={{ width: 0, height: 0, rotate: -60 }}
            animate={{ width: 450, height: 414, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
          />
        </HandCardContainer>
        <Hand2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
        />
        <Ellipse1
          initial={{ opacity: 0, width: 40, height: 40 }}
          animate={{ opacity: 1, width: 16, height: 16 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        />
        <Ellipse3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        />
      </RightColumn>
    </Container>
  )
}

export default HomeNew
