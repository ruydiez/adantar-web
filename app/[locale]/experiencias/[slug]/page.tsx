import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity.client'
import { experienceBySlugQuery, allSlugsQuery } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allSlugsQuery)
    return ['en', 'es'].flatMap(locale =>
      slugs.map(({ slug }) => ({ locale, slug }))
    )
  } catch { return [] }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  try {
    const { slug } = await params
    const exp = await client.fetch(experienceBySlugQuery, { slug })
    if (!exp) return {}
    return { title: exp.title, description: exp.shortDescription }
  } catch { return {} }
}

const portableComponents = {
  block: {
    h2:     ({ children }: any) => <h2 className="font-serif text-3xl mt-12 mb-4">{children}</h2>,
    h3:     ({ children }: any) => <h3 className="font-serif text-2xl mt-8 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="text-white/65 leading-relaxed mb-5">{children}</p>,
  },
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const prefix           = locale === 'en' ? '' : `/${locale}`

  let exp: any
  try {
    exp = await client.fetch(experienceBySlugQuery, { slug })
  } catch { notFound() }
  if (!exp) notFound()

  const imageUrl = exp.mainImage ? urlForImage(exp.mainImage).width(1600).height(900).url() : null
  const isEs     = locale === 'es'

  const meta = [
    exp.duration    && { label: isEs ? 'Duración'  : 'Duration',    value: exp.duration },
    exp.capacity    && { label: isEs ? 'Capacidad' : 'Capacity',    value: exp.capacity },
    exp.destination && { label: isEs ? 'Destino'   : 'Destination', value: exp.destination },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <div className="pt-16 min-h-screen">
      {imageUrl && (
        <div className="relative h-[55vh] md:h-[65vh]">
          <Image src={imageUrl} alt={exp.mainImage?.alt || exp.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-basalto via-basalto/20 to-transparent" />
        </div>
      )}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-5">{exp.vertical}</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">{exp.title}</h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{exp.shortDescription}</p>

        {meta.length > 0 && (
          <div className="flex flex-wrap gap-10 mt-10 pt-10 border-t border-white/10">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] tracking-widest uppercase text-white/30 mb-1">{label}</p>
                <p className="text-sm text-white">{value}</p>
              </div>
            ))}
          </div>
        )}

        {exp.longDescription && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <PortableText value={exp.longDescription} components={portableComponents} />
          </div>
        )}

        <div className="mt-16 pt-12 border-t border-white/10">
          <h2 className="font-serif text-3xl mb-4">
            {isEs ? '¿Esta experiencia es para ti?' : 'Is this experience for you?'}
          </h2>
          <p className="text-white/45 text-sm mb-8 leading-relaxed max-w-md">
            {isEs
              ? 'Todas nuestras experiencias se diseñan a medida.'
              : 'All our experiences are designed to order.'}
          </p>
          <Link
            href={`${prefix}/contacto?experiencia=${encodeURIComponent(exp.title)}`}
            className="inline-block text-[11px] tracking-widest uppercase border border-arena text-arena px-8 py-4 hover:bg-arena hover:text-basalto transition-all duration-300"
          >
            {isEs ? 'Solicitar información →' : 'Request information →'}
          </Link>
        </div>

        <div className="mt-12">
          <Link href={`${prefix}/experiencias`} className="text-[11px] tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors">
            {isEs ? '← Volver al catálogo' : '← Back to catalogue'}
          </Link>
        </div>
      </div>
    </div>
  )
}
