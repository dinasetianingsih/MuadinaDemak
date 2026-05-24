import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muadina Demak | Layanan Makeup Artist (MUA) Premium',
  description: 'Layanan Makeup Artist (MUA) profesional untuk pernikahan, pre-wedding, dan wisuda. Tampil anggun dan memesona dengan riasan flawless, natural, dan tahan lama.',
  keywords: 'MUA, Makeup Artist, Rias Pengantin, Rias Wisuda, MUA Premium, Kursus Makeup, Muadina Demak',
  generator: 'v0.app',
  openGraph: {
    title: 'Muadina Demak | Layanan Makeup Artist (MUA) Premium',
    description: 'Layanan Makeup Artist (MUA) profesional untuk pernikahan, pre-wedding, dan wisuda. Tampil anggun dan memesona dengan riasan flawless, natural, dan tahan lama.',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/images/hero-bride.jpg',
        width: 1200,
        height: 630,
        alt: 'Muadina Demak - Makeup Artist Premium',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muadina Demak | Layanan Makeup Artist (MUA) Premium',
    description: 'Layanan Makeup Artist (MUA) profesional untuk pernikahan, pre-wedding, dan wisuda.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${cormorantGaramond.variable} bg-cream`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
