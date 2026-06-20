import type { Metadata } from 'next'
import { client } from '@/lib/sanity.client'
import { experiencesQuery, verticalsQuery } from '@/lib/sanity.queries'
import ExperiencesCatalog from './ExperiencesCatalog'

export const revalidate = 3600

export const metadata: Metadata = {
  title:       'Experiencias',
  description: 'Running, kite surf, CrossFit, ciclismo, yoga, meditación y más. Catálogo de experiencias cuerpo y mente de alto nivel diseñadas por AdAntar en Lanzarote.',
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

export default async function ExperienciasPage() {
  const { experiences, verticals } = await getData()

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-20 border-b border-white/10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">
            Catálogo
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight max-w-2xl">
            Experiencias diseñadas
            <br />
            <em>para producir un antes
            <br />y un después.</em>
          </h1>
          <p className="mt-6 text-white/50 max-w-lg leading-relaxed">
            Cada experiencia en AdAntar está concebida junto a atletas y expertos que
            comparten nuestro nivel de exigencia. Probadas, perfeccionadas y listas
            para transformarte.
          </p>
        </div>
      </div>

      <ExperiencesCatalog experiences={experiences} verticals={verticals} />
    </div>
  )
}
