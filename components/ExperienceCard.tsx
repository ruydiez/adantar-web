import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity.image'

type Experience = {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  mainImage: { asset: any; alt?: string } | null
  vertical: string
  status: 'active' | 'coming_soon'
  duration?: string
  capacity?: string
  destination?: string
}

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const imageUrl = exp.mainImage
    ? urlForImage(exp.mainImage).width(800).height(600).url()
    : null

  const meta = [exp.duration, exp.capacity, exp.destination].filter(Boolean)

  return (
    <article className="group flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={exp.mainImage?.alt || exp.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-white/5" />
        )}

        {exp.status === 'coming_soon' && (
          <div className="absolute inset-0 bg-basalto/70 flex items-center justify-center">
            <span className="text-[10px] tracking-widest uppercase text-white/60 border border-white/20 px-4 py-2">
              Próximamente
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 border border-t-0 border-white/10">
        <p className="text-[10px] tracking-widest uppercase text-arena mb-3">
          {exp.vertical}
        </p>
        <h3 className="font-serif text-2xl leading-tight mb-3">{exp.title}</h3>
        <p className="text-sm text-white/55 leading-relaxed flex-1 mb-5">
          {exp.shortDescription}
        </p>

        {meta.length > 0 && (
          <p className="text-[11px] text-white/30 mb-5 tracking-wide">
            {meta.join(' · ')}
          </p>
        )}

        {exp.status === 'active' ? (
          <Link
            href={`/experiencias/${exp.slug.current}`}
            className="self-start text-[11px] tracking-widest uppercase border border-white/25 px-5 py-3 hover:border-arena hover:text-arena transition-all duration-200"
          >
            Ver experiencia →
          </Link>
        ) : (
          <Link
            href="/contacto"
            className="self-start text-[11px] tracking-widest uppercase border border-white/15 px-5 py-3 text-white/35 hover:border-white/40 hover:text-white/60 transition-all duration-200"
          >
            Registrar interés →
          </Link>
        )}
      </div>
    </article>
  )
}
