import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import AlphabetGrid from '../components/AlphabetGrid'
import SeriesFilter from '../components/SeriesFilter'
import SpeciesCarousel from '../components/SpeciesCarousel'
import SpeciesGrid from '../components/SpeciesGrid'
import SpeciesDetailOverlay from '../components/SpeciesDetailOverlay'
import Footer from '../components/Footer'
import { useSpeciesFilter } from '../hooks/useSpeciesFilter'
import { allSpecies, totalSpeciesCount } from '../data/species'

const featuredIds = [
  'klingon',
  'vulcaniani',
  'ferengi',
  'borg',
  'romulani',
  'cardassiani',
  'trill',
  'andoriani',
  'betazoidi',
  'gorn',
  'q-continuum',
  'umani',
]

export default function HomePage() {
  const { filters, setQuery, setLetter, toggleSeries, filteredSpecies, hasActiveFilters } =
    useSpeciesFilter()
  const navigate = useNavigate()
  const { id: activeId } = useParams()

  const featured = featuredIds
    .map((id) => allSpecies.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  const activeSpecies = activeId ? allSpecies.find((s) => s.id === activeId) : undefined

  const openSpecies = (id: string) => navigate(`/species/${id}`)
  const closeSpecies = () => navigate('/')

  return (
    <div className="relative min-h-screen bg-deep-space pb-20">
      <Header
        totalCount={totalSpeciesCount}
        visibleCount={filteredSpecies.length}
        hasActiveFilters={hasActiveFilters}
      />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-8 sm:px-6">
        {!hasActiveFilters && (
          <section aria-labelledby="carousel-heading">
            <h2
              id="carousel-heading"
              className="lcars-heading mb-3 text-sm text-lcars-teal sm:text-base"
            >
              Specie in evidenza
            </h2>
            <SpeciesCarousel species={featured} onExpand={openSpecies} />
          </section>
        )}

        <section
          aria-labelledby="search-heading"
          className="flex flex-col gap-4 rounded-2xl border border-void-700 bg-void-900/50 p-5 sm:p-6"
        >
          <h2 id="search-heading" className="sr-only">
            Ricerca e filtri
          </h2>
          <SearchBar value={filters.query} onChange={setQuery} />
          <AlphabetGrid activeLetter={filters.letter} onSelect={setLetter} />
          <SeriesFilter activeSeries={filters.activeSeries} onToggle={toggleSeries} />
        </section>

        <section aria-labelledby="results-heading">
          <h2
            id="results-heading"
            className="lcars-heading mb-3 text-sm text-lcars-teal sm:text-base"
          >
            Registro delle specie ({filteredSpecies.length})
          </h2>
          <SpeciesGrid species={filteredSpecies} onExpand={openSpecies} />
        </section>
      </main>

      <Footer />

      {activeSpecies && <SpeciesDetailOverlay species={activeSpecies} onClose={closeSpecies} />}
    </div>
  )
}
