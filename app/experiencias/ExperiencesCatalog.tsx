'use client'

import { useState } from 'react'
import ExperienceCard from '@/components/ExperienceCard'
import VerticalFilter from '@/components/VerticalFilter'

interface Props {
  experiences: any[]
  verticals:   string[]
}

export default function ExperiencesCatalog({ experiences, verticals }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = selected
    ? experiences.filter((e) => e.vertical === selected)
    : experiences

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {verticals.length > 1 && (
        <div className="mb-10">
          <VerticalFilter
            verticals={verticals}
            selected={selected}
            onChange={setSelected}
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-white/35 py-24 text-center text-sm tracking-wide">
          No hay experiencias en esta vertical todavía.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {filtered.map((exp: any) => (
            <div key={exp._id} className="bg-basalto">
              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
