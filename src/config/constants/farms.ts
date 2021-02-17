import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SALT',
    lpAddresses: {
      97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c',
      56: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // EGG-BUSD LP
    },
    tokenSymbol: 'SALT',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME: SALT
      56: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME: SALT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
