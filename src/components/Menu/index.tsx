import React, { useContext, FC } from 'react'
import { Menu as UikitMenu, MenuEntry } from '@aliumswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { Route, RouteProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd, useProfile } from 'state/hooks'


type PropsType = {
  loginBlockVisible?: boolean
}
const Menu: FC<PropsType> = ({ loginBlockVisible = true, ...props }) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()
  const { t } = useTranslation()

  const links: MenuEntry[] = [
    {
      label: "Home",
      icon: 'HomeIcon',
      href: '/',
    },
    {
      label: t('mainMenu.trade'),
      icon: 'TradeIcon',
      items: [
        {
          label: t('swap'),
          href: process.env.REACT_APP_EXCHANGE_URL,
        },
        {
          label: t('mainMenu.liquidity'),
          href: process.env.REACT_APP_LIQUIDITY_URL,
        },
        // {
        //   label: 'Migrate',
        //   href: '/migrate',
        // },
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
      label: t('mainMenu.more'),
      icon: 'MoreIcon',
      items: [
        // {
        //   label: 'Voting',
        //   href: 'https://voting.dev.alium.finance',
        // },
        {
          label: t('mainMenu.github'),
          href: 'https://github.com/Aliumswap',
        },
        // {
        //   label: 'Docs',
        //   href: 'https://docs.pancakeswap.finance',
        // },
        {
          label: 'Docs',
          href: 'https://aliumswap.gitbook.io/alium-finance/',
        },
        {
          label: t('mainMenu.blog'),
          href: 'https://medium.com/@aliumswap',
        },
      ],
    },
  ]

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={links}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/',
        noProfileLink: '/',
        showPip: !profile?.username,
      }}
      loginBlockVisible={loginBlockVisible}
      buttonTitle={t('connect')}
      options={
        {
          modalTitle: t('connectToWallet'),
          modalFooter: t('learnHowConnect'),
          modelLogout: t('logout'),
          modalBscScan: t('viewOnBscscan'),
          modelCopyAddress: t('copyAddress')
        }
      }
      {...props}
    />
  )
}


export const MenuWrappedRoute: FC<RouteProps & { loginBlockVisible: boolean }> = ({ children, loginBlockVisible, ...props }) => (
  <Route {...props}>
    <Menu loginBlockVisible={loginBlockVisible}>{children}</Menu>
  </Route>
)


export default Menu
