import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'
import { seriesList } from '../data/seriesMeta'
import type { SeriesTag } from '../types/species'

interface SeriesFilterProps {
  activeSeries: SeriesTag[]
  onToggle: (tag: SeriesTag) => void
}

export default function SeriesFilter({ activeSeries, onToggle }: SeriesFilterProps) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lcars-violet">
        <FontAwesomeIcon icon={icons.filter} className="h-3 w-3" />
        Filtra per serie / film
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtra per serie">
        {seriesList.map(({ tag, label, fullName }) => {
          const active = activeSeries.includes(tag)
          return (
            <button
              key={tag}
              onClick={() => onToggle(tag)}
              title={fullName}
              aria-pressed={active}
              className={`rounded-full border px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide transition-colors ${
                active
                  ? 'border-lcars-violet bg-lcars-violet text-void-950'
                  : 'border-lcars-violet/50 bg-void-800 text-lcars-violet hover:bg-void-700'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
