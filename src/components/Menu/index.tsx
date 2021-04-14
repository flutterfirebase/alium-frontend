import React, { FC } from 'react'
import { Menu as UikitMenu, MenuEntry } from '@aliumswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { Route, RouteProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'


type PropsType = {
  loginBlockVisible?: boolean
}
const Menu: FC<PropsType> = ({ loginBlockVisible = true, ...props }) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
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
      ],
    },
    // {
    //   label: 'Analytics',
    //   icon: 'InfoIcon',
    //   items: [
    //     {
    //       label: 'Overview',
    //       href: process.env.REACT_APP_INFO_URL,
    //     },
    //     {
    //       label: 'Tokens',
    //       href: `${process.env.REACT_APP_INFO_URL}/tokens`,
    //     },
    //     {
    //       label: 'Pairs',
    //       href: `${process.env.REACT_APP_INFO_URL}/pairs`,
    //     },
    //   ],
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
      links={links}
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
      betaText="This is the main version. Press here to switch to Beta."
      betaLink="https://beta.exchange.alium.finance"
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
