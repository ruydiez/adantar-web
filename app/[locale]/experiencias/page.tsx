import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { client } from '@/lib/sanity.client'
import { experiencesQuery, verticalsQuery } from '@/lib/sanity.queries'
import ExperiencesCatalog from '@/app/experiencias/ExperiencesCatalog'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'experiences' })
  return {
    title:       locale === 'es' ? 'Experiencias' : 'Experiences',
    description: t('p'),
  }
}

async function getData() {
  try {
    const [experiences, verticals] = await Promise.all([
      client.fetch(experiencesQuery),
      client.fetch(verticalsQuery),
    ])
    return { experiences: experiences ?? [], verticals: verticals ?? [] }
  } catch {
    return { experiences: [], verticals: [] }
  }
}

export default async function ExperienciasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale }              = await params
  const t                       = await getTranslations('experiences')
  const { experiences, verticals } = await getData()

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="pt-28 pb-20 border-b border-white/10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">{t('eyebrow')}</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight max-w-2xl">
            {t('h1_1')}<br /><em>{t('h1_2')}<br />{t('h1_3')}</em>
          </h1>
          <p className="mt-6 text-white/50 max-w-lg leading-relaxed">{t('p')}</p>
        </div>
      </div>
      <ExperiencesCatalog experiences={experiences} verticals={verticals} />
    </div>
  )
}
