import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-basalto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-serif text-2xl tracking-[0.18em] uppercase">AdAntar</p>
            <p className="mt-2 text-[10px] tracking-widest uppercase text-white/30">
              Transformative. Transcending.
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-10 text-[11px] tracking-widest uppercase">
            <Link href="/experiencias"  className="text-white/50 hover:text-white transition-colors">Experiencias</Link>
            <Link href="/sobre-adantar" className="text-white/50 hover:text-white transition-colors">Sobre AdAntar</Link>
            <Link href="/contacto"      className="text-white/50 hover:text-white transition-colors">Contacto</Link>
            <a
              href="mailto:info@adantar.com"
              className="text-arena hover:opacity-75 transition-opacity"
            >
              info@adantar.com
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] text-white/25">
          <p>© {new Date().getFullYear()} AdAntar. Todos los derechos reservados.</p>
          <p>Lanzarote, Islas Canarias</p>
        </div>
      </div>
    </footer>
  )
}
