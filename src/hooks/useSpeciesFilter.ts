import { useMemo, useState } from 'react'
import { allSpecies } from '../data/species'
import type { FilterState, SeriesTag, Species } from '../types/species'

const initialState: FilterState = {
  query: '',
  letter: null,
  activeSeries: [],
}

export function useSpeciesFilter() {
  const [filters, setFilters] = useState<FilterState>(initialState)

  const setQuery = (query: string) => setFilters((f) => ({ ...f, query }))

  const setLetter = (letter: string | null) =>
    setFilters((f) => ({ ...f, letter: f.letter === letter ? null : letter }))

  const toggleSeries = (tag: SeriesTag) =>
    setFilters((f) => ({
      ...f,
      activeSeries: f.activeSeries.includes(tag)
        ? f.activeSeries.filter((s) => s !== tag)
        : [...f.activeSeries, tag],
    }))

  const resetFilters = () => setFilters(initialState)

  const filteredSpecies: Species[] = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    return allSpecies.filter((s) => {
      if (filters.letter && !s.name.toUpperCase().startsWith(filters.letter)) {
        return false
      }
      if (filters.activeSeries.length > 0) {
        const hasSeries = filters.activeSeries.some((tag) => s.series.includes(tag))
        if (!hasSeries) return false
      }
      if (q) {
        const haystack = `${s.name} ${s.nameEnglish ?? ''} ${s.homeworld} ${s.description} ${s.tagline}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [filters])

  const hasActiveFilters =
    filters.query.trim() !== '' || filters.letter !== null || filters.activeSeries.length > 0

  return {
    filters,
    setQuery,
    setLetter,
    toggleSeries,
    resetFilters,
    filteredSpecies,
    hasActiveFilters,
  }
}
