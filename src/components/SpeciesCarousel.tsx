import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'
import SpeciesMiniCard from './SpeciesMiniCard'
import type { Species } from '../types/species'

interface SpeciesCarouselProps {
  species: Species[]
  onExpand: (id: string) => void
}

export default function SpeciesCarousel({ species, onExpand }: SpeciesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Scorri a sinistra"
        className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-lcars-orange text-void-950 shadow-lg hover:bg-lcars-amber sm:flex"
      >
        <FontAwesomeIcon icon={icons.chevronLeft} />
      </button>
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {species.map((s) => (
          <SpeciesMiniCard key={s.id} species={s} onExpand={onExpand} className="w-60 flex-shrink-0" />
        ))}
      </div>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Scorri a destra"
        className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-lcars-orange text-void-950 shadow-lg hover:bg-lcars-amber sm:flex"
      >
        <FontAwesomeIcon icon={icons.chevronRight} />
      </button>
    </div>
  )
}
