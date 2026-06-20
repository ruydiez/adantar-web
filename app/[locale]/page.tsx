import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { client } from '@/lib/sanity.client'
import { featuredExperiencesQuery } from '@/lib/sanity.queries'
import ExperienceCard from '@/components/ExperienceCard'

export const revalidate = 3600

async function getFeaturedExperiences() {
  try { return await client.fetch(featuredExperiencesQuery) } catch { return [] }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale }    = await params
  const t             = await getTranslations('home')
  const experiences   = await getFeaturedExperiences()
  const prefix        = locale === 'en' ? '' : `/${locale}`

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <div className="absolute inset-0">
          <Image src="/images/lanzarote-03.png" alt="Group at Lanzarote volcano at sunset" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-basalto via-basalto/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-24">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">{t('hero.eyebrow')}</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] leading-[0.95] tracking-tight max-w-3xl">
            {t('hero.h1_1')}<br />{t('hero.h1_2')}<br />
            <em>{t('hero.h1_3')}<br />{t('hero.h1_4')}</em>
          </h1>
          <div className="mt-14">
            <Link href={`${prefix}/experiencias`} className="inline-block text-[11px] tracking-widest uppercase border border-white/40 px-7 py-4 hover:border-arena hover:text-arena transition-all duration-300">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quiénes somos ── */}
      <section className="grid lg:grid-cols-2 border-t border-white/10">
        <div className="px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">{t('who.eyebrow')}</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            {t('who.h2_1')}<br />{t('who.h2_2')}<br /><em>{t('who.h2_3')}</em>
          </h2>
          <div className="text-white/55 leading-relaxed space-y-4 max-w-lg">
            <p>{t('who.p1')}</p>
            <p>{t('who.p2')}</p>
          </div>
          <div className="mt-10">
            <Link href={`${prefix}/sobre-adantar`} className="text-[11px] tracking-widest uppercase text-arena hover:underline">
              {t('who.cta')}
            </Link>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image src="/images/image5.jpeg" alt="Natural texture — AdAntar identity" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>

      {/* ── Tres tipos ── */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-4">{t('products.eyebrow')}</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16">
            {t('products.h2_1')}<br /><em>{t('products.h2_2')}</em>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 border-t border-white/10">
          {([
            { key: 'corp', img: '/images/image10.png', href: `${prefix}/contacto` },
            { key: 'mind', img: '/images/image11.jpeg', href: `${prefix}/experiencias` },
            { key: 'niche', img: '/images/image13.png', href: `${prefix}/contacto` },
          ] as const).map(({ key, img, href }, i) => (
            <article key={key} className={`${i < 2 ? 'border-r border-white/10' : ''} flex flex-col`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={img} alt={t(`products.${key}.title`)} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-basalto/25" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[9px] tracking-[0.25em] uppercase text-arena mb-4">{['I','II','III'][i]}</p>
                <h3 className="font-serif text-2xl leading-tight mb-4">{t(`products.${key}.title`)}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{t(`products.${key}.desc`)}</p>
                <div className="text-[10px] text-white/30 space-y-1 mb-6">
                  {(t.raw(`products.${key}.items`) as string[]).map((item: string) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
                <Link href={href} className="self-start text-[11px] tracking-widest uppercase border border-white/25 px-5 py-3 hover:border-arena hover:text-arena transition-all duration-200">
                  {t(`products.${key}.cta`)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Experiencias Sanity ── */}
      {experiences.length > 0 && (
        <section className="py-24 px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-3xl md:text-4xl">
                {t('sanity.h2')}<br /><em>{t('sanity.h2_em')}</em>
              </h2>
              <Link href={`${prefix}/experiencias`} className="text-[11px] tracking-widest uppercase text-white/40 hover:text-arena transition-colors hidden md:block">
                {t('sanity.viewAll')}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {experiences.map((exp: any) => (
                <div key={exp._id} className="bg-basalto"><ExperienceCard exp={exp} /></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Propósito ── */}
      <section className="relative min-h-[70vh] flex items-center border-t border-white/10">
        <div className="absolute inset-0">
          <Image src="/images/image6.jpeg" alt="Basalto — AdAntar territory" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-basalto/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">{t('purpose.eyebrow')}</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
            {t('purpose.h2_1')}<br />{t('purpose.h2_2')}<br />{t('purpose.h2_3')}<br />
            <em>{t('purpose.h2_4')}</em>
          </h2>
          <p className="mt-8 text-white/50 max-w-md leading-relaxed">{t('purpose.p')}</p>
        </div>
      </section>

      {/* ── Para quién ── */}
      <section className="border-t border-white/10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-4">{t('forWhom.eyebrow')}</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16">
            {t('forWhom.h2_1')}<br /><em>{t('forWhom.h2_2')}<br />{t('forWhom.h2_3')}</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {(t.raw('forWhom.profiles') as any[]).map((p: any) => (
              <div key={p.tag} className="bg-basalto p-8 space-y-4">
                <p className="text-[9px] tracking-[0.2em] uppercase text-arena">{p.tag}</p>
                <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative min-h-[60vh] flex items-center border-t border-white/10">
        <div className="absolute inset-0">
          <Image src="/images/image21.jpeg" alt="Dark water — AdAntar" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-basalto/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            {t('cta.h2_1')}<br /><em>{t('cta.h2_2')}<br />{t('cta.h2_3')}</em>
          </h2>
          <Link href={`${prefix}/contacto`} className="inline-block text-[11px] tracking-widest uppercase border border-arena text-arena px-10 py-5 hover:bg-arena hover:text-basalto transition-all duration-300">
            {t('cta.cta')}
          </Link>
        </div>
      </section>
    </>
  )
}
