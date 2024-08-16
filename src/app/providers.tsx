'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { mainnet, sepolia, baseSepolia, base } from 'wagmi/chains'
import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

//import { getDefaultConfig } from '@rainbow-me/rainbowkit'


import { config } from '@/wagmi'

type Props = {
  children: ReactNode,
  initialState: State | undefined,
}

// needs to be done in a client component
export const connectKitConfig = createConfig(
  getDefaultConfig({
    chains: [mainnet, sepolia, baseSepolia, base, /* Add additional chain objects here */],
    connectors: [
      injected(),
      coinbaseWallet({ appName: 'Create Wagmi' }),
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
    walletConnectProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
    appName: "onchainKit Tutorial",
    appDescription: "A simple tutorial to get you started with onchainKit",
    appUrl: "https://onchainkit.com",
    appIcon: "https://onchainkit.com/logo.svg",
  }),
)

// rainbowKit config (note rainbowKit does NOT put createConfig inside of getDefaultConfig)
// And it seems that rainbowkit already defines the connectors
// export const config = getDefaultConfig({
//   appName: 'RainbowKit App',
//   projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
//   chains: [
//     mainnet,
//     baseSepolia,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
//   ],
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//     [baseSepolia.id]: http(),
//   },
// });


export function Providers({ children, initialState }: Props) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider chain={baseSepolia}> {/* expects a single chain, add conditinoal logic here */}
          
            <ConnectKitProvider> {/* decide which connector you want and remove the other */}
              {children}
            </ConnectKitProvider>
          
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
