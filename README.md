# Star Trek Species Encyclopedia

Interfaccia React + TypeScript + Tailwind CSS ispirata al sistema LCARS di Star Trek.

## Avvio

```bash
npm install
npm run dev
```

Build di produzione:

```bash
npm run build
npm run preview
```

## Struttura

- `src/types/species.ts` — tipi TypeScript
- `src/data/species/species_A_I.ts` — archivio A-I
- `src/data/species/species_J_P.ts` — archivio J-P
- `src/data/species/species_Q_Z.ts` — archivio Q-Z
- `src/data/speciesData.ts` — punto d'accesso e filtri
- `src/components/` — UI modulare
- `src/pages/HomePage.tsx` — pagina principale
- `src/styles/flip.css` — animazione 3D
