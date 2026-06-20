'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Nav({ locale }: { locale: string }) {
  const t        = useTranslations('nav')
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()
  const router                  = useRouter()

  const prefix = locale === 'en' ? '' : `/${locale}`
  const links = [
    { href: `${prefix}/experiencias`, label: t('experiences') },
    { href: `${prefix}/sobre-adantar`, label: t('about') },
    { href: `${prefix}/contacto`, label: t('contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  function switchLocale() {
    const next = locale === 'en' ? 'es' : 'en'
    const withoutLocale = pathname
      .replace(/^\/es/, '')
      .replace(/^\/en/, '') || '/'
    router.push(next === 'en' ? withoutLocale : `/es${withoutLocale}`)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-basalto border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href={`${prefix}/`} className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="AdAntar"
            width={140}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                  pathname.startsWith(href)
                    ? 'text-arena'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={switchLocale}
              className="text-[11px] tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-200 border border-white/20 px-3 py-1"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`block w-5 h-px bg-white origin-center transition-transform duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white origin-center transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-72 border-t border-white/10' : 'max-h-0'
        } bg-basalto`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-widest uppercase ${
                  pathname.startsWith(href) ? 'text-arena' : 'text-white/70'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={switchLocale}
              className="text-sm tracking-widest uppercase text-white/40"
            >
              {locale === 'en' ? 'Español' : 'English'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
