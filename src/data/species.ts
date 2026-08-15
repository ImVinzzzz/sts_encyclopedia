import type { Species } from '../types/species'
import { speciesAG } from './species-a-g'
import { speciesHQ } from './species-h-q'
import { speciesRZ } from './species-r-z'

export const allSpecies: Species[] = [...speciesAG, ...speciesHQ, ...speciesRZ].sort((a, b) =>
  a.name.localeCompare(b.name, 'it')
)

export const totalSpeciesCount = allSpecies.length
