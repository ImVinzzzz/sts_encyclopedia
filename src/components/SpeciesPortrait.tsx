import { useState, useEffect, type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'
import { type Classification } from '../types/species'

interface SpeciesPortraitProps {
  name: string
  classification: Classification
  image?: string
  className?: string
}

const gradienteClassificazione: Record<Classification, string> = {
  Umanoide: 'from-lcars-orange/40 via-void-800 to-void-950',
  'Non Umanoide': 'from-lcars-teal/40 via-void-800 to-void-950',
  Incorporeo: 'from-lcars-violet/40 via-void-800 to-void-950',
  Sintetico: 'from-lcars-skyblue/40 via-void-800 to-void-950',
  Cyborg: 'from-lcars-alert/40 via-void-800 to-void-950',
  Singolarità: 'from-lcars-amber/40 via-void-800 to-void-950',
  Animale: 'from-lcars-gold/40 via-void-800 to-void-950',
}

function ottieniIniziali(nome: string): string {
  const parole = nome.replace(/['’]/g, ' ').split(/\s+/).filter(Boolean)
  const lettere = parole.slice(0, 2).map((p) => p[0])
  return lettere.join('').toUpperCase()
}

/**
 * Componente per il ritratto visivo della specie:
 * Mostra la foto reale se presente l'URL (con protezione referrer per host esterni),
 * oppure genera una scansione bio-sensoriale coerente con l'interfaccia LCARS.
 */
export const SpeciesPortrait: FC<SpeciesPortraitProps> = ({
  name,
  classification,
  image,
  className = '',
}) => {
  const [erroreCaricamento, setErroreCaricamento] = useState<boolean>(false)

  useEffect(() => {
    setErroreCaricamento(false)
  }, [image])

  const haImmagineValida = Boolean(image && image.trim().length > 0 && !erroreCaricamento)

  if (haImmagineValida && image) {
    return (
      <div
        className={
          'relative flex items-center justify-center overflow-hidden bg-void-950 ' +
          className
        }
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setErroreCaricamento(true)}
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />

        {/* Effetto scanline sottile LCARS sovrapposto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-950/80 via-transparent to-void-950/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scanline bg-gradient-to-b from-lcars-orange/20 to-transparent" />

        {/* Badge identificativo archivio visivo */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-void-950/80 px-2 py-1 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-lcars-teal animate-pulse" />
          <span className="font-mono text-[0.6rem] uppercase tracking-wide text-lcars-teal">
            Registrazione Ottica
          </span>
        </div>
      </div>
    )
  }

  // Fallback con scansione bio-sensoriale se l'immagine non e disponibile
  const classiContenitoreFallback =
    'relative flex items-center justify-center overflow-hidden bg-gradient-to-br ' +
    gradienteClassificazione[classification] +
    ' ' +
    className

  return (
    <div className={classiContenitoreFallback}>
      <div className="lcars-heading text-5xl font-black text-white/20 sm:text-6xl">
        {ottieniIniziali(name)}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scanline bg-gradient-to-b from-lcars-skyblue/30 to-transparent" />
      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-void-950/70 px-2 py-1">
        <FontAwesomeIcon icon={icons.dna} className="h-3 w-3 text-lcars-skyblue" />
        <span className="font-mono text-[0.6rem] uppercase tracking-wide text-lcars-skyblue">
          Dati visivi limitati
        </span>
      </div>
    </div>
  )
}

export default SpeciesPortrait
