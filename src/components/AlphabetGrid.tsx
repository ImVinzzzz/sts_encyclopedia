import { alphabet } from '../data/seriesMeta'

interface AlphabetGridProps {
  activeLetter: string | null
  onSelect: (letter: string | null) => void
}

export default function AlphabetGrid({ activeLetter, onSelect }: AlphabetGridProps) {
  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtra per lettera iniziale">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors ${
          activeLetter === null
            ? 'bg-lcars-amber text-void-950'
            : 'bg-void-800 text-lcars-amber hover:bg-void-700'
        }`}
      >
        Tutte
      </button>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => onSelect(letter)}
          aria-pressed={activeLetter === letter}
          className={`h-8 w-8 rounded-full font-mono text-xs font-bold uppercase transition-colors ${
            activeLetter === letter
              ? 'bg-lcars-orange text-void-950'
              : 'bg-void-800 text-lcars-orange hover:bg-void-700'
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}
