import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Champion Stories | AirOps',
    template: '%s | Champion Stories',
  },
  description: 'Meet the marketers redefining what\'s possible with content engineering. Real stories, real careers, real results.',
  openGraph: {
    type: 'website',
    siteName: 'Champion Stories by AirOps',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ backgroundColor: '#0B0B1A', color: '#F5F5F7' }}>
        {children}
      </body>
    </html>
  )
}
