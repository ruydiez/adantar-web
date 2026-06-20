import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ContactForm from '@/components/ContactForm'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title:       locale === 'es' ? 'Contacto' : 'Contact',
    description: locale === 'es'
      ? 'Cuéntanos qué buscas lograr. Nosotros diseñamos el resto.'
      : 'Tell us what you want to achieve. We design the rest.',
  }
}

export default async function ContactoPage({
  params,
  searchParams,
}: {
  params:       Promise<{ locale: string }>
  searchParams: Promise<{ experiencia?: string }>
}) {
  const { locale }    = await params
  const { experiencia } = await searchParams
  const t             = await getTranslations('contact')

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="pt-28 pb-20 border-b border-white/10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">{t('eyebrow')}</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-xl">
            {t('h1_1')}<br /><em>{t('h1_2')}</em>
          </h1>
          <p className="mt-6 text-white/50 max-w-md leading-relaxed">
            {experiencia
              ? <>{t('p_with_exp', { experience: '' })}<span className="text-white">{experiencia}</span>. {locale === 'es' ? 'Cuéntanos qué buscas lograr. Nosotros diseñamos el resto.' : 'Tell us what you want to achieve. We design the rest.'}</>
              : t('p')}
          </p>
        </div>

        <div className="py-16 max-w-2xl">
          <ContactForm subject={experiencia} />
        </div>

        <div className="pb-16 border-t border-white/10 pt-8 text-[13px] text-white/35">
          <p>
            {t('direct')}{' '}
            <a href="mailto:info@adantar.com" className="text-arena hover:underline">
              info@adantar.com
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
