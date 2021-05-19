import { Text } from '@alium-official/uikit'
import React from 'react'
import styled from 'styled-components'
import AuditItem from './components/AuditItem'
import audits from './constants/audits'

const ContentHolder = styled.div`
  position: relative;
  margin: auto;
`

const CardWrapper = styled.div`
  width: 100%;
  font-family: Roboto, sans-serif;
  width: 100%;
  margin: 0 auto;
  position: relative;
  
  @media screen and (max-width: 1024px) {
    max-width: 954px;
  }
  
  @media screen and (max-width: 1016px) {
    padding: 0 32px 0 32px;
  }
  @media screen and (max-width: 790px) {
    padding: 0;
  }
`

const AuditListContainer = styled.div`
  > div {
    margin-bottom: 16px;
  }
`

const StyledWrapper = styled.div`
  display: flex;
`

const StyledText = styled(Text)`
  @media screen and (max-width: 740px) {
    text-align: center;
    font-size: 28px;
    margin-top: 20px;
  }
`

const AuditPage = () => {

  return (
    <StyledWrapper>
      <ContentHolder>
        <CardWrapper>
          <StyledText fontSize="48px" style={{ fontWeight: 700, marginBottom: '24px', marginTop: '40px' }}>
            Our completed audits
          </StyledText>

          <AuditListContainer>
            {audits.map((audit) => (
              <AuditItem
                headline={audit.headline}
                date={audit.date}
                gitHubCertificate={audit.gitHubCertificate}
                detailedReport={audit.detailedReport}
                gitHubCerificatePDF={audit.gitHubCerificatePDF}
                bscScan={audit.bscScan}
                distribution={audit.distribution}
                image={audit.image}
                headImg={audit.headImg}
              />
            ))}
          </AuditListContainer>
        </CardWrapper>
      </ContentHolder>
    </StyledWrapper>
  )
}

export default AuditPage
