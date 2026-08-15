import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'

export const Footer: FC = () => {
  const posizioneAttuale = useLocation()
  const siamoInEditor = posizioneAttuale.pathname === '/editor'

  const annoCorrente = new Date().getFullYear()

  return (
    <footer className="relative z-10 mx-auto mt-20 max-w-6xl px-4 pb-12 sm:px-6">
      {/* Barra superiore decorativa LCARS */}
      <div className="flex items-center gap-2 pb-4">
        <div className="h-1 w-16 rounded-full bg-lcars-orange" />
        <div className="h-1 flex-1 rounded-full bg-void-700" />
        <div className="h-1 w-24 rounded-full bg-lcars-teal" />
        <div className="h-1 w-12 rounded-full bg-lcars-violet" />
      </div>

      <div className="flex flex-col gap-6 rounded-2xl border border-void-700 bg-void-900/70 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lcars-orange animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-widest text-lcars-skyblue">
              Database LCARS Flotta Stellare // Terminale Scientifico
            </p>
          </div>
          <p className="font-condensed text-sm text-slate-400">
            Archivio scientifico federale delle specie e civiltà conosciute nei quattro quadranti galattici.
          </p>
          <p className="font-mono text-xs text-slate-500">
            {"Data Astrale: 47634.4 // Terra " + annoCorrente.toString() + " // Accesso Autorizzato"}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {!siamoInEditor ? (
            <Link
              to="/editor"
              className={
                "flex items-center gap-2 rounded-full border border-lcars-orange bg-lcars-orange/10 " +
                "px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-lcars-orange " +
                "transition-all hover:bg-lcars-orange hover:text-void-950 focus-visible:outline-none"
              }
            >
              <FontAwesomeIcon icon={icons.edit} className="h-3.5 w-3.5" />
              <span>Editor Schede Specie</span>
            </Link>
          ) : (
            <Link
              to="/"
              className={
                "flex items-center gap-2 rounded-full border border-lcars-teal bg-lcars-teal/10 " +
                "px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-lcars-teal " +
                "transition-all hover:bg-lcars-teal hover:text-void-950 focus-visible:outline-none"
              }
            >
              <FontAwesomeIcon icon={icons.home} className="h-3.5 w-3.5" />
              <span>Torna al Database</span>
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
