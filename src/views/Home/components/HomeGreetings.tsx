import { Button, getMainDomain, Heading, Text } from '@alium-official/uikit'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Lottie from 'react-lottie-player'
import styled from 'styled-components'
import greetingsAnimationJSON from '../../../assets/data/greetings-animation.json'
import GreetingsConfetti from './GreetingsConfetti'

const GreetingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 7%;
  margin-left: 26%;
  position: absolute;
  z-index: 2;

  @media screen and (max-width: 1700px) {
    margin-left: 12%;
  }
  @media screen and (max-width: 1440px) {
    margin-left: 10%;
    margin-top: 10%;
  }
  @media screen and (max-width: 1224px) {
    margin-left: 0%;
  }
  @media screen and (max-width: 480px) {
    position: relative;
    width: 100%;
  }
`
const StyledHeading = styled(Heading)`
  font-weight: bold;
  font-size: 90px;
  line-height: 90px;

  @media screen and (max-width: 1024px) {
    font-size: 64px;
    overflow: hidden;

    line-height: 64px;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
    line-height: 36px;
    text-align: center;
  }
`

const StyledText = styled(Text)`
  font-size: 24px;
  line-height: 30px;
  margin: 32px 0 40px 0;
  color: #8990a5;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 26px;
    margin: 24px 0 32px 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`
const StyledButton = styled(Button)`
  @media screen and (max-width: 480px) {
    display: block;
    margin: 0 auto;
  }
`

const ImageFrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  position: relative;
  & img {
    position: absolute;
    &:last-child {
      position: relative;
    }
  }

  @media screen and (max-width: 1440px) {
    margin-right: 0%;
  }
`

const HomeGreetings: React.FC = () => {
  const [animationInited, setAnimationInited] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setTimeout(() => {
      setAnimationInited(true)
    }, 1000)
  }, [])

  return (
    <GreetingsWrapper>
      <GreetingsConfetti />
      <InfoWrapper>
        <StyledHeading className="animate__animated animate__fadeInUp animate__delay-2s animate__fast ">
          {t('hurray')}!
        </StyledHeading>
        <StyledText className="animate__animated animate__fadeInUp animate__delay-2s animate__fast">
          {t('greetingsMessage')}
        </StyledText>
        <a
          href={`https://exchange.${getMainDomain()}`}
          className="animate__animated animate__fadeInUp animate__delay-2s animate__fast"
        >
          <StyledButton>{t('startTrading')}</StyledButton>
        </a>
      </InfoWrapper>

      <ImageFrapper>
        {animationInited && <Lottie loop={false} animationData={greetingsAnimationJSON} play />}
      </ImageFrapper>
    </GreetingsWrapper>
  )
}

export default HomeGreetings
