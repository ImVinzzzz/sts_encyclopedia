import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'
import SpeciesPortrait from './SpeciesPortrait'
import SeriesBadge from './SeriesBadge'
import type { Species } from '../types/species'

interface SpeciesMiniCardProps {
  species: Species
  onExpand: (id: string) => void
  className?: string
}

export default function SpeciesMiniCard({ species, onExpand, className = '' }: SpeciesMiniCardProps) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl rounded-tr-[2rem] border border-lcars-orange/30 bg-void-900/70 transition-transform hover:-translate-y-1 hover:border-lcars-orange ${className}`}
    >
      <SpeciesPortrait
        name={species.name}
        classification={species.classification}
        image={species.image}
        className="h-32 w-full"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="lcars-heading text-lg leading-tight text-lcars-amber">{species.name}</h3>
        <p className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
          <FontAwesomeIcon icon={icons.globe} className="h-3 w-3 text-lcars-skyblue" />
          {species.homeworld}
        </p>
        <div className="flex flex-wrap gap-1">
          {species.series.slice(0, 4).map((tag) => (
            <SeriesBadge key={tag} tag={tag} />
          ))}
        </div>
        <button
          onClick={() => onExpand(species.id)}
          className="mt-auto flex items-center justify-center gap-2 rounded-full bg-lcars-orange py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-void-950 transition-colors hover:bg-lcars-amber"
        >
          <FontAwesomeIcon icon={icons.expand} className="h-3 w-3" />
          Espandi scheda
        </button>
      </div>
    </div>
  )
}
