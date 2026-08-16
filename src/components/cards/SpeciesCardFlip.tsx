import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faSpaceShuttle,
  faAtom,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Species } from '../../types/species';

interface SpeciesCardFlipProps {
  species: Species;
  forceFlipped?: boolean;
  onFlipChange?: (flipped: boolean) => void;
}

export default function SpeciesCardFlip({
  species,
  forceFlipped,
  onFlipChange,
}: SpeciesCardFlipProps) {
  const [localFlipped, setLocalFlipped] = useState(false);
  const isFlipped = forceFlipped !== undefined ? forceFlipped : localFlipped;

  const toggleFlip = () => {
    const next = !isFlipped;
    if (onFlipChange) {
      onFlipChange(next);
    } else {
      setLocalFlipped(next);
    }
  };

  return (
    <div
      className="perspective-1000 h-[380px] w-full cursor-pointer select-none"
      onClick={toggleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') toggleFlip();
      }}
      aria-label={`Scheda specie ${species.name}, clicca per ruotare`}
    >
      <div
        className={`relative h-full w-full transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* FRONTE */}
        <div className="absolute inset-0 backface-hidden bg-slate-900 border-2 border-lcars-orange rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-lcars-orange px-4 py-2">
            <h3 className="font-lcars uppercase text-slate-950 text-lg tracking-wide truncate">
              {species.name}
            </h3>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-300 font-mono-lcars">
              <FontAwesomeIcon icon={faGlobe} className="text-lcars-blue w-4" />
              <span className="truncate">{species.originPlanet}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 font-mono-lcars">
              <FontAwesomeIcon icon={faSpaceShuttle} className="text-lcars-purple w-4" />
              <span>Quadrante {species.quadrant}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 font-mono-lcars">
              <FontAwesomeIcon icon={faAtom} className="text-lcars-gold w-4" />
              <span className="truncate">{species.classification}</span>
            </div>

            <div className="flex flex-wrap gap-1 mt-1">
              {species.series.map((s) => (
                <span
                  key={s}
                  className="bg-slate-800 text-lcars-blue text-[10px] font-mono-lcars font-bold px-2 py-0.5 rounded-full uppercase"
                >
                  {s}
                </span>
              ))}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mt-auto">
              {species.shortDescription}
            </p>
          </div>
          <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-wider text-lcars-gold font-mono-lcars">
            <FontAwesomeIcon icon={faSyncAlt} />
            Clicca per ruotare / scheda completa
          </div>
        </div>

        {/* RETRO */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 border-2 border-lcars-purple rounded-2xl overflow-y-auto flex flex-col">
          <div className="p-4 flex flex-col gap-3">
            <img
              src={species.imageUrl}
              alt={species.name}
              className="aspect-square object-cover rounded-md border-2 border-lcars-orange w-full"
            />
            <div>
              <h4 className="font-lcars uppercase text-lcars-orange text-base tracking-wide">
                {species.name}
              </h4>
              <p className="text-[10px] uppercase text-lcars-purple font-mono-lcars">
                {species.classification}
              </p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{species.extendedDescription}</p>

            <div className="bg-slate-800/70 border-l-2 border-lcars-gold rounded-r-md p-3">
              <p className="text-[10px] uppercase text-lcars-gold font-mono-lcars mb-1 tracking-wider">
                Log di Bordo / Episodi Chiave
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                {species.notableEpisodes.map((ep) => (
                  <li key={ep}>{ep}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFlip();
              }}
              className="mt-auto bg-lcars-purple hover:bg-lcars-orange text-slate-950 font-lcars uppercase text-xs tracking-wide py-2 rounded-full flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faSyncAlt} />
              Torna al fronte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
