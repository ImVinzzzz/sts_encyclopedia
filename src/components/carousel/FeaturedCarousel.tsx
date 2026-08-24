import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { Species } from '../../types/species';

interface FeaturedCarouselProps {
  items: Species[];
  onSelect: (species: Species) => void;
}

export default function FeaturedCarousel({ items, onSelect }: FeaturedCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (items.length === 0) return null;

  const move = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), items.length - 1);
    const card = viewport.firstElementChild as HTMLElement | null;
    const gap = 12;
    viewport.scrollTo({ left: nextIndex * ((card?.offsetWidth ?? 0) + gap), behavior: 'smooth' });
    setCurrentIndex(nextIndex);
  };

  return (
    <section className="mb-10">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-lcars-gold" />
        <h2 className="font-lcars text-sm uppercase tracking-widest text-lcars-gold sm:text-base">
          Specie in Evidenza — {currentIndex + 1} / {items.length}
        </h2>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={currentIndex === 0}
          aria-label="Specie precedenti"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lcars-orange text-lg text-slate-950 transition-colors hover:bg-lcars-gold disabled:cursor-not-allowed disabled:opacity-35 sm:h-14 sm:w-14"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div
          ref={viewportRef}
          className="flex flex-1 snap-x snap-mandatory gap-3 overflow-x-hidden rounded-2xl"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="flex h-[250px] flex-[0_0_78%] snap-start flex-col overflow-hidden rounded-2xl border-2 border-lcars-purple bg-slate-900/70 sm:flex-[0_0_43%]"
            >
              <img src={item.imageUrl} alt="" className="h-24 w-full object-cover" />
              <div className="flex min-h-0 flex-1 flex-col p-3">
                <div className="mb-1 flex flex-wrap items-center gap-1.5">
                  <span className="rounded-full bg-lcars-blue px-2 py-0.5 font-mono-lcars text-[9px] font-bold uppercase text-slate-950">
                    Quadrante {item.quadrant}
                  </span>
                  <span className="truncate font-mono-lcars text-[9px] uppercase text-lcars-purple">
                    {item.classification}
                  </span>
                </div>
                <h3 className="truncate font-lcars text-lg uppercase tracking-wide text-lcars-orange">
                  {item.name}
                </h3>
                <p className="flex items-center gap-2 truncate font-mono-lcars text-[11px] text-slate-300">
                  <FontAwesomeIcon icon={faSpaceShuttle} className="shrink-0 text-lcars-gold" />
                  {item.originPlanet}
                </p>
                <button
                  type="button"
                  onClick={() => onSelect(item)}
                  className="mt-auto self-start rounded-full bg-lcars-purple px-3 py-1.5 font-lcars text-[11px] uppercase tracking-wide text-slate-950 transition-colors hover:bg-lcars-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-lcars-blue"
                >
                  Visualizza scheda
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => move(1)}
          disabled={currentIndex === items.length - 1}
          aria-label="Specie successive"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lcars-orange text-lg text-slate-950 transition-colors hover:bg-lcars-gold disabled:cursor-not-allowed disabled:opacity-35 sm:h-14 sm:w-14"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
