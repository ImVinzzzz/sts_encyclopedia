# Starfleet Database // Specie Aliene e Civiltà

Enciclopedia alfabetica delle specie di Star Trek, in stile LCARS modernizzato.
React 18 + TypeScript + Tailwind CSS + React Router, con animazione flip 3D
sulle schede di dettaglio.

## Requisiti

- Node.js 18 o superiore
- npm (incluso con Node.js)

## Installazione

```bash
npm install
```

Questo comando installa automaticamente tutte le dipendenze elencate in
`package.json`, incluse:

```bash
# Già incluse in package.json — elencate qui per chiarezza:
npm install react-router-dom
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
npm install -D tailwindcss@^3 postcss autoprefixer
```

## Comandi disponibili

```bash
npm run dev       # avvia il server di sviluppo (Vite) con hot reload
npm run build     # type-check + build di produzione in /dist
npm run preview   # anteprima locale della build di produzione
npm run lint      # controllo statico del codice (oxlint)
```

## Deploy

Il progetto è pronto per essere collegato a **Vercel** tramite GitHub:
nessun `base` è impostato in `vite.config.ts`, quindi il deploy funziona
senza modifiche aggiuntive. Basta collegare il repository e Vercel rileva
automaticamente la configurazione Vite (build command `npm run build`,
output directory `dist`).

## Struttura del progetto

```
src/
├── types/
│   └── species.ts          # interfacce TypeScript (Species, SeriesTag, ...)
├── data/
│   ├── species-a-g.ts       # dataset specie A-G
│   ├── species-h-q.ts       # dataset specie H-Q
│   ├── species-r-z.ts       # dataset specie R-Z
│   ├── species.ts           # unione + ordinamento alfabetico
│   └── seriesMeta.ts        # etichette serie/film e alfabeto A-Z
├── hooks/
│   └── useSpeciesFilter.ts  # logica di ricerca/filtri (lettera, serie, testo)
├── utils/
│   └── icons.ts             # registro centralizzato icone FontAwesome
├── components/
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── AlphabetGrid.tsx
│   ├── SeriesFilter.tsx
│   ├── SeriesBadge.tsx
│   ├── SpeciesCarousel.tsx
│   ├── SpeciesMiniCard.tsx
│   ├── SpeciesFlipCard.tsx     # animazione flip 3D fronte/retro
│   ├── SpeciesDetailOverlay.tsx
│   ├── SpeciesGrid.tsx
│   ├── SpeciesPortrait.tsx     # placeholder visivo generato (no immagini reali)
│   ├── LcarsElbow.tsx
│   └── StarField.tsx
├── pages/
│   └── HomePage.tsx
├── App.tsx                  # routing (/ e /species/:id)
├── main.tsx
└── index.css                 # font Google, direttive Tailwind, stili base
```

## Note sui dati

Le 82 schede specie sono redatte in forma originale, basandosi sui fatti
canonici raccolti dalla voce Wikipedia "Specie di Star Trek" e dalla
conoscenza generale del franchise. Al posto di immagini reali (protette da
copyright), ogni scheda mostra una "scansione bio-sensoriale" generata via
CSS — una scelta stilistica coerente con l'idea di un archivio federale in
cui non tutti i dati visivi sono disponibili.

## Note sull'animazione flip 3D

L'animazione è realizzata con CSS 3D transforms puri (`perspective`,
`transform-style: preserve-3d`, `rotateY(180deg)`), supportati da tutti i
browser moderni (Chrome, Firefox, Safari, Edge). Rispetta automaticamente
la preferenza di sistema `prefers-reduced-motion`.
