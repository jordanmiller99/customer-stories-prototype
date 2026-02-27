import type { Metadata } from 'next'
import { DM_Serif_Display, Inter, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Champion Stories | AirOps',
    template: '%s | Champion Stories',
  },
  description:
    'Meet the marketers redefining what\'s possible with content engineering. Real stories, real careers, real results.',
  openGraph: {
    type: 'website',
    siteName: 'Champion Stories by AirOps',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="min-h-screen bg-white text-[#000d05]">
        {children}
      </body>
    </html>
  )
}
