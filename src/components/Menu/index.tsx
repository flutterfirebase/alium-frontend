import { ChainId } from '@alium-official/sdk'
import { externalLinks,getMainDomain,Menu as UikitMenu,MenuEntry } from '@alium-official/uikit'
import ConnectionPending from 'components/ConnectionPending/ConnectionPending'
import useActiveWeb3React from 'hooks'
import useAuth from 'hooks/useAuth'
import useCurrencyBalance from 'hooks/useCurrencyBalance'
import useTheme from 'hooks/useTheme'
import useWeb3 from 'hooks/useWeb3'
import React,{ FC } from 'react'
import { useTranslation } from 'react-i18next'
// import { useWeb3React } from '@web3-react/core'
import { Route,RouteProps } from 'react-router-dom'
import { getExplorerLink,getExplorerName } from 'utils'

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
          href: `https://exchange.${getMainDomain()}`,
        },
        {
          label: t('mainMenu.liquidity'),
          href: `https://exchange.${getMainDomain()}/pool`,
        },
      ],
    },
    // { label: 'Token holder area', icon: 'PrivateRoundIcon', href: `https://account.${getMainDomain()}` },
    // {
    //   label: 'Analytics',
    //   icon: 'InfoIcon',
    //   items: [
    //     {
    //       label: 'Overview',
    //       href: `https://info.${getMainDomain()}`,
    //     },
    //     {
    //       label: 'Tokens',
    //       href: `https://info.${getMainDomain()}/tokens`,
    //     },
    //     {
    //       label: 'Pairs',
    //       href: `https://info.${getMainDomain()}/pairs`,
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
          href: externalLinks.github,
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
          href: externalLinks.medium,
        },
      ],
    },
  ]

  return (
    <>
      <ConnectionPending />
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
    </>
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
