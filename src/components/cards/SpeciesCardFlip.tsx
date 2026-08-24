import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faGlobe, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { Species } from '../../types/species';

interface SpeciesCardFlipProps {
  species: Species;
  onSelect: (species: Species) => void;
}

export default function SpeciesCardFlip({ species, onSelect }: SpeciesCardFlipProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(species)}
      className="group h-[190px] w-full overflow-hidden rounded-2xl border-2 border-lcars-orange bg-slate-900 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-lcars-gold hover:shadow-lcars-orange/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-lcars-blue"
      aria-label={`Apri la scheda completa di ${species.name}`}
    >
      <div className="bg-lcars-orange px-4 py-1.5 transition-colors group-hover:bg-lcars-gold">
        <h3 className="truncate font-lcars text-base uppercase tracking-wide text-slate-950">
          {species.name}
        </h3>
      </div>

      <div className="flex h-[150px] flex-col gap-1.5 px-4 py-3">
        <InfoRow icon={faGlobe} color="text-lcars-blue" text={species.originPlanet} />
        <InfoRow icon={faSpaceShuttle} color="text-lcars-purple" text={`Quadrante ${species.quadrant}`} />
        <InfoRow icon={faAtom} color="text-lcars-gold" text={species.classification} />

        <div className="mt-auto flex max-h-11 flex-wrap gap-1 overflow-hidden">
          {species.series.map((series) => (
            <span
              key={series}
              className="rounded-full bg-slate-800 px-2 py-0.5 font-mono-lcars text-[10px] font-bold uppercase text-lcars-blue"
            >
              {series}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function InfoRow({ icon, color, text }: { icon: typeof faGlobe; color: string; text: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 font-mono-lcars text-xs text-slate-300">
      <FontAwesomeIcon icon={icon} className={`w-4 shrink-0 ${color}`} />
      <span className="truncate">{text}</span>
    </div>
  );
}
