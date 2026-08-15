# Starfleet Database // Specie Aliene e Civiltà

Enciclopedia delle specie e civiltà di Star Trek, realizzata in stile LCARS modernizzato con React 18, TypeScript, Tailwind CSS, React Router e animazioni 3D flip card sulle schede di dettaglio.

## Funzionalità Principali

- **Registro Completo delle Specie**: Esplorazione alfabetica, ricerca istantanea e filtri per serie Star Trek (TOS, TAS, TNG, DS9, VOY, ENT, DIS, PIC, SNW, LD, PRO, FILM).
- **Schede Dettaglio con Animazione 3D Flip**: Visualizzazione fronte/retro con classificazione biologica, quadrante galattico, pianeta d'origine, serie di comparsa, sinossi ed episodi chiave.
- **Ritratti Visivi e Scansione Bio-Sensoriale**: Supporto per immagini reali con protezione dai blocchi hotlink (`referrerPolicy="no-referrer"`) e fallback automatico a una scansione bio-sensoriale stilizzata LCARS generata da CSS per le specie prive di foto.
- **Editor Schede Specie (`/editor`)**:
  - Modifica rapida delle schede esistenti tramite selettore.
  - Creazione di nuove specie con autocompilazione dello slug univoco.
  - Form ottimizzato con input anagrafici, menù a tendina (classificazione e quadranti), badge toggle per le serie TV e gestione dinamica degli episodi.
  - Anteprima live 3D della scheda in tempo reale.
  - Esportazione istantanea del codice TypeScript pronto per l'inclusione nel database o download JSON.
- **Pulsante "Torna in Cima"**: Componente circolare LCARS fluttuante che appare allo scorrimento verticale e consente un ritorno fluido all'inizio della pagina.
- **Footer LCARS Integrato**: Navigazione contestuale tra database ed editor, stato del terminale federale e disclaimer legale sui copyright.

## Requisiti

- Node.js 18 o superiore
- npm (incluso con Node.js)

## Installazione

```bash
npm install
```

Questo comando installa automaticamente tutte le dipendenze elencate in `package.json`:
- `react`, `react-dom`, `react-router-dom`
- `@fortawesome/react-fontawesome`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/fontawesome-svg-core`
- `tailwindcss`, `postcss`, `autoprefixer`

## Comandi disponibili

```bash
npm run dev       # avvia il server di sviluppo (Vite) con hot reload
npm run build     # type-check (tsc) + build di produzione in /dist
npm run preview   # anteprima locale della build di produzione
npm run lint      # controllo statico del codice (oxlint)
```

## Deploy

Il progetto è pronto per essere distribuito su piattaforme come **Vercel** o **Netlify**:
- Build command: `npm run build`
- Output directory: `dist`

## Struttura del Progetto

```
src/
├── types/
│   └── species.ts            # Tipi TypeScript (Species, SeriesTag, Quadrant, ...)
├── data/
│   ├── species-a-g.ts         # Dataset specie A-G
│   ├── species-h-q.ts         # Dataset specie H-Q
│   ├── species-r-z.ts         # Dataset specie R-Z
│   ├── species.ts             # Unione dataset e ordinamento alfabetico
│   └── seriesMeta.ts          # Metadati serie TV e alfabeto
├── hooks/
│   └── useSpeciesFilter.ts    # Hook per ricerca, filtri alfabetici e serie
├── utils/
│   └── icons.ts               # Registro centralizzato icone FontAwesome
├── components/
│   ├── Header.tsx             # Intestazione principale LCARS
│   ├── Footer.tsx             # Piè di pagina LCARS con link e disclaimer
│   ├── ScrollToTop.tsx        # Pulsante fluttuante di ritorno a inizio pagina
│   ├── SearchBar.tsx          # Barra di ricerca testuale
│   ├── AlphabetGrid.tsx       # Filtro per lettera iniziale A-Z
│   ├── SeriesFilter.tsx       # Filtro per serie Star Trek
│   ├── SeriesBadge.tsx        # Badge grafici delle serie
│   ├── SpeciesCarousel.tsx    # Carousel specie in evidenza
│   ├── SpeciesMiniCard.tsx    # Card anteprima compatta nella griglia
│   ├── SpeciesFlipCard.tsx    # Scheda interattiva con animazione flip 3D
│   ├── SpeciesDetailOverlay.tsx # Finestra modale di dettaglio
│   ├── SpeciesGrid.tsx        # Griglia responsiva dei risultati
│   ├── SpeciesPortrait.tsx    # Ritratto specie con supporto immagini e fallback LCARS
│   ├── LcarsElbow.tsx         # Elemento grafico curvilineo LCARS
│   └── StarField.tsx          # Sfondo animato a campo stellare
├── pages/
│   ├── HomePage.tsx           # Pagina principale dell'enciclopedia
│   └── EditorPage.tsx         # Pagina per la modifica e creazione delle schede
├── App.tsx                    # Routing dell'applicazione e componenti globali
├── main.tsx                   # Entry point React
└── index.css                   # Stili globali, font e direttive Tailwind CSS
```

## Note Legali e Copyright

Sito web amatoriale realizzato a scopo divulgativo e senza fini di lucro. Non si intende infrangere alcun copyright. I marchi registrati, i nomi dei personaggi, le specie e i loghi legati al franchise di Star Trek appartengono ai rispettivi proprietari (Paramount Global / CBS Studios).
