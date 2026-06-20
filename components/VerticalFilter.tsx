'use client'

interface VerticalFilterProps {
  verticals: string[]
  selected:  string | null
  onChange:  (vertical: string | null) => void
}

export default function VerticalFilter({ verticals, selected, onChange }: VerticalFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por vertical">
      <button
        onClick={() => onChange(null)}
        className={`text-[10px] tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
          selected === null
            ? 'border-arena text-arena'
            : 'border-white/20 text-white/45 hover:border-white/40 hover:text-white/70'
        }`}
      >
        Todas
      </button>

      {verticals.map((vertical) => (
        <button
          key={vertical}
          onClick={() => onChange(vertical === selected ? null : vertical)}
          className={`text-[10px] tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
            selected === vertical
              ? 'border-arena text-arena'
              : 'border-white/20 text-white/45 hover:border-white/40 hover:text-white/70'
          }`}
        >
          {vertical}
        </button>
      ))}
    </div>
  )
}
