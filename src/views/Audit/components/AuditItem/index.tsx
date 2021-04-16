import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, LinkExternal, Text, ArrowDropDownIcon } from '@aliumswap/uikit'
// import { BSCScanIcon, GitHubIcon } from '../../../../assets/Icons'
import images from '../../images/01_Certificate_Aliumswap.png'
import { BSCScanIcon, GitHubIcon } from '../../svg'
import chainsultingImage from '../../images/chainsulting.png'
import certikImage from '../../images/certik.png'
import securityAssesmentImage from '../../images/02_Certificate_Aliumswap.png'

const StyledContainer = styled.div`
  max-width: 738px;
  height: 275px;
  
  background: #FFFFFF;
  padding: 24px;
  border-radius: 6px;
  @media screen and (max-width: 740px) {
    height: auto;
    padding: 16px;
    width: 94vw;
  }
`

const StyledImage = styled.img<{ type?: string }>`
  object-fit: contain;
  height: 172px;
  padding: 6px;
  border: 1px solid #F5F7FF;
  box-sizing: border-box;
  border-radius: 6px;
  ${({type})=> type === 'center' ? 'display: none;' : ''}
  
  @media screen and (max-width: 740px) {
    ${({type})=> type === 'center' ? 'display: block;height: 100%;' : 'display: none;'}
  }
`

const StyledImageContainer = styled.div`
  border-radius: 100%;
  object-fit: contain;
  box-shadow: 0px 6px 12px rgb(185 189 208 / 40%);
  margin-right: 8px;
  > img {
    padding: 8px 7px;
    display: block;
    width: 34px;
    height: 34px;
    object-fit: contain;
  }
`

const StyledFlex = styled(Flex)`
  > div:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 740px) {
     margin-bottom: 16px;
     > div:not(:last-child) {
       margin-bottom: 0;
     }
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  display: inline-flex;
  font-size: 14px;
  text-overflow: ellipsis;
`

const StyledContainerFlex = styled(Flex)`
  @media screen and (max-width: 740px) {
    display: block;
  }
`

const StyledDestribution = styled(Flex)<{type?: string}>`
 ${({type})=> type === 'header' ? '' : 'display: none;'}
  @media screen and (max-width: 740px) {
    ${({type})=> type === 'header' ? 'display: none;' : 'display: flex;margin-bottom: 24px;'}
  }
`

const StyledHeadline = styled(Text)`
 @media screen and (max-width: 740px) {
    font-size: 16px;
    font-weight: 500;
 }
`

const StyledBorderedFlex = styled(Flex)`
  border-bottom: 1px solid #F5F7FF;
  padding-bottom: 16px;
  @media screen and (max-width: 740px) {
    border: none;
    padding-bottom: 0;
  }
`

const FooterFlex = styled(Flex)`
   @media screen and (max-width: 740px) {
      flex-direction: column;
      > a:first-child {
        margin-bottom: 8px;
      }
   }
`

const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)`
   display: none;
   @media screen and (max-width: 740px) {
    display: block;
   }
`

const StyledText = styled(Text)`
  @media screen and (max-width: 740px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`

const AuditItem = ({headline, date, gitHubCertificate, detailedReport, gitHubCerificatePDF, bscScan, distribution}) => {

  const [isOpened, setIsOpened] = useState(true);

  return (
    <StyledContainer>
      <StyledContainerFlex justifyContent="space-between" style={{height: '100%'}}>
        <Flex flexDirection="column" justifyContent="space-between" style={{height: '100%'}}>
          <StyledBorderedFlex flexDirection="column" justifyContent="space-between">
            <StyledDestribution alignItems="center" type="header">
              <StyledImageContainer>
                <img src={distribution === 'Chainsulting' ? chainsultingImage : certikImage} alt='' />
              </StyledImageContainer>
              <Text color="#8990A5" fontSize="14px">{distribution === 'Chainsulting' ? 'Chainsulting' : 'CertiK Security Leaderboard'}</Text>
            </StyledDestribution>
            <Flex justifyContent="space-between" alignItems="center">
              <StyledHeadline color="#0B1359" fontSize="24px">{headline}</StyledHeadline>
              <StyledArrowDropDownIcon onClick={()=>setIsOpened(!isOpened)} style={isOpened ? {transform: 'rotate(180deg)'} : {}}/>
            </Flex>
            <Text color="#8990A5" fontSize="14px">{date}</Text>
          </StyledBorderedFlex>
          {isOpened &&
            <>
              <StyledDestribution alignItems="center">
                <StyledImageContainer>
                  <img src={distribution === 'Chainsulting' ? chainsultingImage : certikImage} alt='' />
                </StyledImageContainer>
                <Text color="#8990A5" fontSize="14px">{distribution === 'Chainsulting' ? 'Chainsulting' : 'CertiK Security Leaderboard'}</Text>
              </StyledDestribution>
              <StyledImage src={distribution === 'Chainsulting' ? images : securityAssesmentImage} alt="" type="center"/>
              <StyledFlex flexDirection="column">
                <Flex alignItems="center">
                  <GitHubIcon style={{marginRight: '4px'}} />
                  <StyledText fontSize="14px">On Github:  <StyledLinkExternal paddingRight="16px" href={gitHubCertificate}>{gitHubCertificate ? `${gitHubCertificate.slice(0, 30)}...` : ''}</StyledLinkExternal></StyledText>
                </Flex>
                {bscScan && <Flex alignItems="center">
                  <BSCScanIcon style={{ marginRight: '4px' }} />
                  <StyledText fontSize="14px">On BscScan: <StyledLinkExternal paddingRight="16px"
                                                                        href={bscScan}>{bscScan ? `${bscScan.slice(0, 30)}...` : ''}</StyledLinkExternal></StyledText>
                </Flex>}
              </StyledFlex>
              <FooterFlex>
                {gitHubCerificatePDF && <StyledLinkExternal paddingRight="16px" href={gitHubCerificatePDF}>GitHub Cerificate
                  PDF</StyledLinkExternal>}
                <StyledLinkExternal href={detailedReport}>Detailed report</StyledLinkExternal>
              </FooterFlex>
            </>
          }
        </Flex>
        {/* <h1>Avatar</h1> */}
        <StyledImage src={distribution === 'Chainsulting' ? images : securityAssesmentImage} alt=""/>
      </StyledContainerFlex>
    </StyledContainer>
  )
}

export default AuditItem
