import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
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
    'La primera plataforma europea de performance integral: físico, mental y organizacional. Experiencias de alto rendimiento diseñadas en Lanzarote.',
  keywords: [
    'retiros corporativos Lanzarote',
    'experiencias alto rendimiento',
    'retiros deportivos España',
    'corporate retreats Lanzarote',
    'mindfulness retiros Europa',
    'team building Canarias',
    'wellness luxury Lanzarote',
    'AdAntar',
  ],
  authors: [{ name: 'AdAntar', url: baseUrl }],
  creator: 'AdAntar',
  publisher: 'AdAntar',
  robots: {
    index:          true,
    follow:         true,
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
    description: 'La primera plataforma europea de performance integral: físico, mental y organizacional. Experiencias de alto rendimiento en Lanzarote.',
    type:        'website',
    locale:      'es_ES',
    url:         baseUrl,
    siteName:    'AdAntar',
    images: [
      {
        url:    '/images/lanzarote-03.png',
        width:  1200,
        height: 630,
        alt:    'AdAntar — Experiencias de alto rendimiento en Lanzarote',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'AdAntar — Transformative. Transcending.',
    description: 'La primera plataforma europea de performance integral en Lanzarote.',
    images:      ['/images/lanzarote-03.png'],
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':       'Organization',
        '@id':         `${baseUrl}/#organization`,
        name:          'AdAntar',
        url:           baseUrl,
        logo:          `${baseUrl}/images/image4.png`,
        description:   'La primera plataforma europea de performance integral: físico, mental y organizacional inspirada en metodologías deportivas de élite.',
        email:         'info@adantar.com',
        foundingDate:  '2026',
        areaServed:    'Europe',
        address: {
          '@type':           'PostalAddress',
          addressLocality:   'Lanzarote',
          addressRegion:     'Islas Canarias',
          addressCountry:    'ES',
        },
        sameAs: [],
      },
      {
        '@type':           'WebSite',
        '@id':             `${baseUrl}/#website`,
        url:               baseUrl,
        name:              'AdAntar',
        description:       'Experiencias de alto rendimiento en Lanzarote',
        publisher:         { '@id': `${baseUrl}/#organization` },
        inLanguage:        'es-ES',
        potentialAction: {
          '@type':       'SearchAction',
          target:        `${baseUrl}/experiencias?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type':          'TouristDestination',
        '@id':            `${baseUrl}/#destination`,
        name:             'Lanzarote',
        description:      'Territorio fundacional de AdAntar. Paisaje volcánico único en Europa para experiencias transformadoras.',
        touristType:      ['ActiveTourist', 'SportsTourist', 'CorporateTraveler'],
        containedInPlace: {
          '@type': 'Country',
          name:    'España',
        },
      },
    ],
  }

  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-basalto text-white font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
