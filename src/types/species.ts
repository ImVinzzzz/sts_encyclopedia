export type SeriesTag =
  | 'TOS'
  | 'TAS'
  | 'TNG'
  | 'DS9'
  | 'VOY'
  | 'ENT'
  | 'DIS'
  | 'PIC'
  | 'SNW'
  | 'LD'
  | 'PRO'
  | 'FILM'

export type Quadrant = 'Alfa' | 'Beta' | 'Gamma' | 'Delta' | 'Sconosciuto'

export type Classification =
  | 'Umanoide'
  | 'Non Umanoide'
  | 'Incorporeo'
  | 'Sintetico'
  | 'Cyborg'
  | 'Singolarità'
  | 'Animale'

export interface EpisodeNote {
  /** Codice serie + numero episodio, es. "TNG 3x15" */
  code: string
  /** Titolo italiano dell'episodio */
  title: string
  /** Anno di prima messa in onda */
  year?: number
}

export interface Species {
  id: string
  name: string
  nameEnglish?: string
  classification: Classification
  homeworld: string
  quadrant: Quadrant
  series: SeriesTag[]
  /** Sintesi breve mostrata sul fronte della scheda (1 frase) */
  tagline: string
  /** Descrizione estesa mostrata sul retro della scheda */
  description: string
  episodes: EpisodeNote[]
  /**
   * Percorso/URL di un'immagine rappresentativa, se disponibile.
   * Se assente, l'interfaccia mostra una scansione bio-sensoriale
   * generata (SpeciesPortrait) al suo posto: coerente con l'idea di un
   * archivio federale con dati visivi non sempre disponibili.
   */
  image?: string
}

export interface FilterState {
  query: string
  letter: string | null
  activeSeries: SeriesTag[]
}
