import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title:       'Sobre AdAntar',
  description: 'La primera plataforma europea de performance integral: físico, mental y organizacional inspirada en metodologías deportivas de élite.',
}

export default function SobreAdantarPage() {
  return (
    <div className="pt-16 min-h-screen">

      {/* ── Hero a sangre ── */}
      <section className="relative min-h-[85vh] flex flex-col justify-end">
        <div className="absolute inset-0">
          <Image
            src="/images/image9.jpeg"
            alt="Roca volcánica — AdAntar"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-basalto via-basalto/60 to-basalto/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-20">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">
            Sobre AdAntar
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] leading-[0.95] max-w-4xl">
            Esto no se trata
            <br />de lo que vienes a hacer.
            <br />
            <em>Sino de aquello que eres
            <br />al irte.</em>
          </h1>
        </div>
      </section>

      {/* ── El nombre ── */}
      <section className="grid lg:grid-cols-2 border-t border-white/10">
        <div className="px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">El nombre</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Ad · Antar.
            <br />
            <em>Al interior.</em>
          </h2>
          <div className="text-white/55 leading-relaxed space-y-5 max-w-lg">
            <p>
              La unión del latín <em className="text-white/80">ad</em> —hacia— y el
              sánscrito <em className="text-white/80">antar</em> —interior, adentro—
              significa &ldquo;al interior, hacia adentro&rdquo;.
            </p>
            <p>
              AdAntar habla de cómo en los retiros corporativos, deportivos y
              espirituales el mejor trabajo no se hace para los demás, para demostrar
              o competir, sino para uno mismo: para conocerse y mejorar, y para
              volverse alguien más consciente, más presente, más conectado.
            </p>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/images/lanzarote-01.png"
            alt="Ciclistas frente al paisaje volcánico de Lanzarote"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── El volcán ── */}
      <section className="grid lg:grid-cols-2 border-t border-white/10">
        <div className="relative min-h-[500px] order-2 lg:order-1">
          <Image
            src="/images/lanzarote-02.png"
            alt="Ascenso al volcán de Lanzarote"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 lg:order-2 px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">El origen</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
            El volcán.
          </h2>
          <div className="text-white/55 leading-relaxed space-y-5 max-w-lg">
            <p>
              Un volcán es una herida abierta en el lomo del mundo. Una grieta por donde
              el planeta respira, grita y recuerda que sigue vivo.
            </p>
            <p>
              Es el fuego que no pidió permiso para salir. La memoria líquida del núcleo
              que sube a contarte de dónde venimos: del calor, de la presión, de la
              oscuridad hecha forma.
            </p>
            <p>
              Destruye. Pero también crea. Tierra nueva. Isla donde había océano.
              Suelo donde no lo había.
            </p>
            <p>
              El volcán es el recordatorio de que la transformación más radical —esa
              que deja marca— nace siempre de una ruptura. Y de que dentro de todo lo
              que parece sólido y quieto, algo hierve.
            </p>
          </div>
        </div>
      </section>

      {/* ── Manifiesto — texto sobre imagen ── */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/image5.jpeg"
            alt="Textura natural"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-basalto/82" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-12">Manifiesto</p>
          <div className="max-w-3xl space-y-6 text-white/75 leading-relaxed text-lg">
            <p>
              No todos viajamos para descansar. Hay personas que viajamos para
              descubrirnos. Que elegimos el viento en contra, la pendiente que duele,
              el frío que aclara. Que no entendemos el ocio sin propósito, ni el lujo
              sin exigencia. Que regresamos de cada viaje distintas. Más brillantes,
              más conectadas, más vivas, pues eso es exactamente lo que fuimos a buscar.
              Para esas personas no había un lugar en Europa. Hasta ahora.
            </p>
            <p>
              En AdAntar hemos visitado los sitios, entrenado con los mejores, probado
              lo que vale y descartado lo que no. Conocemos los destinos únicos del sur
              de Europa desde adentro, sus rutas, sus villas, sus aguas, sus
              entrenadores. Y hemos construido un lugar para todo ello.
            </p>
            <p>
              AdAntar es más que un catálogo. Es el arte de la selección, la atención
              y el cuidado. Detrás de cada experiencia que te ofrecemos hay cientos de
              horas de viajes, entrenamientos y conversaciones con los mejores. Hay
              alguien que conoce este mundo desde adentro y que ha decidido que esto
              vale la pena.
            </p>
            <p className="text-white font-serif text-2xl md:text-3xl leading-tight pt-4">
              Por fin un lugar en Europa a la altura de tus estándares.
              <br />
              <em>AdAntar. Transformative. Transcending.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── Cuatro pilares ── */}
      <section className="border-t border-white/10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-4">Lo que somos</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16">
            Cuatro pilares.
            <br />
            <em>Una sola promesa.</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              {
                label: 'Sports',
                title: 'Reto / Esfuerzo',
                body: 'La exigencia no es un obstáculo: es parte del valor. Sin trabajo no hay transformación. El esfuerzo dirigido no agota, revela.',
              },
              {
                label: 'Experiences',
                title: 'Evolución / Cambio',
                body: 'Aquí no solo descansas. Sales siendo alguien mejor. Lo produce la experiencia curada que activa algo que ningún otro entorno había conseguido activar.',
              },
              {
                label: 'Travel',
                title: 'Curaduría / Selección',
                body: 'Antes de que llegues, ya hemos estado ahí. Hemos probado, descartado y elegido. En AdAntar encuentras para no tener que buscar.',
              },
              {
                label: 'Hospitality',
                title: 'Servicio / Atención',
                body: 'Un buen servicio no impresiona, anticipa. Sabe lo que necesitas antes de pedirlo. La forma más elevada de hospitalidad: la que genera fidelidad real.',
              },
            ].map((p) => (
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
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-8">Propósito de marca</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            Crear las condiciones para que las personas puedan llegar más lejos
            de lo que creían posible, a través de un esfuerzo transformador.
          </h2>
        </div>
      </section>

      {/* ── Principios ── */}
      <section className="border-t border-white/10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-12">Lo que no es negociable</p>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {[
              {
                n: 'I',
                title: 'El retiro no vende la marca. El retiro es la marca.',
                body: 'Cada experiencia es la promesa en acto, no su ilustración. El error sería tratarla como canal de marketing.',
              },
              {
                n: 'II',
                title: 'La exclusividad no viene del precio.',
                body: 'Viene del estándar. De lo que se exige y de lo que se promete a cambio. Suavizar la propuesta para ampliar el embudo sería el mayor error estratégico.',
              },
              {
                n: 'III',
                title: 'La comunidad no se compra.',
                body: 'Se construye por prescripción. El entrenador trae al entrenado. El atleta, al ejecutivo. Una comunidad genuina vale más que cualquier campaña de adquisición.',
              },
              {
                n: 'IV',
                title: 'El destino no es un escenario.',
                body: 'Es el argumento. El entorno condiciona lo que la persona es capaz de hacer y de pensar. Elegir bien el lugar no es logístico: es estratégico.',
              },
            ].map((p) => (
              <div key={p.n} className="bg-basalto p-8 space-y-3">
                <p className="text-[9px] tracking-widest uppercase text-arena">{p.n}</p>
                <h3 className="font-serif text-xl leading-tight">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── El modelo ── */}
      <section className="border-t border-white/10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-arena mb-6">El modelo</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Una plataforma.
              <br />
              <em>Múltiples territorios.</em>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-white/55 leading-relaxed">
              AdAntar arranca en Lanzarote. Territorio fundacional y primer estándar
              de referencia, pero está construida para expandirse a otros destinos de
              alto nivel en el sur de Europa. La marca, el criterio y el estándar son
              propios. Los territorios se suman.
            </p>
            <div className="grid grid-cols-3 gap-6 text-sm border-t border-white/10 pt-8">
              {[
                { n: '01', place: 'Lanzarote', desc: 'Territorio fundacional' },
                { n: '02', place: 'Sur de Europa', desc: 'Toscana · Algarve · Costa Amalfitana' },
                { n: '03', place: 'Continental', desc: 'Los mejores destinos bajo un mismo criterio' },
              ].map((t) => (
                <div key={t.n}>
                  <p className="text-[9px] tracking-widest uppercase text-arena mb-2">{t.n}</p>
                  <p className="text-white font-medium mb-1">{t.place}</p>
                  <p className="text-white/40 text-xs">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — yoga al amanecer ── */}
      <section className="relative min-h-[60vh] flex items-center border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/lanzarote-04.png"
            alt="Yoga al amanecer en Lanzarote"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-basalto/65" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            ¿Sientes
            <br />
            <em>la llamada?</em>
          </h2>
          <p className="text-white/45 text-sm mb-12 max-w-sm mx-auto leading-relaxed">
            Cada experiencia comienza con una conversación.
          </p>
          <Link
            href="/contacto"
            className="inline-block text-[11px] tracking-widest uppercase border border-arena text-arena px-10 py-5 hover:bg-arena hover:text-basalto transition-all duration-300"
          >
            Hablar con AdAntar →
          </Link>
        </div>
      </section>

    </div>
  )
}
