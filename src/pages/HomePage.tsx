import { useMemo, useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderLCARS from '../components/common/HeaderLCARS';
import FeaturedCarousel from '../components/carousel/FeaturedCarousel';
import AlphabetFilter from '../components/filters/AlphabetFilter';
import SeriesFilter from '../components/filters/SeriesFilter';
import SearchBar from '../components/filters/SearchBar';
import SpeciesCardFlip from '../components/cards/SpeciesCardFlip';
import SpeciesDetailsModal from '../components/cards/SpeciesDetailsModal';
import {
  ALL_SPECIES,
  filterSpecies,
  getAvailableLetters,
  getFeaturedSpecies,
} from '../data/speciesData';
import { Species, StarTrekSeries } from '../types/species';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('ALL');
  const [selectedSeries, setSelectedSeries] = useState<StarTrekSeries[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  const featured = useMemo(() => getFeaturedSpecies(), []);
  const availableLetters = useMemo(() => getAvailableLetters(), []);

  const results = useMemo(
    () => filterSpecies(searchQuery, selectedLetter, selectedSeries),
    [searchQuery, selectedLetter, selectedSeries]
  );

  const toggleSeries = (series: StarTrekSeries) => {
    setSelectedSeries((prev) =>
      prev.includes(series) ? prev.filter((s) => s !== series) : [...prev, series]
    );
  };

  const handleCarouselSelect = (species: Species) => {
    setSelectedSpecies(species);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-3 sm:px-8 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <HeaderLCARS />

        <FeaturedCarousel items={featured} onSelect={handleCarouselSelect} />

        <section className="mb-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="bg-slate-900/50 border border-lcars-orange/30 rounded-2xl p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFilter} className="text-lcars-orange text-sm" />
              <span className="font-lcars uppercase tracking-wide text-xs sm:text-sm text-lcars-orange">
                Filtro Alfabetico
              </span>
            </div>
            <AlphabetFilter
              selectedLetter={selectedLetter}
              onSelectLetter={setSelectedLetter}
              availableLetters={availableLetters}
            />

            <div className="border-t border-slate-700 pt-4">
              <SeriesFilter
                selectedSeries={selectedSeries}
                onToggleSeries={toggleSeries}
                onClear={() => setSelectedSeries([])}
              />
            </div>
          </div>

          <p className="font-mono-lcars text-xs text-slate-400 uppercase tracking-wide">
            {results.length} / {ALL_SPECIES.length} record trovati nell'archivio
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
          {results.map((s) => (
            <div key={s.id}>
              <SpeciesCardFlip species={s} onSelect={setSelectedSpecies} />
            </div>
          ))}

          {results.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="font-lcars uppercase text-lcars-orange text-xl tracking-wide">
                Nessun record corrisponde ai parametri di ricerca
              </p>
              <p className="font-mono-lcars text-xs text-slate-500 mt-2">
                Modifica i filtri o la chiave di ricerca e riprova
              </p>
            </div>
          )}
        </section>

        <SpeciesDetailsModal species={selectedSpecies} onClose={() => setSelectedSpecies(null)} />
      </div>
    </div>
  );
}
