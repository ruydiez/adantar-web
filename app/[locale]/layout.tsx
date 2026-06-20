import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-sans',
  display:  'swap',
})

const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  style:    ['normal', 'italic'],
  variable: '--font-serif',
  display:  'swap',
})

const baseUrl = 'https://adantar.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:  'AdAntar — Transformative. Transcending.',
    template: '%s | AdAntar',
  },
  description:
    'The definitive selection of mind & body experiences. Where world-class hospitality and elite training meet.',
  keywords: [
    'corporate retreats Lanzarote',
    'high performance experiences',
    'sports retreats Spain',
    'mind body retreats Europe',
    'team building Canary Islands',
    'wellness luxury Lanzarote',
    'retiros corporativos Lanzarote',
    'AdAntar',
  ],
  authors:   [{ name: 'AdAntar', url: baseUrl }],
  creator:   'AdAntar',
  publisher: 'AdAntar',
  robots: {
    index:    true,
    follow:   true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  openGraph: {
    title:       'AdAntar — Transformative. Transcending.',
    description: 'The definitive selection of mind & body experiences. Where world-class hospitality and elite training meet.',
    type:        'website',
    url:         baseUrl,
    siteName:    'AdAntar',
    images: [{
      url:    '/images/lanzarote-03.png',
      width:  1200,
      height: 630,
      alt:    'AdAntar — High performance experiences in Lanzarote',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'AdAntar — Transformative. Transcending.',
    description: 'The definitive selection of mind & body experiences in Lanzarote.',
    images:      ['/images/lanzarote-03.png'],
  },
  alternates: {
    canonical:  baseUrl,
    languages:  {
      'en': baseUrl,
      'es': `${baseUrl}/es`,
    },
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':       'Organization',
        '@id':         `${baseUrl}/#organization`,
        name:          'AdAntar',
        url:           baseUrl,
        logo:          `${baseUrl}/images/logo-white.png`,
        description:   'The definitive selection of mind & body experiences. Where world-class hospitality and elite training meet.',
        email:         'info@adantar.com',
        foundingDate:  '2026',
        areaServed:    'Europe',
        address: {
          '@type':         'PostalAddress',
          addressLocality: 'Lanzarote',
          addressRegion:   'Islas Canarias',
          addressCountry:  'ES',
        },
      },
      {
        '@type':     'WebSite',
        '@id':       `${baseUrl}/#website`,
        url:         baseUrl,
        name:        'AdAntar',
        publisher:   { '@id': `${baseUrl}/#organization` },
        inLanguage:  [locale === 'es' ? 'es-ES' : 'en-EN'],
      },
    ],
  }

  return (
    <html lang={locale} className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-basalto text-white font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
