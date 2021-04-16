// const audit1_image='../images/01_Certificate_Aliumswap.png'

export type AuditType = {
  id: number
  headline: string
  date: string
  distribution?: string
  gitHubCertificate?: string
  detailedReport?: string
  gitHubCerificatePDF?: string
  bscScan?: string
}

const cardList = [
  {
    headline: 'Core Contracts Audit',
    date: '13th April 2021',
    distribution: 'Chainsulting',
    gitHubCertificate: 'https://github.com/Aliumswap/alium-collectible/blob/main/contracts/AliumCollectible.sol',
    bscScan: 'https://www.bscscan.com/address/0x2991cc4aB9286416b7925916aE6bD2Dc5AF7bAcb',
    detailedReport: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Aliumswap/02_Smart%20Contract%20Audit_AliumSwap_Core.pdf',
    gitHubCerificatePDF: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Aliumswap/01_Certificate_Aliumswap_AMM.pdf',
    // aliumswap core links to github
  },
  {
    // certic
    headline: 'Liquidity Migration Contract Audit',
    date: '7th April 2021',
    gitHubCertificate: 'https://github.com/Aliumswap/alium-liquidity-migration',
    detailedReport: 'https://www.certik.org/projects/aliumswap'
  },
].map((item, i) => ({ ...item, id: i })) as Array<AuditType>

export default cardList
