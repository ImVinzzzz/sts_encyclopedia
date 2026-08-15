import SpeciesMiniCard from './SpeciesMiniCard'
import type { Species } from '../types/species'

interface SpeciesGridProps {
  species: Species[]
  onExpand: (id: string) => void
}

export default function SpeciesGrid({ species, onExpand }: SpeciesGridProps) {
  if (species.length === 0) {
    return (
      <div className="rounded-2xl border border-lcars-alert/40 bg-void-900/60 px-6 py-10 text-center">
        <p className="lcars-heading text-lcars-alert">Nessuna corrispondenza nei registri</p>
        <p className="mt-2 font-condensed text-slate-400">
          Prova a modificare la ricerca o a disattivare qualche filtro attivo.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {species.map((s) => (
        <SpeciesMiniCard key={s.id} species={s} onExpand={onExpand} />
      ))}
    </div>
  )
}
