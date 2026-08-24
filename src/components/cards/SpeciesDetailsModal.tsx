import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faClose, faGlobe, faSpaceShuttle, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Species } from '../../types/species';

interface SpeciesDetailsModalProps {
  species: Species | null;
  onClose: () => void;
}

export default function SpeciesDetailsModal({ species, onClose }: SpeciesDetailsModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!species) return;
    setIsFlipped(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [species, onClose]);

  if (!species) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="species-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative h-[min(620px,88vh)] w-full max-w-2xl perspective-1000">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute -right-1 -top-1 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-lcars-orange text-lg text-slate-950 transition hover:bg-lcars-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-lcars-blue sm:-right-4 sm:-top-4"
          aria-label="Chiudi la scheda"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>

        <div className={`relative h-full w-full transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          <article className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-2 border-lcars-orange bg-slate-900 backface-hidden">
            <header className="bg-lcars-orange px-5 py-3">
              <h3 id="species-modal-title" className="font-lcars text-xl uppercase tracking-wide text-slate-950 sm:text-2xl">
                {species.name}
              </h3>
            </header>

            <div className="flex-1 overflow-y-auto p-5 sm:p-7">
              <div className="grid gap-3 rounded-xl bg-slate-800/60 p-4 sm:grid-cols-3">
                <Info icon={faGlobe} color="text-lcars-blue" label="Pianeta" value={species.originPlanet} />
                <Info icon={faSpaceShuttle} color="text-lcars-purple" label="Quadrante" value={species.quadrant} />
                <Info icon={faAtom} color="text-lcars-gold" label="Tipologia" value={species.classification} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {species.series.map((series) => (
                  <span key={series} className="rounded-full bg-slate-800 px-3 py-1 font-mono-lcars text-xs font-bold uppercase text-lcars-blue">
                    {series}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-l-2 border-lcars-orange pl-4">
                <p className="mb-2 font-mono-lcars text-[10px] uppercase tracking-widest text-lcars-gold">Descrizione breve</p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{species.shortDescription}</p>
              </div>
            </div>

            <FlipButton label="Mostra tutte le informazioni" onClick={() => setIsFlipped(true)} />
          </article>

          <article className="absolute inset-0 flex rotate-y-180 flex-col overflow-hidden rounded-2xl border-2 border-lcars-purple bg-slate-900 backface-hidden">
            <header className="bg-lcars-purple px-5 py-3">
              <h3 className="font-lcars text-xl uppercase tracking-wide text-slate-950 sm:text-2xl">
                {species.name} — Archivio completo
              </h3>
            </header>

            <div className="flex-1 overflow-y-auto p-5 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <img src={species.imageUrl} alt={species.name} className="aspect-square w-full rounded-lg border-2 border-lcars-orange object-cover sm:w-[180px]" />
                <div>
                  <p className="mb-2 font-mono-lcars text-[10px] uppercase tracking-widest text-lcars-purple">Profilo della specie</p>
                  <p className="text-sm leading-relaxed text-slate-300">{species.extendedDescription}</p>
                </div>
              </div>

              <div className="mt-6 rounded-r-lg border-l-2 border-lcars-gold bg-slate-800/70 p-4">
                <p className="mb-2 font-mono-lcars text-[10px] uppercase tracking-wider text-lcars-gold">Log di bordo / Episodi chiave</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
                  {species.notableEpisodes.map((episode) => <li key={episode}>{episode}</li>)}
                </ul>
              </div>
            </div>

            <FlipButton label="Torna alla prima schermata" onClick={() => setIsFlipped(false)} />
          </article>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, color, label, value }: { icon: typeof faGlobe; color: string; label: string; value: string }) {
  return (
    <div className="flex min-w-0 items-start gap-2">
      <FontAwesomeIcon icon={icon} className={`mt-1 w-4 shrink-0 ${color}`} />
      <div className="min-w-0">
        <p className="font-mono-lcars text-[9px] uppercase tracking-wider text-slate-500">{label}</p>
        <p className="break-words font-mono-lcars text-xs text-slate-200">{value}</p>
      </div>
    </div>
  );
}

function FlipButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex items-center justify-center gap-2 bg-slate-800/90 px-4 py-3 font-mono-lcars text-xs uppercase tracking-wider text-lcars-gold transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lcars-blue">
      <FontAwesomeIcon icon={faSyncAlt} />
      {label}
    </button>
  );
}
