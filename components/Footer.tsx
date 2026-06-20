import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export default async function Footer({ locale }: { locale: string }) {
  const t      = await getTranslations('footer')
  const prefix = locale === 'en' ? '' : `/${locale}`

  return (
    <footer className="border-t border-white/10 bg-basalto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="AdAntar"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-10 text-[11px] tracking-widest uppercase">
            <Link href={`${prefix}/experiencias`}  className="text-white/50 hover:text-white transition-colors">Experiences</Link>
            <Link href={`${prefix}/sobre-adantar`} className="text-white/50 hover:text-white transition-colors">About</Link>
            <Link href={`${prefix}/contacto`}      className="text-white/50 hover:text-white transition-colors">{t('contact')}</Link>
            <a href="mailto:info@adantar.com" className="text-arena hover:opacity-75 transition-opacity">
              info@adantar.com
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] text-white/25">
          <p>© {new Date().getFullYear()} AdAntar. {t('rights')}</p>
          <p>Lanzarote, Islas Canarias</p>
        </div>
      </div>
    </footer>
  )
}
