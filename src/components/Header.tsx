import LcarsElbow from './LcarsElbow'

interface HeaderProps {
  totalCount: number
  visibleCount: number
  hasActiveFilters: boolean
}

export default function Header({ totalCount, visibleCount, hasActiveFilters }: HeaderProps) {
  return (
    <header className="relative z-10 mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-10">
      <LcarsElbow corner="top-left" color="bg-lcars-orange" className="mb-1" />
      <div className="flex flex-col gap-4 rounded-r-2xl border-y-4 border-r-4 border-lcars-orange/60 bg-void-900/60 px-5 py-6 backdrop-blur-sm sm:px-8">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-lcars-skyblue">
            Federazione dei Pianeti Uniti // Archivio Scientifico
          </p>
          <h1 className="lcars-heading text-3xl leading-tight text-lcars-amber sm:text-4xl md:text-5xl">
            Starfleet Database
            <span className="block text-lcars-orange">Specie Aliene e Civiltà</span>
          </h1>
        </div>
        <p className="max-w-3xl font-condensed text-base text-slate-300 sm:text-lg">
          Consulta l'archivio federale delle specie censite dalla Flotta Stellare: popoli
          umanoidi, forme di vita incorporee, collettivi sintetici e civiltà incontrate lungo
          l'intera storia dell'esplorazione della Federazione, dal Quadrante Alfa fino ai
          confini del Delta.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs uppercase tracking-wide sm:text-sm">
          <span className="rounded-full bg-lcars-orange px-3 py-1 font-bold text-void-950">
            {totalCount} specie catalogate
          </span>
          {hasActiveFilters && (
            <span className="rounded-full bg-lcars-violet px-3 py-1 font-bold text-void-950">
              {visibleCount} corrispondenze ai filtri
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
