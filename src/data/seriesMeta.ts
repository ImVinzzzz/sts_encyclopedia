import type { SeriesTag } from '../types/species'

export interface SeriesMeta {
  tag: SeriesTag
  label: string
  fullName: string
}

export const seriesList: SeriesMeta[] = [
  { tag: 'TOS', label: 'TOS', fullName: 'Serie Classica' },
  { tag: 'TAS', label: 'TAS', fullName: 'Serie Animata' },
  { tag: 'TNG', label: 'TNG', fullName: 'The Next Generation' },
  { tag: 'DS9', label: 'DS9', fullName: 'Deep Space Nine' },
  { tag: 'VOY', label: 'VOY', fullName: 'Voyager' },
  { tag: 'ENT', label: 'ENT', fullName: 'Enterprise' },
  { tag: 'DIS', label: 'DIS', fullName: 'Discovery' },
  { tag: 'PIC', label: 'PIC', fullName: 'Picard' },
  { tag: 'SNW', label: 'SNW', fullName: 'Strange New Worlds' },
  { tag: 'LD', label: 'LD', fullName: 'Lower Decks' },
  { tag: 'PRO', label: 'PRO', fullName: 'Prodigy' },
  { tag: 'FILM', label: 'FILM', fullName: 'Lungometraggi' },
]

export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
