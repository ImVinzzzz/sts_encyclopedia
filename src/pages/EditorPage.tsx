import { useState, type FC, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'
import LcarsElbow from '../components/LcarsElbow'
import SpeciesFlipCard from '../components/SpeciesFlipCard'
import Footer from '../components/Footer'
import { allSpecies } from '../data/species'
import { seriesList } from '../data/seriesMeta'
import {
  type Species,
  type SeriesTag,
  type Quadrant,
  type Classification,
  type EpisodeNote,
} from '../types/species'

const classificazioniDisponibili: Classification[] = [
  'Umanoide',
  'Non Umanoide',
  'Incorporeo',
  'Sintetico',
  'Cyborg',
  'Singolarità',
  'Animale',
]

const quadrantiDisponibili: Quadrant[] = [
  'Alfa',
  'Beta',
  'Gamma',
  'Delta',
  'Sconosciuto',
]

const specieInizialeVuota: Species = {
  id: '',
  name: '',
  nameEnglish: '',
  classification: 'Umanoide',
  homeworld: '',
  quadrant: 'Alfa',
  series: ['TNG'],
  tagline: '',
  description: '',
  episodes: [
    {
      code: 'TNG 1x01',
      title: 'Incontro a Farpoint',
      year: 1987,
    },
  ],
  image: '',
}

export const EditorPage: FC = () => {
  const [specieSelezionataId, setSpecieSelezionataId] = useState<string>('nuova')
  const [datiForm, setDatiForm] = useState<Species>(specieInizialeVuota)
  const [messaggioConferma, setMessaggioConferma] = useState<string | null>(null)
  const [mostraCodiceJson, setMostraCodiceJson] = useState<boolean>(false)

  // Generatore slug ID dal nome
  const generaSlug = (testo: string): string => {
    return testo
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
  }

  // Gestione selezione specie esistente
  const gestisciCambioSpecieSelezionata = (e: ChangeEvent<HTMLSelectElement>) => {
    const idScelto = e.target.value
    setSpecieSelezionataId(idScelto)

    if (idScelto === 'nuova') {
      setDatiForm({
        ...specieInizialeVuota,
        id: '',
      })
    } else {
      const trovata = allSpecies.find((s) => s.id === idScelto)
      if (trovata) {
        setDatiForm({
          id: trovata.id,
          name: trovata.name,
          nameEnglish: trovata.nameEnglish || '',
          classification: trovata.classification,
          homeworld: trovata.homeworld,
          quadrant: trovata.quadrant,
          series: [...trovata.series],
          tagline: trovata.tagline,
          description: trovata.description,
          episodes: trovata.episodes.map((ep) => ({ ...ep })),
          image: trovata.image || '',
        })
      }
    }
  }

  // Aggiornamento campi generici
  const gestisciCambioCampo = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setDatiForm((prev) => {
      const nuovoStato = {
        ...prev,
        [name]: value,
      }

      // Se stiamo creando una nuova specie e modifichiamo il nome, aggiorniamo l'ID automaticamente se non modificato a mano
      if (specieSelezionataId === 'nuova' && name === 'name') {
        nuovoStato.id = generaSlug(value)
      }

      return nuovoStato
    })
  }

  // Gestione toggle serie TV
  const gestisciToggleSerie = (tag: SeriesTag) => {
    setDatiForm((prev) => {
      const presente = prev.series.includes(tag)
      let nuoveSerie: SeriesTag[] = []
      if (presente) {
        nuoveSerie = prev.series.filter((s) => s !== tag)
        if (nuoveSerie.length === 0) {
          nuoveSerie = [tag] // mantieni almeno una serie
        }
      } else {
        nuoveSerie = [...prev.series, tag]
      }
      return {
        ...prev,
        series: nuoveSerie,
      }
    })
  }

  // Gestione episodi
  const gestisciCambioEpisodio = (
    indice: number,
    campo: keyof EpisodeNote,
    valore: string
  ) => {
    setDatiForm((prev) => {
      const nuoviEpisodi = [...prev.episodes]
      if (campo === 'year') {
        const annoNumero = parseInt(valore, 10)
        nuoviEpisodi[indice] = {
          ...nuoviEpisodi[indice],
          year: isNaN(annoNumero) ? undefined : annoNumero,
        }
      } else {
        nuoviEpisodi[indice] = {
          ...nuoviEpisodi[indice],
          [campo]: valore,
        }
      }
      return {
        ...prev,
        episodes: nuoviEpisodi,
      }
    })
  }

  const aggiungiEpisodio = () => {
    setDatiForm((prev) => ({
      ...prev,
      episodes: [
        ...prev.episodes,
        {
          code: 'TNG 1x01',
          title: 'Nuovo Episodio',
          year: 1987,
        },
      ],
    }))
  }

  const rimuoviEpisodio = (indice: number) => {
    setDatiForm((prev) => {
      if (prev.episodes.length <= 1) {
        return prev
      }
      return {
        ...prev,
        episodes: prev.episodes.filter((_, i) => i !== indice),
      }
    })
  }

  // Reset scheda
  const reimpostaForm = () => {
    if (specieSelezionataId === 'nuova') {
      setDatiForm(specieInizialeVuota)
    } else {
      const trovata = allSpecies.find((s) => s.id === specieSelezionataId)
      if (trovata) {
        setDatiForm({
          id: trovata.id,
          name: trovata.name,
          nameEnglish: trovata.nameEnglish || '',
          classification: trovata.classification,
          homeworld: trovata.homeworld,
          quadrant: trovata.quadrant,
          series: [...trovata.series],
          tagline: trovata.tagline,
          description: trovata.description,
          episodes: trovata.episodes.map((ep) => ({ ...ep })),
          image: trovata.image || '',
        })
      }
    }
    mostraNotifica('Dati ripristinati con successo')
  }

  // Notifica temporanea
  const mostraNotifica = (testo: string) => {
    setMessaggioConferma(testo)
    setTimeout(() => {
      setMessaggioConferma(null)
    }, 3500)
  }

  // Copia codice generato
  const copiaCodice = (tipo: 'json' | 'ts') => {
    let testoDaCopiare = ''
    if (tipo === 'json') {
      testoDaCopiare = JSON.stringify(datiForm, null, 2)
    } else {
      testoDaCopiare =
        '{\n' +
        '  id: "' + datiForm.id + '",\n' +
        '  name: "' + datiForm.name + '",\n' +
        (datiForm.nameEnglish ? '  nameEnglish: "' + datiForm.nameEnglish + '",\n' : '') +
        '  classification: "' + datiForm.classification + '",\n' +
        '  homeworld: "' + datiForm.homeworld + '",\n' +
        '  quadrant: "' + datiForm.quadrant + '",\n' +
        '  series: ' + JSON.stringify(datiForm.series) + ',\n' +
        '  tagline: "' + datiForm.tagline.replace(/"/g, '\\"') + '",\n' +
        '  description:\n    "' + datiForm.description.replace(/"/g, '\\"') + '",\n' +
        '  episodes: ' + JSON.stringify(datiForm.episodes, null, 4) + ',\n' +
        (datiForm.image ? '  image: "' + datiForm.image + '",\n' : '') +
        '}'
    }

    navigator.clipboard.writeText(testoDaCopiare).then(() => {
      mostraNotifica('Codice ' + tipo.toUpperCase() + ' copiato negli appunti!')
    })
  }

  // Download file JSON
  const scaricaJson = () => {
    const nomeFile = (datiForm.id || 'scheda-specie') + '.json'
    const contenuto = JSON.stringify(datiForm, null, 2)
    const blob = new Blob([contenuto], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = nomeFile
    link.click()
    URL.revokeObjectURL(url)
    mostraNotifica('Download del file ' + nomeFile + ' completato!')
  }

  const gestisciInvioForm = (e: FormEvent) => {
    e.preventDefault()
    mostraNotifica('Scheda validata! Puoi copiare il codice esportato per aggiungerlo al database.')
  }

  return (
    <div className="relative min-h-screen bg-deep-space pb-12">
      {/* Header LCARS Editor */}
      <header className="relative z-10 mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-10">
        <LcarsElbow corner="top-left" color="bg-lcars-orange" className="mb-1" />
        <div className="flex flex-col gap-4 rounded-r-2xl border-y-4 border-r-4 border-lcars-orange/60 bg-void-900/60 px-5 py-6 backdrop-blur-sm sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lcars-skyblue">
                Flotta Stellare // Modulo di Inserimento ed Editing
              </p>
              <h1 className="lcars-heading text-3xl leading-tight text-lcars-amber sm:text-4xl">
                Editor Schede Specie
              </h1>
            </div>
            <Link
              to="/"
              className={
                "flex items-center gap-2 rounded-full border border-lcars-teal bg-lcars-teal/10 " +
                "px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-lcars-teal " +
                "transition-all hover:bg-lcars-teal hover:text-void-950"
              }
            >
              <FontAwesomeIcon icon={icons.arrowLeft} className="h-3.5 w-3.5" />
              <span>Torna al Database</span>
            </Link>
          </div>
          <p className="font-condensed text-base text-slate-300">
            Strumento di gestione per i registri della Federazione: modifica le informazioni biologiche,
            culturali e storiche delle specie note oppure registra un nuovo primo contatto nel database.
          </p>
        </div>
      </header>

      {/* Notifica di conferma flottante */}
      {messaggioConferma && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-lcars-amber bg-void-900 px-5 py-3 font-mono text-sm font-bold text-lcars-amber shadow-2xl shadow-lcars-amber/20 backdrop-blur-md animate-bounce">
          <FontAwesomeIcon icon={icons.check} className="h-4 w-4 text-lcars-teal" />
          <span>{messaggioConferma}</span>
        </div>
      )}

      {/* Corpo principale */}
      <main className="relative z-10 mx-auto mt-8 flex max-w-6xl flex-col gap-8 px-4 sm:px-6">
        {/* Pannello Selettore Specie */}
        <section
          aria-labelledby="selettore-heading"
          className="rounded-2xl border border-lcars-orange/40 bg-void-900/60 p-5 backdrop-blur-sm sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2
                id="selettore-heading"
                className="lcars-heading text-sm text-lcars-orange sm:text-base"
              >
                Modalita Operativa
              </h2>
              <p className="font-condensed text-sm text-slate-400">
                Seleziona una scheda esistente dal database per modificarla, oppure creane una nuova da zero.
              </p>
            </div>
            <div className="w-full sm:w-72">
              <select
                value={specieSelezionataId}
                onChange={gestisciCambioSpecieSelezionata}
                className={
                  "w-full rounded-xl border border-lcars-orange/60 bg-void-950 px-4 py-2.5 " +
                  "font-mono text-sm text-lcars-amber focus:border-lcars-amber focus:outline-none"
                }
              >
                <option value="nuova">+ Nuova Specie (Crea da zero)</option>
                <optgroup label="Specie nel Database">
                  {allSpecies.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name + " (" + (s.nameEnglish || s.name) + ")"}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>
        </section>

        {/* Griglia a due colonne: Form a sinistra, Anteprima live a destra */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Colonna Form (7 colonne su desktop) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={gestisciInvioForm}
              className="flex flex-col gap-6 rounded-2xl border border-void-700 bg-void-900/60 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between border-b border-void-700 pb-3">
                <h3 className="lcars-heading text-base text-lcars-amber">
                  {specieSelezionataId === 'nuova'
                    ? 'Nuova Registrazione Specie'
                    : 'Modifica: ' + datiForm.name}
                </h3>
                <span className="rounded-full bg-lcars-orange/20 px-3 py-1 font-mono text-xs font-bold uppercase text-lcars-orange">
                  {'ID: ' + (datiForm.id || 'non assegnato')}
                </span>
              </div>

              {/* Sezione Dati Anagrafici */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                  >
                    Nome Specie (Italiano) *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={datiForm.name}
                    onChange={gestisciCambioCampo}
                    placeholder="es. Vulcaniani"
                    className={
                      "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                      "font-condensed text-base text-slate-100 placeholder-slate-600 " +
                      "focus:border-lcars-amber focus:outline-none"
                    }
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nameEnglish"
                    className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                  >
                    Nome Inglese / Originale
                  </label>
                  <input
                    type="text"
                    id="nameEnglish"
                    name="nameEnglish"
                    value={datiForm.nameEnglish || ''}
                    onChange={gestisciCambioCampo}
                    placeholder="es. Vulcans"
                    className={
                      "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                      "font-condensed text-base text-slate-100 placeholder-slate-600 " +
                      "focus:border-lcars-amber focus:outline-none"
                    }
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="id"
                    className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                  >
                    Identificativo Univoco (Slug ID) *
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    required
                    value={datiForm.id}
                    onChange={gestisciCambioCampo}
                    placeholder="es. vulcaniani"
                    className={
                      "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                      "font-mono text-sm text-lcars-amber placeholder-slate-600 " +
                      "focus:border-lcars-amber focus:outline-none"
                    }
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="homeworld"
                    className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                  >
                    Pianeta d'Origine *
                  </label>
                  <input
                    type="text"
                    id="homeworld"
                    name="homeworld"
                    required
                    value={datiForm.homeworld}
                    onChange={gestisciCambioCampo}
                    placeholder="es. Vulcano (40 Eridani A II)"
                    className={
                      "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                      "font-condensed text-base text-slate-100 placeholder-slate-600 " +
                      "focus:border-lcars-amber focus:outline-none"
                    }
                  />
                </div>
              </div>

              {/* Sezione Classificazione e Quadrante */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="classification"
                    className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                  >
                    Classificazione Biologica *
                  </label>
                  <select
                    id="classification"
                    name="classification"
                    value={datiForm.classification}
                    onChange={gestisciCambioCampo}
                    className={
                      "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                      "font-condensed text-base text-slate-100 focus:border-lcars-amber focus:outline-none"
                    }
                  >
                    {classificazioniDisponibili.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="quadrant"
                    className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                  >
                    Quadrante Galattico *
                  </label>
                  <select
                    id="quadrant"
                    name="quadrant"
                    value={datiForm.quadrant}
                    onChange={gestisciCambioCampo}
                    className={
                      "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                      "font-condensed text-base text-slate-100 focus:border-lcars-amber focus:outline-none"
                    }
                  >
                    {quadrantiDisponibili.map((q) => (
                      <option key={q} value={q}>
                        {'Quadrante ' + q}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sezione Serie Star Trek (Badge Toggle) */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue">
                  Serie Star Trek di Comparsa *
                </label>
                <div className="flex flex-wrap gap-2">
                  {seriesList.map((s) => {
                    const selezionata = datiForm.series.includes(s.tag)
                    return (
                      <button
                        type="button"
                        key={s.tag}
                        onClick={() => gestisciToggleSerie(s.tag)}
                        className={
                          "rounded-lg px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide transition-all " +
                          (selezionata
                            ? "bg-lcars-orange text-void-950 shadow-md shadow-lcars-orange/30"
                            : "border border-void-700 bg-void-950 text-slate-400 hover:border-slate-500 hover:text-slate-200")
                        }
                        title={s.fullName}
                      >
                        {s.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Sintesi Tagline */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="tagline"
                  className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                >
                  Sintesi Breve (Fronte Scheda) *
                </label>
                <input
                  type="text"
                  id="tagline"
                  name="tagline"
                  required
                  value={datiForm.tagline}
                  onChange={gestisciCambioCampo}
                  placeholder="Una frase riassuntiva che descrive la specie..."
                  className={
                    "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                    "font-condensed text-base text-slate-100 placeholder-slate-600 " +
                    "focus:border-lcars-amber focus:outline-none"
                  }
                />
              </div>

              {/* Descrizione Estesa */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="description"
                  className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                >
                  Descrizione Estesa (Retro Scheda) *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={datiForm.description}
                  onChange={gestisciCambioCampo}
                  placeholder="Testo dettagliato sulla biologia, storia, societa e cultura..."
                  className={
                    "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                    "font-condensed text-base leading-relaxed text-slate-100 placeholder-slate-600 " +
                    "focus:border-lcars-amber focus:outline-none"
                  }
                />
              </div>

              {/* URL Immagine Opzionale */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="image"
                  className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue"
                >
                  URL Immagine / Ritratto (Opzionale)
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={datiForm.image || ''}
                  onChange={gestisciCambioCampo}
                  placeholder="https://... oppure lascia vuoto per sensore bio-scansione LCARS"
                  className={
                    "rounded-lg border border-void-700 bg-void-950 px-3.5 py-2 " +
                    "font-mono text-sm text-slate-100 placeholder-slate-600 " +
                    "focus:border-lcars-amber focus:outline-none"
                  }
                />
              </div>

              {/* Sezione Episodi Dinamica */}
              <div className="flex flex-col gap-3 border-t border-void-700 pt-4">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-lcars-skyblue">
                    Episodi Chiave nel Database
                  </label>
                  <button
                    type="button"
                    onClick={aggiungiEpisodio}
                    className={
                      "flex items-center gap-1.5 rounded-full border border-lcars-teal bg-lcars-teal/10 " +
                      "px-3 py-1 font-mono text-xs font-bold text-lcars-teal hover:bg-lcars-teal hover:text-void-950"
                    }
                  >
                    <FontAwesomeIcon icon={icons.plus} className="h-3 w-3" />
                    <span>Aggiungi Episodio</span>
                  </button>
                </div>

                <div className="flex flex-col gap-2.5">
                  {datiForm.episodes.map((ep, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2 rounded-xl border border-void-800 bg-void-950/70 p-3 sm:flex-row sm:items-center"
                    >
                      <input
                        type="text"
                        value={ep.code}
                        onChange={(e) => gestisciCambioEpisodio(idx, 'code', e.target.value)}
                        placeholder="Codice (es. TNG 3x15)"
                        className="w-full sm:w-28 rounded-lg border border-void-700 bg-void-900 px-2.5 py-1.5 font-mono text-xs text-lcars-amber focus:outline-none"
                      />
                      <input
                        type="text"
                        value={ep.title}
                        onChange={(e) => gestisciCambioEpisodio(idx, 'title', e.target.value)}
                        placeholder="Titolo episodio"
                        className="flex-1 rounded-lg border border-void-700 bg-void-900 px-2.5 py-1.5 font-condensed text-sm text-slate-200 focus:outline-none"
                      />
                      <input
                        type="number"
                        value={ep.year || ''}
                        onChange={(e) => gestisciCambioEpisodio(idx, 'year', e.target.value)}
                        placeholder="Anno"
                        className="w-full sm:w-20 rounded-lg border border-void-700 bg-void-900 px-2.5 py-1.5 font-mono text-xs text-slate-300 focus:outline-none"
                      />
                      {datiForm.episodes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => rimuoviEpisodio(idx)}
                          className="self-end sm:self-center p-2 text-slate-500 hover:text-lcars-alert transition-colors"
                          title="Rimuovi episodio"
                          aria-label="Rimuovi episodio"
                        >
                          <FontAwesomeIcon icon={icons.trash} className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pulsanti Azione */}
              <div className="flex flex-wrap items-center gap-3 border-t border-void-700 pt-4">
                <button
                  type="button"
                  onClick={reimpostaForm}
                  className={
                    "flex items-center gap-2 rounded-xl border border-void-700 bg-void-950 px-4 py-2.5 " +
                    "font-mono text-xs font-bold uppercase tracking-wider text-slate-300 " +
                    "transition-all hover:border-slate-500 hover:text-white"
                  }
                >
                  <FontAwesomeIcon icon={icons.reset} className="h-3.5 w-3.5" />
                  <span>Ripristina</span>
                </button>

                <button
                  type="button"
                  onClick={() => copiaCodice('ts')}
                  className={
                    "flex items-center gap-2 rounded-xl bg-lcars-orange px-4 py-2.5 " +
                    "font-mono text-xs font-bold uppercase tracking-wider text-void-950 " +
                    "transition-all hover:bg-lcars-amber"
                  }
                >
                  <FontAwesomeIcon icon={icons.copy} className="h-3.5 w-3.5" />
                  <span>Copia Codice TypeScript</span>
                </button>

                <button
                  type="button"
                  onClick={() => copiaCodice('json')}
                  className={
                    "flex items-center gap-2 rounded-xl border border-lcars-teal bg-lcars-teal/10 px-4 py-2.5 " +
                    "font-mono text-xs font-bold uppercase tracking-wider text-lcars-teal " +
                    "transition-all hover:bg-lcars-teal hover:text-void-950"
                  }
                >
                  <FontAwesomeIcon icon={icons.code} className="h-3.5 w-3.5" />
                  <span>Copia JSON</span>
                </button>

                <button
                  type="button"
                  onClick={scaricaJson}
                  className={
                    "flex items-center gap-2 rounded-xl border border-lcars-violet bg-lcars-violet/10 px-4 py-2.5 " +
                    "font-mono text-xs font-bold uppercase tracking-wider text-lcars-violet " +
                    "transition-all hover:bg-lcars-violet hover:text-void-950"
                  }
                >
                  <FontAwesomeIcon icon={icons.download} className="h-3.5 w-3.5" />
                  <span>Scarica File</span>
                </button>
              </div>
            </form>
          </div>

          {/* Colonna Anteprima Live (5 colonne su desktop) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex items-center justify-between">
              <h3 className="lcars-heading text-sm text-lcars-teal sm:text-base">
                Anteprima Scheda in Tempo Reale
              </h3>
              <button
                type="button"
                onClick={() => setMostraCodiceJson(!mostraCodiceJson)}
                className="font-mono text-xs text-lcars-skyblue underline hover:text-lcars-amber"
              >
                {mostraCodiceJson ? 'Mostra Scheda 3D' : 'Mostra Codice Sorgente'}
              </button>
            </div>

            {!mostraCodiceJson ? (
              <div className="sticky top-6">
                <p className="mb-2 font-mono text-xs text-slate-400">
                  Clicca sul pulsante 'Gira scheda' per verificare il fronte e il retro.
                </p>
                <div className="overflow-hidden rounded-3xl border border-void-700 bg-void-950/80 p-2">
                  <SpeciesFlipCard
                    species={datiForm}
                    onClose={() => {}}
                  />
                </div>
              </div>
            ) : (
              <div className="sticky top-6 flex flex-col gap-2">
                <pre className="max-h-[34rem] overflow-auto rounded-2xl border border-void-700 bg-void-950 p-4 font-mono text-xs text-lcars-cream">
                  {JSON.stringify(datiForm, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer LCARS */}
      <Footer />
    </div>
  )
}

export default EditorPage
