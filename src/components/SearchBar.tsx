import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 rounded-full border-2 border-lcars-skyblue/60 bg-void-900/70 px-5 py-3 focus-within:border-lcars-skyblue">
      <FontAwesomeIcon icon={icons.search} className="h-4 w-4 text-lcars-skyblue" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cerca per nome specie, pianeta d'origine o caratteristiche..."
        aria-label="Cerca specie"
        className="w-full bg-transparent font-condensed text-base text-slate-100 placeholder:text-slate-500 focus:outline-none"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Cancella ricerca"
          className="rounded-full p-1 text-slate-400 hover:text-lcars-alert"
        >
          <FontAwesomeIcon icon={icons.close} className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
}
