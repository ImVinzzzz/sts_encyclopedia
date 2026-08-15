import { useEffect } from 'react'
import SpeciesFlipCard from './SpeciesFlipCard'
import type { Species } from '../types/species'

interface SpeciesDetailOverlayProps {
  species: Species
  onClose: () => void
}

export default function SpeciesDetailOverlay({ species, onClose }: SpeciesDetailOverlayProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-void-950/85 px-4 py-8 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Scheda dettaglio: ${species.name}`}
    >
      <SpeciesFlipCard species={species} onClose={onClose} />
    </div>
  )
}
