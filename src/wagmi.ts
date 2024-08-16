import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

// standard wagmi config
export const config = createConfig({
    chains: [mainnet, sepolia, baseSepolia],
    connectors: [
      injected(),
      coinbaseWallet({ appName: 'Create Wagmi', preference: 'smartWalletOnly'}),
      walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID! }),
    ],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [baseSepolia.id]: http(),
    },
  },
)


// declare module 'wagmi' {
//   interface Register {
//     config: typeof config
//   }
// }
