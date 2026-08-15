import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'
import SpeciesPortrait from './SpeciesPortrait'
import SeriesBadge from './SeriesBadge'
import LcarsElbow from './LcarsElbow'
import type { Species } from '../types/species'

interface SpeciesFlipCardProps {
  species: Species
  onClose: () => void
}

export default function SpeciesFlipCard({ species, onClose }: SpeciesFlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="perspective-1500 mx-auto w-full max-w-2xl">
      <div
        className={`transform-style-3d relative h-[34rem] w-full transition-transform duration-700 ease-in-out sm:h-[30rem] ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONTE */}
        <div className="backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-3xl rounded-tr-[3.5rem] border-2 border-lcars-orange bg-void-900 shadow-2xl shadow-lcars-orange/20">
          <SpeciesPortrait
            name={species.name}
            classification={species.classification}
            image={species.image}
            className="h-44 w-full sm:h-48"
          />
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-lcars-skyblue">
                {species.nameEnglish ?? species.name}
              </p>
              <h2 className="lcars-heading text-3xl text-lcars-amber">{species.name}</h2>
            </div>
            <div className="flex flex-wrap gap-4 font-mono text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={icons.dna} className="h-3.5 w-3.5 text-lcars-violet" />
                {species.classification}
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={icons.globe} className="h-3.5 w-3.5 text-lcars-skyblue" />
                {species.homeworld}
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={icons.layers} className="h-3.5 w-3.5 text-lcars-teal" />
                Quadrante {species.quadrant}
              </span>
            </div>
            <p className="font-condensed text-base text-slate-300">{species.tagline}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {species.series.map((tag) => (
                <SeriesBadge key={tag} tag={tag} />
              ))}
            </div>
            <button
              onClick={() => setFlipped(true)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-lcars-orange py-2 font-mono text-sm font-bold uppercase tracking-wide text-void-950 transition-colors hover:bg-lcars-amber"
            >
              <FontAwesomeIcon icon={icons.rotate} className="h-3.5 w-3.5" />
              Gira scheda / Episodi
            </button>
          </div>
        </div>

        {/* RETRO */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col overflow-hidden rounded-3xl rounded-tr-[3.5rem] border-2 border-lcars-violet bg-void-900 shadow-2xl shadow-lcars-violet/20">
          <LcarsElbow corner="top-left" color="bg-lcars-violet" className="!h-6" />
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
            <h2 className="lcars-heading text-2xl text-lcars-violet">{species.name}</h2>
            <div>
              <p className="mb-1 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lcars-skyblue">
                <FontAwesomeIcon icon={icons.dna} className="h-3 w-3" />
                Biologia, cultura e storia
              </p>
              <p className="font-condensed text-base leading-relaxed text-slate-300">
                {species.description}
              </p>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lcars-skyblue">
                <FontAwesomeIcon icon={icons.book} className="h-3 w-3" />
                Episodi chiave
              </p>
              <ul className="flex flex-col gap-1.5">
                {species.episodes.map((ep) => (
                  <li
                    key={ep.code}
                    className="flex items-center justify-between rounded-lg bg-void-800/70 px-3 py-2 font-condensed text-sm text-slate-300"
                  >
                    <span>
                      <span className="mr-2 font-mono text-xs font-bold text-lcars-orange">
                        {ep.code}
                      </span>
                      {ep.title}
                    </span>
                    {ep.year && (
                      <span className="font-mono text-xs text-slate-500">{ep.year}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex gap-2 pt-2">
              <button
                onClick={() => setFlipped(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-lcars-violet py-2 font-mono text-sm font-bold uppercase tracking-wide text-void-950 transition-colors hover:bg-lcars-skyblue"
              >
                <FontAwesomeIcon icon={icons.rotate} className="h-3.5 w-3.5" />
                Torna al fronte
              </button>
              <button
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-lcars-alert px-4 py-2 font-mono text-sm font-bold uppercase tracking-wide text-lcars-alert transition-colors hover:bg-lcars-alert hover:text-void-950"
              >
                <FontAwesomeIcon icon={icons.close} className="h-3.5 w-3.5" />
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
