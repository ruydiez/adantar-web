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

export const metadata: Metadata = {
  title: {
    default:  'AdAntar — Transformative. Transcending.',
    template: '%s | AdAntar',
  },
  description:
    'Experiencias de alto rendimiento en Lanzarote. Diseñadas para transformar.',
  openGraph: {
    title:       'AdAntar',
    description: 'Experiencias de alto rendimiento en Lanzarote.',
    type:        'website',
    locale:      'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-basalto text-white font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
