import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title:       'Contacto',
  description: 'Inicia una conversación con AdAntar. Hemos trabajado con los mejores equipos directivos. Si estás buscando algo más que una actividad de empresa, hablemos.',
}

export default function ContactoPage({
  searchParams,
}: {
  searchParams: { experiencia?: string }
}) {
  const experiencia = searchParams.experiencia

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="py-20 border-b border-white/10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">
            Contacto
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-xl">
            {experiencia
              ? 'Hablemos.'
              : 'Si estás buscando algo más que una actividad de empresa, hablemos.'}
          </h1>
          {experiencia ? (
            <p className="mt-4 text-white/50 max-w-md leading-relaxed">
              Nos has contactado sobre{' '}
              <span className="text-white">{experiencia}</span>.
              Cuéntanos más sobre lo que necesitas.
            </p>
          ) : (
            <p className="mt-4 text-white/50 max-w-md leading-relaxed">
              Esta es la primera conversación de algo que puede cambiar tu forma
              de operar. Sin formatos cerrados. Sin precios de catálogo.
            </p>
          )}
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
