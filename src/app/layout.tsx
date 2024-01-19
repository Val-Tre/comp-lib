import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const inter = DM_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Components Test',
  description: 'button, input, checkboxed and more...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
