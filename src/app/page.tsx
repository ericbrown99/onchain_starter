'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ConnectKitButton } from 'connectkit'
import { Avatar } from '@coinbase/onchainkit/identity'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>
        <h2>Account</h2>

        <ConnectKitButton />
        <Avatar address={account?.address ?? '0x'} />
       </div>
    </>
  )
}

export default App
