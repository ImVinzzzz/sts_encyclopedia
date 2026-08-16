import { species_A_I } from './species/species_A_I';
import { species_J_P } from './species/species_J_P';
import { species_Q_Z } from './species/species_Q_Z';
import { Species, StarTrekSeries } from '../types/species';

// Unione completa dell'archivio
export const ALL_SPECIES: Species[] = [...species_A_I, ...species_J_P, ...species_Q_Z];

export const getFeaturedSpecies = (): Species[] => ALL_SPECIES.filter((s) => s.featured);

export const getSpeciesByLetter = (letter: string): Species[] => {
  if (letter === 'ALL') return ALL_SPECIES;
  return ALL_SPECIES.filter((s) => s.name.toUpperCase().startsWith(letter.toUpperCase()));
};

export const filterSpecies = (
  searchQuery: string,
  selectedLetter: string,
  selectedSeries: StarTrekSeries[]
): Species[] => {
  return ALL_SPECIES.filter((s) => {
    const matchesSearch =
      searchQuery === '' ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.originPlanet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLetter =
      selectedLetter === 'ALL' || s.name.toUpperCase().startsWith(selectedLetter.toUpperCase());

    const matchesSeries =
      selectedSeries.length === 0 || selectedSeries.some((series) => s.series.includes(series));

    return matchesSearch && matchesLetter && matchesSeries;
  });
};

// Lettere effettivamente presenti nell'archivio, per disabilitare i pulsanti vuoti
export const getAvailableLetters = (): Set<string> => {
  const letters = new Set<string>();
  ALL_SPECIES.forEach((s) => letters.add(s.name[0].toUpperCase()));
  return letters;
};
