import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title:       locale === 'es' ? 'Sobre AdAntar' : 'About AdAntar',
    description: t('purpose.h2'),
  }
}

export default async function SobreAdantarPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t          = await getTranslations('about')
  const prefix     = locale === 'en' ? '' : `/${locale}`

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image src="/images/image9.jpeg" alt="Volcanic rock — AdAntar" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-basalto via-basalto/60 to-basalto/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-40 pb-24">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">{t('hero.eyebrow')}</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] leading-[0.95] max-w-4xl">
            {t('hero.h1_1')}<br />{t('hero.h1_2')}<br />
            <em>{t('hero.h1_3')}<br />{t('hero.h1_4')}</em>
          </h1>
        </div>
      </section>

      {/* ── El nombre ── */}
      <section className="grid lg:grid-cols-2 border-t border-white/10">
        <div className="px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">{t('name.eyebrow')}</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            AdAntar.<br /><em>{t('name.h2_2')}</em>
          </h2>
          <div className="text-white/55 leading-relaxed space-y-5 max-w-lg">
            <p dangerouslySetInnerHTML={{ __html: t('name.p1') }} />
            <p>{t('name.p2')}</p>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image src="/images/lanzarote-01.png" alt="Cyclists in the volcanic landscape of Lanzarote" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>

      {/* ── El volcán ── */}
      <section className="grid lg:grid-cols-2 border-t border-white/10">
        <div className="relative min-h-[500px] order-2 lg:order-1">
          <Image src="/images/lanzarote-02.png" alt="Ascent to Lanzarote volcano" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="order-1 lg:order-2 px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">{t('volcano.eyebrow')}</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">{t('volcano.h2')}</h2>
          <div className="text-white/55 leading-relaxed space-y-5 max-w-lg">
            <p>{t('volcano.p1')}</p>
            <p>{t('volcano.p2')}</p>
            <p>{t('volcano.p3')}</p>
            <p>{t('volcano.p4')}</p>
          </div>
        </div>
      </section>

      {/* ── Manifiesto ── */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0">
          <Image src="/images/water-manifiesto.jpg" alt="Dark water — AdAntar manifesto" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-basalto/82" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-12">{t('manifesto.eyebrow')}</p>
          <div className="max-w-3xl space-y-6 text-white/75 leading-relaxed text-lg">
            <p>{t('manifesto.p1')}</p>
            <p>{t('manifesto.p2')}</p>
            <p>{t('manifesto.p3')}</p>
            <p className="text-white font-serif text-2xl md:text-3xl leading-tight pt-4">
              {t('manifesto.p4')}<br /><em>{t('manifesto.p4_em')}</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── Cuatro pilares ── */}
      <section className="border-t border-white/10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-4">{t('pillars.eyebrow')}</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16">
            {t('pillars.h2_1')}<br /><em>{t('pillars.h2_2')}</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {(t.raw('pillars.items') as any[]).map((p: any) => (
              <div key={p.label} className="bg-basalto p-8 space-y-4">
                <p className="text-[9px] tracking-[0.2em] uppercase text-arena">{p.label}</p>
                <h3 className="font-serif text-xl leading-tight">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Propósito ── */}
      <section className="border-t border-white/10 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">{t('purpose.eyebrow')}</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">{t('purpose.h2')}</h2>
        </div>
      </section>

      {/* ── El modelo ── */}
      <section className="border-t border-white/10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">{t('model.eyebrow')}</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              {t('model.h2_1')}<br /><em>{t('model.h2_2')}</em>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-white/55 leading-relaxed">{t('model.p')}</p>
            <div className="grid grid-cols-3 gap-6 text-sm border-t border-white/10 pt-8">
              {(t.raw('model.places') as any[]).map((place: any, i: number) => (
                <div key={place.n} className={i > 0 ? 'opacity-35' : ''}>
                  <p className="text-[9px] tracking-widest uppercase text-arena mb-2">{place.n}</p>
                  <p className="text-white font-medium mb-1">{place.place}</p>
                  <p className="text-white/40 text-xs">{place.desc}</p>
                  {i > 0 && (
                    <p className="text-[9px] tracking-widest uppercase text-white/30 mt-2">
                      {locale === 'es' ? 'Próximamente' : 'Coming soon'}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative min-h-[60vh] flex items-center border-t border-white/10">
        <div className="absolute inset-0">
          <Image src="/images/lanzarote-04.png" alt="Yoga at sunrise in Lanzarote" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-basalto/65" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            {t('cta.h2_1')}<br /><em>{t('cta.h2_2')}</em>
          </h2>
          <p className="text-white/45 text-sm mb-12 max-w-sm mx-auto leading-relaxed">{t('cta.p')}</p>
          <Link href={`${prefix}/contacto`} className="inline-block text-[11px] tracking-widest uppercase border border-arena text-arena px-10 py-5 hover:bg-arena hover:text-basalto transition-all duration-300">
            {t('cta.cta')}
          </Link>
        </div>
      </section>

    </>
  )
}
