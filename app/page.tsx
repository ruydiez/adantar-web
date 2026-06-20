import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { featuredExperiencesQuery } from '@/lib/sanity.queries'
import ExperienceCard from '@/components/ExperienceCard'

export const revalidate = 3600

async function getFeaturedExperiences() {
  try {
    return await client.fetch(featuredExperiencesQuery)
  } catch {
    return []
  }
}

export default async function HomePage() {
  const experiences = await getFeaturedExperiences()

  return (
    <>
      {/* ── Hero a sangre completa ── */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <div className="absolute inset-0">
          <Image
            src="/images/lanzarote-03.png"
            alt="Grupo en volcán de Lanzarote al atardecer"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-basalto via-basalto/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-24">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">
            Transformative. Transcending.
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] leading-[0.95] tracking-tight max-w-3xl">
            Lo que buscas
            <br />está adentro.
            <br />
            <em>Al otro lado
            <br />del esfuerzo.</em>
          </h1>
          <div className="mt-14">
            <Link
              href="/experiencias"
              className="inline-block text-[11px] tracking-widest uppercase border border-white/40 px-7 py-4 hover:border-arena hover:text-arena transition-all duration-300"
            >
              Explorar experiencias →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quiénes somos / Manifiesto ── */}
      <section className="grid lg:grid-cols-2 border-t border-white/10">
        {/* Texto */}
        <div className="px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">
            Quiénes somos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            La selección definitiva
            <br />de experiencias
            <br />
            <em>mind & body.</em>
          </h2>
          <div className="text-white/55 leading-relaxed space-y-4 max-w-lg">
            <p>
              El lugar donde la hospitalidad de alto nivel y el entrenamiento
              de élite se encuentran.
            </p>
            <p>
              Hay quienes viajamos para descubrirnos, para transformarnos, crecer
              o evolucionar. Para todos nosotros no había una plataforma.
              Hasta ahora.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/sobre-adantar"
              className="text-[11px] tracking-widest uppercase text-arena hover:underline"
            >
              Leer el manifiesto →
            </Link>
          </div>
        </div>

        {/* Imagen evocadora */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/images/image5.jpeg"
            alt="Textura natural — identidad AdAntar"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── Los tres productos ── */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-4">Lo que hacemos</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16">
            Tres tipos de experiencias.
            <br />
            <em>Un solo estándar.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 border-t border-white/10">
          {/* Corporativas */}
          <article className="border-r border-white/10 last:border-r-0 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/image10.png"
                alt="Experiencias Corporativas"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-basalto/30" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-[9px] tracking-[0.25em] uppercase text-arena mb-4">I</p>
              <h3 className="font-serif text-2xl leading-tight mb-4">
                Corporativas
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
                Para empresas que necesitan reunir, formar o transformar a sus equipos
                en un entorno que comunique sin tener que explicarlo. Lejos del offsite
                de hotel de carretera.
              </p>
              <div className="text-[10px] text-white/30 space-y-1 mb-6">
                <p>— Convenciones & Kick-Offs</p>
                <p>— Offsites de Dirección</p>
                <p>— Workshops & Formación</p>
                <p>— Incentivos & Reconocimiento</p>
              </div>
              <Link
                href="/contacto"
                className="self-start text-[11px] tracking-widest uppercase border border-white/25 px-5 py-3 hover:border-arena hover:text-arena transition-all duration-200"
              >
                Consultar →
              </Link>
            </div>
          </article>

          {/* Mente y Cuerpo */}
          <article className="border-r border-white/10 last:border-r-0 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/image11.jpeg"
                alt="Experiencias Mente y Cuerpo"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-basalto/20" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-[9px] tracking-[0.25em] uppercase text-arena mb-4">II</p>
              <h3 className="font-serif text-2xl leading-tight mb-4">
                Mente y Cuerpo
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
                Retiros donde el cuerpo y la mente se exigen a la vez. Para quien no
                entiende el viaje sin propósito. El esfuerzo no es un añadido: es el
                mecanismo de transformación.
              </p>
              <div className="text-[10px] text-white/30 space-y-1 mb-6">
                <p>— Camps de Entrenamiento</p>
                <p>— Retos Deportivos Firmados</p>
                <p>— Programas de Longevidad</p>
                <p>— Retiros a Medida</p>
              </div>
              <Link
                href="/experiencias"
                className="self-start text-[11px] tracking-widest uppercase border border-white/25 px-5 py-3 hover:border-arena hover:text-arena transition-all duration-200"
              >
                Ver experiencias →
              </Link>
            </div>
          </article>

          {/* Nicho */}
          <article className="flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/image13.png"
                alt="Experiencias Nicho — Lanzarote"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-basalto/20" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-[9px] tracking-[0.25em] uppercase text-arena mb-4">III</p>
              <h3 className="font-serif text-2xl leading-tight mb-4">
                Nicho
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
                Deep dives temáticos para comunidades con criterio propio. Pequeño
                formato, acceso limitado, expertos de primer nivel. Para el viajero
                exigente que no puede armarlo solo.
              </p>
              <div className="text-[10px] text-white/30 space-y-1 mb-6">
                <p>— Deep Dive · Buceo</p>
                <p>— Deep Dive · Vino & Malvasía</p>
                <p>— Deep Dive · Astronomía</p>
                <p>— Deep Dives a Medida</p>
              </div>
              <Link
                href="/contacto"
                className="self-start text-[11px] tracking-widest uppercase border border-white/25 px-5 py-3 hover:border-arena hover:text-arena transition-all duration-200"
              >
                Consultar →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ── Experiencias desde Sanity ── */}
      {experiences.length > 0 && (
        <section className="py-24 px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-3xl md:text-4xl">
                Experiencias
                <br />
                <em>disponibles</em>
              </h2>
              <Link
                href="/experiencias"
                className="text-[11px] tracking-widest uppercase text-white/40 hover:text-arena transition-colors hidden md:block"
              >
                Ver todas →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {experiences.map((exp: any) => (
                <div key={exp._id} className="bg-basalto">
                  <ExperienceCard exp={exp} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Propósito — imagen B&W a sangre con texto ── */}
      <section className="relative min-h-[70vh] flex items-center border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/image6.jpeg"
            alt="Basalto — territorio AdAntar"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-basalto/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">Propósito</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
            Crear las condiciones
            <br />para que las personas
            <br />puedan llegar más lejos
            <br />
            <em>de lo que creían posible.</em>
          </h2>
          <p className="mt-8 text-white/50 max-w-md leading-relaxed">
            No somos quienes transforman. Somos quienes crean las condiciones
            para que esa evolución ocurra. A través de un esfuerzo transformador.
          </p>
        </div>
      </section>

      {/* ── Para quién ── */}
      <section className="border-t border-white/10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-4">Para quién</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16">
            Para aquellos que
            <br />
            <em>no quieren buscar,
            <br />sino encontrar lo mejor.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                tag: 'A — B2C Principal',
                title: 'El viajero activo',
                body: 'Corre, pedalea, nada o hace yoga con seriedad. Necesita que el destino tenga sentido. No le mueve el precio: le mueve saber que alguien con criterio estuvo antes. Si lo puede encontrar en cualquier buscador, no le interesa.',
              },
              {
                tag: 'B — B2C Comunidad',
                title: 'El competidor de alto nivel',
                body: 'Triatleta, ciclista, trail runner. Amateur serio o semiprofesional. No busca experiencias bonitas: busca las mejores condiciones para hacer lo que hace. Lo que le cierra es la credencial.',
              },
              {
                tag: 'C — B2B Principal',
                title: 'El prescriptor corporativo',
                body: 'Director de Talento, L&D o Chief of Staff. Organiza retiros corporativos y quiere sorprender. Huye del offsite estándar. Raramente es el beneficiario, pero es quien decide, presupuesta y defiende internamente.',
              },
            ].map((p) => (
              <div key={p.tag} className="bg-basalto p-8 space-y-4">
                <p className="text-[9px] tracking-[0.2em] uppercase text-arena">{p.tag}</p>
                <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — imagen oscura a sangre ── */}
      <section className="relative min-h-[60vh] flex items-center border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/image21.jpeg"
            alt="Agua oscura — AdAntar"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-basalto/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Ya todo está preparado.
            <br />
            <em>El único trabajo
            <br />que te queda es llegar.</em>
          </h2>
          <Link
            href="/contacto"
            className="inline-block text-[11px] tracking-widest uppercase border border-arena text-arena px-10 py-5 hover:bg-arena hover:text-basalto transition-all duration-300"
          >
            Iniciar conversación →
          </Link>
        </div>
      </section>
    </>
  )
}
