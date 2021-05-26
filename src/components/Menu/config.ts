import { externalLinks, getMainDomain, MenuEntry } from '@alium-official/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: `https://exchange.${getMainDomain()}`,
      },
      {
        label: 'Liquidity',
        href: `https://exchange.${getMainDomain()}/pool`,
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://info.dev.alium.finance',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://info.dev.alium.finance/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://info.dev.alium.finance/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://info.dev.alium.finance/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.dev.alium.finance',
      // },
      {
        label: 'Github',
        href: externalLinks.github,
      },
      {
        label: 'Docs',
        href: 'https://aliumswap.gitbook.io/alium-finance/',
      },
      {
        label: 'Blog',
        href: externalLinks.medium,
      },
    ],
  },
]

export default config
