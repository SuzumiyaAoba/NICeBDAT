import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NICeBDAT',
    template: '%s | NICeBDAT'
  },
  description: 'Next.js 15 application with modern features',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'SuzumiyaAoba' }],
  creator: 'SuzumiyaAoba',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://suzumiyaaoba.com',
    title: 'NICeBDAT',
    description: 'Next.js 15 application with modern features',
    siteName: 'NICeBDAT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NICeBDAT',
    description: 'Next.js 15 application with modern features'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 