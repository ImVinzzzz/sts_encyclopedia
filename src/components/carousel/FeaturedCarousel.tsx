import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { Species } from '../../types/species';

interface FeaturedCarouselProps {
  items: Species[];
  onSelect: (species: Species) => void;
}

export default function FeaturedCarousel({ items, onSelect }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (items.length === 0) return null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const current = items[currentIndex];

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-3 w-3 rounded-full bg-lcars-gold" />
        <h2 className="font-lcars uppercase tracking-widest text-lcars-gold text-sm sm:text-base">
          Specie in Evidenza — {currentIndex + 1} / {items.length}
        </h2>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <button
          onClick={goPrev}
          aria-label="Specie precedente"
          className="shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-lcars-orange hover:bg-lcars-gold transition-colors flex items-center justify-center text-slate-950 text-lg"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="flex-1 bg-slate-900/70 border-2 border-lcars-purple rounded-2xl overflow-hidden flex flex-col sm:flex-row">
          <img
            src={current.imageUrl}
            alt={current.name}
            className="w-full sm:w-40 h-40 sm:h-auto object-cover"
          />
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="bg-lcars-blue text-slate-950 text-[10px] sm:text-xs font-bold uppercase px-2 py-0.5 rounded-full font-mono-lcars">
                  Quadrante {current.quadrant}
                </span>
                <span className="text-[10px] sm:text-xs uppercase text-lcars-purple font-mono-lcars">
                  {current.classification}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-lcars uppercase text-lcars-orange tracking-wide">
                {current.name}
              </h3>
              <p className="font-mono-lcars text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-2">
                <FontAwesomeIcon icon={faSpaceShuttle} className="text-lcars-gold" />
                {current.originPlanet}
              </p>
              <p className="text-sm text-slate-400 mt-2 line-clamp-2">{current.shortDescription}</p>
            </div>
            <button
              onClick={() => onSelect(current)}
              className="mt-3 self-start bg-lcars-purple hover:bg-lcars-orange text-slate-950 font-lcars uppercase tracking-wide text-xs sm:text-sm px-4 py-2 rounded-full transition-colors"
            >
              Visualizza Scheda Completa
            </button>
          </div>
        </div>

        <button
          onClick={goNext}
          aria-label="Specie successiva"
          className="shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-lcars-orange hover:bg-lcars-gold transition-colors flex items-center justify-center text-slate-950 text-lg"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
