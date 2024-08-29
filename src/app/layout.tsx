import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'
import OnchainProviders from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Create Wagmi',
  description: 'Generated by create-wagmi',
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
        <OnchainProviders>{props.children}</OnchainProviders>
      </body>
    </html>
  )
}
