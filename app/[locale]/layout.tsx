import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const baseUrl = 'https://adantar.vercel.app'

const copy = {
  en: {
    title:       'AdAntar — Transformative. Transcending.',
    description: 'The definitive selection of mind & body experiences. Where world-class hospitality and elite training meet. Lanzarote, Europe.',
    ogAlt:       'AdAntar — High performance experiences in Lanzarote',
  },
  es: {
    title:       'AdAntar — Transformative. Transcending.',
    description: 'La selección definitiva de experiencias mind & body. Donde la hospitalidad de alto nivel y el entrenamiento de élite se encuentran. Lanzarote, Europa.',
    ogAlt:       'AdAntar — Experiencias de alto rendimiento en Lanzarote',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = copy[locale as 'en' | 'es'] ?? copy.en
  const canonical = locale === 'en' ? baseUrl : `${baseUrl}/es`

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:  c.title,
      template: '%s | AdAntar',
    },
    description: c.description,
    keywords: [
      'corporate retreats Lanzarote', 'high performance experiences',
      'sports retreats Spain', 'mind body retreats Europe',
      'team building Canary Islands', 'wellness luxury Lanzarote',
      'retiros corporativos Lanzarote', 'experiencias alto rendimiento',
      'AdAntar',
    ],
    authors:   [{ name: 'AdAntar', url: baseUrl }],
    creator:   'AdAntar',
    publisher: 'AdAntar',
    robots: {
      index:  true,
      follow: true,
      googleBot: {
        index:               true,
        follow:              true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet':       -1,
      },
    },
    openGraph: {
      title:       c.title,
      description: c.description,
      type:        'website',
      url:         canonical,
      siteName:    'AdAntar',
      locale:      locale === 'es' ? 'es_ES' : 'en_US',
      images: [{
        url:    '/images/lanzarote-03.png',
        width:  1200,
        height: 630,
        alt:    c.ogAlt,
      }],
    },
    twitter: {
      card:        'summary_large_image',
      title:       c.title,
      description: c.description,
      images:      ['/images/lanzarote-03.png'],
    },
    alternates: {
      canonical,
      languages: {
        'en': baseUrl,
        'es': `${baseUrl}/es`,
      },
    },
  }
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
  const isEs     = locale === 'es'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':      'Organization',
        '@id':        `${baseUrl}/#organization`,
        name:         'AdAntar',
        url:          baseUrl,
        logo:         `${baseUrl}/images/logo-white.png`,
        description:  isEs
          ? 'La selección definitiva de experiencias mind & body en Europa. Hospitalidad de alto nivel y entrenamiento de élite.'
          : 'The definitive selection of mind & body experiences in Europe. World-class hospitality and elite training.',
        email:        'info@adantar.com',
        foundingDate: '2026',
        areaServed:   'Europe',
        address: {
          '@type':         'PostalAddress',
          addressLocality: 'Lanzarote',
          addressRegion:   'Islas Canarias',
          addressCountry:  'ES',
        },
        sameAs: [],
      },
      {
        '@type':    'WebSite',
        '@id':      `${baseUrl}/#website`,
        url:        baseUrl,
        name:       'AdAntar',
        publisher:  { '@id': `${baseUrl}/#organization` },
        inLanguage: isEs ? 'es-ES' : 'en-US',
      },
      {
        '@type':    'TouristDestination',
        '@id':      `${baseUrl}/#destination`,
        name:       'Lanzarote',
        description: isEs
          ? 'Territorio fundacional de AdAntar. Paisaje volcánico único en Europa para experiencias transformadoras de alto nivel.'
          : 'AdAntar\'s founding territory. A unique volcanic landscape in Europe for high-level transformative experiences.',
        touristType: ['ActiveTourist', 'SportsTourist', 'CorporateTraveler'],
        containedInPlace: { '@type': 'Country', name: isEs ? 'España' : 'Spain' },
      },
      {
        '@type':    'FAQPage',
        '@id':      `${baseUrl}/#faq`,
        mainEntity: isEs ? [
          {
            '@type':          'Question',
            name:             '¿Qué es AdAntar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'AdAntar es la primera plataforma europea de selección de experiencias mind & body de alto nivel. Reunimos hospitalidad premium y entrenamiento de élite en los mejores destinos del sur de Europa, empezando por Lanzarote.',
            },
          },
          {
            '@type':          'Question',
            name:             '¿Qué tipo de experiencias ofrece AdAntar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'AdAntar ofrece tres tipos de experiencias: Corporativas (offsites, kick-offs, workshops para empresas), Mente y Cuerpo (camps de entrenamiento, retiros, programas de longevidad) y Nicho (deep dives temáticos en buceo, astronomía, gastronomía).',
            },
          },
          {
            '@type':          'Question',
            name:             '¿Dónde opera AdAntar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'AdAntar opera desde Lanzarote, Islas Canarias, como territorio fundacional. La plataforma está en expansión hacia otros destinos de alto nivel en el sur de Europa: Toscana, Algarve y Costa Amalfitana.',
            },
          },
          {
            '@type':          'Question',
            name:             '¿Para quién son las experiencias de AdAntar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'Para viajeros activos que no entienden el ocio sin propósito, competidores de alto nivel (triatletas, ciclistas, trail runners) y equipos directivos que buscan algo más que un offsite estándar.',
            },
          },
          {
            '@type':          'Question',
            name:             '¿Cómo se contrata una experiencia AdAntar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'Todas las experiencias AdAntar se diseñan a medida. El proceso comienza con una conversación: a través del formulario de contacto o escribiendo a info@adantar.com.',
            },
          },
        ] : [
          {
            '@type':          'Question',
            name:             'What is AdAntar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'AdAntar is Europe\'s first curated platform for high-level mind & body experiences. We bring together premium hospitality and elite training in the finest destinations of southern Europe, starting in Lanzarote.',
            },
          },
          {
            '@type':          'Question',
            name:             'What types of experiences does AdAntar offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'AdAntar offers three types of experiences: Corporate (offsites, kick-offs, leadership workshops), Mind & Body (training camps, retreats, longevity programmes) and Niche (thematic deep dives in diving, astronomy, gastronomy).',
            },
          },
          {
            '@type':          'Question',
            name:             'Where does AdAntar operate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'AdAntar operates from Lanzarote, Canary Islands, as its founding territory. The platform is expanding to other high-level destinations in southern Europe: Tuscany, Algarve and the Amalfi Coast.',
            },
          },
          {
            '@type':          'Question',
            name:             'Who are AdAntar experiences for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'For active travellers who don\'t understand leisure without purpose, high-level competitors (triathletes, cyclists, trail runners) and executive teams looking for something beyond a standard corporate offsite.',
            },
          },
          {
            '@type':          'Question',
            name:             'How do I book an AdAntar experience?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:    'All AdAntar experiences are designed to order. The process begins with a conversation: through the contact form or by writing to info@adantar.com.',
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-basalto text-white font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
