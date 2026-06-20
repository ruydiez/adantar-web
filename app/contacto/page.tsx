import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title:       'Contacto',
  description: 'Inicia una conversación con AdAntar. Hemos trabajado con los mejores equipos directivos. Si estás buscando algo más que una actividad de empresa, hablemos.',
}

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ experiencia?: string }>
}) {
  const { experiencia } = await searchParams

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="py-20 border-b border-white/10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">
            Contacto
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-xl">
            La conversación
            <br />
            <em>empieza aquí.</em>
          </h1>
          <p className="mt-6 text-white/50 max-w-md leading-relaxed">
            {experiencia
              ? <>Nos has contactado sobre <span className="text-white">{experiencia}</span>. Cuéntanos qué buscas lograr. Nosotros diseñamos el resto.</>
              : 'Cuéntanos qué buscas lograr. Nosotros diseñamos el resto.'}
          </p>
        </div>

        {/* Form */}
        <div className="py-16 max-w-2xl">
          <ContactForm subject={experiencia} />
        </div>

        {/* Direct contact */}
        <div className="pb-16 border-t border-white/10 pt-8 text-[13px] text-white/35">
          <p>
            O escríbenos directamente:{' '}
            <a
              href="mailto:info@adantar.com"
              className="text-arena hover:underline"
            >
              info@adantar.com
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
