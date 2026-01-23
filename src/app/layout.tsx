import '@/styles/global.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

import FloatingNav from '@/components/floating-nav'
import { ThemeProvider } from '@/components/theme-provider'
import { ViewTransitions } from '@/components/view-transitions'
import { WebVitals } from '@/components/web-vitals'

export const name = 'Makoto Katayori'

export const metadata: Metadata = {
  title: {
    default: name,
    template: `%s | ${name}`,
  },
  description:
    'ソフトウェアエンジニア Makoto Katayoriのポートフォリオサイト。技術ブログや制作物を公開しています。',
  keywords: [
    'Makoto Katayori',
    'Portfolio',
    'Software Engineer',
    'Web Development',
    'Next.js',
  ],
  authors: [{ name: 'Makoto Katayori' }],
  creator: 'Makoto Katayori',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://portfolio.plantslog.com',
    title: name,
    description: 'ソフトウェアエンジニア Makoto Katayoriのポートフォリオサイト',
    siteName: name,
    images: [
      {
        url: 'https://portfolio.plantslog.com/twitter-card.jpg',
        width: 1200,
        height: 630,
        alt: name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: name,
    description: 'ソフトウェアエンジニア Makoto Katayoriのポートフォリオサイト',
    images: ['https://portfolio.plantslog.com/twitter-card.jpg'],
  },
  metadataBase: new URL('https://portfolio.plantslog.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body>
        <ThemeProvider>
          <ViewTransitions />
          <WebVitals />
          <main>{children}</main>
          <FloatingNav />
          <footer style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <p>© 2026 {name}</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
