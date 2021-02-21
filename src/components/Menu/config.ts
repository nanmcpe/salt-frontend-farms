import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.saltswap.finance/#/swap',
        icon: 'ExchangeIcon',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.saltswap.finance/#/pool',
        icon: 'LiquidityIcon',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Salty Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
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
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'SaltSwap',
  //       href: '#',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.saltswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/saltswap/',
        icon: 'GithubIcon',
      },
      {
        label: 'Docs',
        href: 'https://saltswap.gitbook.io/salt-swap/',
        icon: 'GitbookIcon',
      },
      {
        label: 'Blog',
        href: 'https://saltswap.medium.com/',
        icon: 'MediumIcon',
      },
    ],
  },
]

export default config
