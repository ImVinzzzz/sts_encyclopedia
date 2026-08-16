import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function HeaderLCARS() {
  return (
    <header className="w-full mb-8">
      <div className="flex items-stretch gap-2">
        <div className="w-8 sm:w-16 bg-lcars-orange rounded-l-full shrink-0" />
        <div className="flex-1 bg-gradient-to-r from-lcars-purple/20 via-transparent to-transparent py-4 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl font-lcars uppercase tracking-wider text-lcars-orange leading-none">
            Star Trek Species Encyclopedia
          </h1>
          <p className="font-mono-lcars text-xs sm:text-sm text-lcars-blue mt-2 tracking-wide">
            LCARS v2.6 // Archivio Xenobiologico della Flotta Stellare
          </p>
        </div>
        <div className="w-4 sm:w-8 bg-lcars-purple rounded-r-full shrink-0" />
      </div>

      <div className="mt-4 flex items-stretch gap-2">
        <div className="w-4 sm:w-10 bg-lcars-blue rounded-l-full shrink-0" />
        <div className="flex-1 border-l-2 border-lcars-orange/40 bg-slate-900/60 px-4 sm:px-6 py-3">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faBookOpen} className="text-lcars-gold mt-1 shrink-0" />
            <p className="font-mono-lcars text-xs sm:text-sm text-slate-300 leading-relaxed uppercase tracking-wide">
              REGISTRO DATABASE FEDERAZIONE — COMPUTER LCARS: state consultando l'archivio
              alfabetico delle specie senzienti catalogate dalla Flotta Stellare, compilato dai
              dati raccolti sul campo da tutte le navi esplorative in servizio attivo.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
