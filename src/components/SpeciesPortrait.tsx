import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'
import type { Classification } from '../types/species'

interface SpeciesPortraitProps {
  name: string
  classification: Classification
  className?: string
}

const classificationGradient: Record<Classification, string> = {
  Umanoide: 'from-lcars-orange/40 via-void-800 to-void-950',
  'Non Umanoide': 'from-lcars-teal/40 via-void-800 to-void-950',
  Incorporeo: 'from-lcars-violet/40 via-void-800 to-void-950',
  Sintetico: 'from-lcars-skyblue/40 via-void-800 to-void-950',
  Cyborg: 'from-lcars-alert/40 via-void-800 to-void-950',
  Singolarità: 'from-lcars-amber/40 via-void-800 to-void-950',
  Animale: 'from-lcars-gold/40 via-void-800 to-void-950',
}

function initialsOf(name: string) {
  const words = name.replace(/['’]/g, ' ').split(/\s+/).filter(Boolean)
  const letters = words.slice(0, 2).map((w) => w[0])
  return letters.join('').toUpperCase()
}

/**
 * Al posto di immagini reali (protette da copyright), ogni specie mostra
 * una scansione bio-sensoriale generata: coerente con l'estetica LCARS di un
 * archivio federale con dati visivi non sempre disponibili.
 */
export default function SpeciesPortrait({ name, classification, className = '' }: SpeciesPortraitProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${classificationGradient[classification]} ${className}`}
    >
      <div className="lcars-heading text-5xl font-black text-white/20 sm:text-6xl">
        {initialsOf(name)}
      </div>
      <div className="absolute inset-x-0 top-0 h-1/3 animate-scanline bg-gradient-to-b from-lcars-skyblue/30 to-transparent" />
      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-void-950/70 px-2 py-1">
        <FontAwesomeIcon icon={icons.dna} className="h-3 w-3 text-lcars-skyblue" />
        <span className="font-mono text-[0.6rem] uppercase tracking-wide text-lcars-skyblue">
          Dati visivi limitati
        </span>
      </div>
    </div>
  )
}
