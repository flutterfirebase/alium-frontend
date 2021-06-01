// const audit1_image='../images/01_Certificate_Aliumswap.png'
import aliumswap from '../images/01_Certificate_Aliumswap.png'
import securityAssesmentImage from '../images/02_Certificate_Aliumswap.png'
import jun_cert1 from '../images/1jun_cert.png'
import cert08 from '../images/certificate_08.jpg'
import cert15 from '../images/certificate_15.jpg'
import certikImage from '../images/certik.png'
import chainsultingImage from '../images/chainsulting.png'
import smartContract from '../images/smart_contract_code.jpg'

export type AuditType = {
  id: number
  headline: string
  date: string
  distribution?: string
  gitHubCertificate?: string
  detailedReport?: string
  gitHubCerificatePDF?: string
  bscScan?: string
  headImg: string
  image: string
}

const cardList = [
  {
    // certic
    headline: 'Alium Factory Security Assessment, CertiK',
    date: 'Jun 1st, 2021',
    gitHubCertificate:
      'https://github.com/Alium-Finance/alium-swap-heco/blob/master/alium-swap-core/contracts/AliumFactory.sol',
    detailedReport:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e90832ef-13e3-4396-b54f-e37acce2978b/REP-Alium-2021-06-01%282%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210601T121029Z&X-Amz-Expires=86400&X-Amz-Signature=348a2f18757703d88bb8c1a863baf81170b8929bdb7cd21eee0d3a48850b1271&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22REP-Alium-2021-06-01%282%29.pdf%22',
    image: jun_cert1,
    headImg: certikImage,
  },
  {
    // certic
    headline: 'Alium Router Security Assessment, CertiK',
    date: 'Jun 1st, 2021',
    gitHubCertificate:
      'https://github.com/Alium-Finance/alium-swap-heco/blob/master/alium-swap-periphery/contracts/AliumRouter.sol',
    detailedReport: 'https://www.certik.org/projects/aliumswap',
    image: jun_cert1,
    headImg: certikImage,
  },
  {
    // certic
    headline: 'Security Assessment Alium Farm by CertiK',
    date: 'May 15th, 2021',
    gitHubCertificate: 'https://github.com/Alium-Finance/alium-farm/blob/master/contracts/AliumToken.sol',
    detailedReport: 'https://drive.google.com/file/d/1DuyR97HWPk8Nxe5VJ8S9l3cdCZQwkGK5/view',
    image: cert15,
    headImg: certikImage,
  },
  {
    // certic
    headline: 'SMART CONTRACT CODE REVIEW AND SECURITY ANALYSIS REPORT BY HACKEN',
    date: 'May 12th , 2021',
    gitHubCertificate: 'https://github.com/Alium-Finance/alium-farm/blob/master/contracts/AliumToken.sol',
    detailedReport: 'https://drive.google.com/file/d/1oC_wrSwjw_47scZBeuHavTvtjwWmwQXS/view',
    image: smartContract,
    headImg: certikImage,
  },
  {
    // certic
    headline: 'Security Assessment Alium Collectible by CertiK',
    date: 'May 8th, 2021',
    gitHubCertificate: 'https://github.com/Alium-Finance/alium-collectible/blob/master/contracts/NFTPublicSeller.sol',
    detailedReport: 'https://drive.google.com/file/d/1Vd03-3ro62UvYMLeR8PHrmP5AeVBSD6v/view',
    image: cert08,
    headImg: certikImage,
  },
  {
    headline: 'Core Contracts Audit',
    date: '13th April 2021',
    distribution: 'Chainsulting',
    gitHubCertificate: 'https://github.com/alium-official/alium-collectible/blob/master/contracts/AliumCollectible.sol',
    bscScan: 'https://www.bscscan.com/address/0x2991cc4aB9286416b7925916aE6bD2Dc5AF7bAcb',
    detailedReport:
      'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Aliumswap/02_Smart%20Contract%20Audit_AliumSwap_Core.pdf',
    gitHubCerificatePDF:
      'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Aliumswap/01_Certificate_Aliumswap_AMM.pdf',
    // aliumswap core links to github
    image: aliumswap,
    headImg: chainsultingImage,
  },
  {
    // certic
    headline: 'Liquidity Migration Contract Audit',
    date: '7th April 2021',
    gitHubCertificate: 'https://github.com/alium-official/alium-liquidity-migration',
    detailedReport: 'https://www.certik.org/projects/aliumswap',
    image: securityAssesmentImage,
    headImg: certikImage,
  },
].map((item, i) => ({ ...item, id: i })) as Array<AuditType>

export default cardList
