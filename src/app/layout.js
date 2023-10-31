import { Analytics } from '@vercel/analytics/react';

import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Pitching Pathways',
  description: 'Invest in AI',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
      <Analytics/>
    </html>
  )
}
