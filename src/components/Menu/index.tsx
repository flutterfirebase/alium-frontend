import React, { FC } from 'react'
import { ChainId } from '@alium-official/sdk'
import { Menu as UikitMenu, MenuEntry } from '@alium-official/uikit'
// import { useWeb3React } from '@web3-react/core'
import { Route, RouteProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import useCurrencyBalance from 'hooks/useCurrencyBalance'
import useWeb3 from 'hooks/useWeb3'
import { getExplorerLink, getExplorerName } from 'utils'
import useActiveWeb3React from 'hooks'

type PropsType = {
  loginBlockVisible?: boolean
}
const Menu: FC<PropsType> = ({ loginBlockVisible = true, ...props }) => {
  const { account, chainId } = useActiveWeb3React()
  const web3 = useWeb3()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const { balance } = useCurrencyBalance(account, web3)
  const explorerName = getExplorerName(chainId as ChainId)
  const explorerLink = getExplorerLink(chainId as ChainId, account as string, 'address')

  const useBalance = async () => {
    // const result = await useCurrencyBalance(account, web3)
    return balance
  }

  const links: MenuEntry[] = [
    {
      label: 'Home',
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
        {
          label: 'Audits',
          href: '/audits',
        },
        // {
        //   label: 'Voting',
        //   href: 'https://voting.dev.alium.finance',
        // },
        {
          label: t('mainMenu.github'),
          href: 'https://github.com/alium-official',
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
      balance={balance?.toSignificant(6)}
      explorerName={explorerName}
      explorerLink={explorerLink}
      options={{
        modalTitle: t('connectToWallet'),
        modalFooter: t('learnHowConnect'),
        modelLogout: t('logout'),
        modalBscScan: t('viewOnBscscan'),
        modelCopyAddress: t('copyAddress'),
      }}
      betaText="This is the main version. Press here to switch to Beta."
      betaLink="https://beta.exchange.alium.finance"
      balanceHook={useBalance}
      {...props}
    />
  )
}

export const MenuWrappedRoute: FC<RouteProps & { loginBlockVisible: boolean }> = ({
  children,
  loginBlockVisible,
  ...props
}) => (
  <Route {...props}>
    <Menu loginBlockVisible={loginBlockVisible}>{children}</Menu>
  </Route>
)

export default Menu
