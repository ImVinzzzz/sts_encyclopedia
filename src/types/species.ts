export type StarTrekSeries =
  | 'TOS' // Star Trek: The Original Series
  | 'TAS' // Star Trek: The Animated Series
  | 'TNG' // Star Trek: The Next Generation
  | 'DS9' // Star Trek: Deep Space Nine
  | 'VOY' // Star Trek: Voyager
  | 'ENT' // Star Trek: Enterprise
  | 'DIS' // Star Trek: Discovery
  | 'PIC' // Star Trek: Picard
  | 'SNW' // Star Trek: Strange New Worlds
  | 'LD' // Star Trek: Lower Decks
  | 'PRO' // Star Trek: Prodigy
  | 'FILM'; // Film cinematografici

export type Quadrant = 'Alfa' | 'Beta' | 'Gamma' | 'Delta' | 'Sconosciuto';

export interface Species {
  id: string;
  name: string;
  originPlanet: string;
  quadrant: Quadrant;
  series: StarTrekSeries[];
  featured?: boolean;
  imageUrl: string;
  shortDescription: string;
  extendedDescription: string;
  notableEpisodes: string[];
  classification: string;
}

export const ALL_SERIES: StarTrekSeries[] = [
  'TOS',
  'TAS',
  'TNG',
  'DS9',
  'VOY',
  'ENT',
  'DIS',
  'PIC',
  'SNW',
  'LD',
  'PRO',
  'FILM',
];
