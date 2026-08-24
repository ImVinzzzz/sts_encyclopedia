import { ChangeEvent, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload, faFileCode, faPlus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/common/Footer';
import SpeciesCardFlip from '../components/cards/SpeciesCardFlip';
import SpeciesDetailsModal from '../components/cards/SpeciesDetailsModal';
import { ALL_SPECIES } from '../data/speciesData';
import { ALL_SERIES, Quadrant, Species, StarTrekSeries } from '../types/species';

const QUADRANTS: Quadrant[] = ['Alfa', 'Beta', 'Gamma', 'Delta', 'Sconosciuto'];

const emptySpecies = (): Species => ({
  id: '',
  name: '',
  originPlanet: '',
  quadrant: 'Sconosciuto',
  series: [],
  featured: false,
  imageUrl: '',
  shortDescription: '',
  extendedDescription: '',
  notableEpisodes: [],
  classification: '',
});

export default function EditorPage() {
  const [selectedId, setSelectedId] = useState('NEW');
  const [form, setForm] = useState<Species>(emptySpecies);
  const [episodesText, setEpisodesText] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const targetFile = useMemo(() => getTargetFile(form.name), [form.name]);
  const draftSpecies = useMemo(
    () => ({
      ...form,
      id: form.id || slugify(form.name),
      notableEpisodes: parseEpisodes(episodesText),
    }),
    [form, episodesText]
  );
  const generatedCode = useMemo(() => serializeSpecies(draftSpecies), [draftSpecies]);
  const previewSpecies = useMemo<Species>(
    () => ({
      ...draftSpecies,
      id: draftSpecies.id || 'anteprima-specie',
      name: draftSpecies.name || 'Nuova specie',
      originPlanet: draftSpecies.originPlanet || 'Pianeta non specificato',
      classification: draftSpecies.classification || 'Tipologia non specificata',
      imageUrl:
        draftSpecies.imageUrl ||
        'https://placehold.co/500x500/0b192c/ff9900?font=roboto&text=ANTEPRIMA',
      shortDescription:
        draftSpecies.shortDescription || 'La descrizione breve apparirà in questo spazio.',
      extendedDescription:
        draftSpecies.extendedDescription || 'La descrizione completa apparirà sul retro della scheda.',
    }),
    [draftSpecies]
  );

  const selectSpecies = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;
    setSelectedId(id);
    if (id === 'NEW') {
      setForm(emptySpecies());
      setEpisodesText('');
      return;
    }
    const species = ALL_SPECIES.find((item) => item.id === id);
    if (species) {
      setForm({ ...species, series: [...species.series], notableEpisodes: [...species.notableEpisodes] });
      setEpisodesText(species.notableEpisodes.join('\n'));
    }
  };

  const update = <K extends keyof Species>(key: K, value: Species[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const toggleSeries = (series: StarTrekSeries) => {
    update(
      'series',
      form.series.includes(series)
        ? form.series.filter((item) => item !== series)
        : [...form.series, series]
    );
  };

  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${form.id || slugify(form.name) || 'nuova-specie'}.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-8">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono-lcars text-xs uppercase tracking-widest text-lcars-purple">Database LCARS</p>
            <h1 className="font-lcars text-3xl uppercase tracking-wide text-lcars-orange sm:text-4xl">Editor specie</h1>
          </div>
          <a href="#/" className="flex items-center gap-2 rounded-full border border-lcars-blue px-4 py-2 font-lcars text-sm uppercase text-lcars-blue transition hover:bg-lcars-blue hover:text-slate-950">
            <FontAwesomeIcon icon={faArrowLeft} /> Torna all'archivio
          </a>
        </div>

        <section className="mb-6 rounded-2xl border border-lcars-purple/50 bg-slate-900/70 p-5">
          <label className="mb-2 block font-mono-lcars text-xs uppercase tracking-wider text-lcars-purple">Scheda da modificare</label>
          <select value={selectedId} onChange={selectSpecies} className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-sm text-slate-200 outline-none focus:border-lcars-orange">
            <option value="NEW">+ Nuova specie</option>
            {ALL_SPECIES.map((species) => <option key={species.id} value={species.id}>{species.name}</option>)}
          </select>
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <form className="grid gap-5 rounded-2xl border-2 border-lcars-orange bg-slate-900/80 p-5 sm:grid-cols-2 sm:p-7" onSubmit={(event) => event.preventDefault()}>
          <TextField label="Nome della specie" value={form.name} onChange={(value) => update('name', value)} required />
          <TextField label="ID (generato dal nome se vuoto)" value={form.id} onChange={(value) => update('id', value)} placeholder={slugify(form.name)} />
          <TextField label="Pianeta di origine" value={form.originPlanet} onChange={(value) => update('originPlanet', value)} />
          <label className="block">
            <FieldLabel>Quadrante</FieldLabel>
            <select value={form.quadrant} onChange={(event) => update('quadrant', event.target.value as Quadrant)} className="field-control">
              {QUADRANTS.map((quadrant) => <option key={quadrant}>{quadrant}</option>)}
            </select>
          </label>
          <TextField label="Tipologia / classificazione" value={form.classification} onChange={(value) => update('classification', value)} />
          <TextField label="URL immagine" value={form.imageUrl} onChange={(value) => update('imageUrl', value)} type="url" />

          <fieldset className="sm:col-span-2">
            <legend className="mb-2 font-mono-lcars text-xs uppercase tracking-wider text-lcars-blue">Serie e film</legend>
            <div className="flex flex-wrap gap-2">
              {ALL_SERIES.map((series) => (
                <label key={series} className={`cursor-pointer rounded-full px-3 py-1.5 font-mono-lcars text-xs font-bold ${form.series.includes(series) ? 'bg-lcars-blue text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={form.series.includes(series)} onChange={() => toggleSeries(series)} className="sr-only" />
                  {series}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-center gap-3 rounded-xl bg-slate-800/70 p-4 sm:col-span-2">
            <input type="checkbox" checked={Boolean(form.featured)} onChange={(event) => update('featured', event.target.checked)} className="h-5 w-5 accent-orange-500" />
            <span className="font-mono-lcars text-xs uppercase tracking-wider text-lcars-gold">Metti in evidenza nel carosello</span>
          </label>

          <TextArea label="Descrizione breve" value={form.shortDescription} onChange={(value) => update('shortDescription', value)} rows={3} />
          <TextArea label="Descrizione completa" value={form.extendedDescription} onChange={(value) => update('extendedDescription', value)} rows={6} />
          <label className="block sm:col-span-2">
            <FieldLabel>Episodi chiave — uno per riga, formato “VOY 1x01 - Caretaker”</FieldLabel>
            <textarea value={episodesText} onChange={(event) => setEpisodesText(event.target.value)} rows={5} className="field-control resize-y font-mono-lcars" />
          </label>
        </form>

        <aside className="rounded-2xl border border-lcars-blue/40 bg-slate-900/70 p-4 lg:sticky lg:top-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="font-lcars text-sm uppercase tracking-wider text-lcars-blue">Anteprima scheda</p>
              <p className="font-mono-lcars text-[9px] uppercase tracking-wide text-slate-500">Si aggiorna in tempo reale</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-lcars-red/20 px-2 py-1 font-mono-lcars text-[9px] uppercase text-red-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" /> Live
            </span>
          </div>
          <SpeciesCardFlip species={previewSpecies} onSelect={() => setIsPreviewOpen(true)} />
          <p className="mt-3 text-center font-mono-lcars text-[9px] uppercase tracking-wide text-slate-500">
            Clicca la mini-scheda per vedere fronte e retro
          </p>
        </aside>
        </div>

        <section className="mt-6 rounded-2xl border border-lcars-gold/50 bg-slate-900/80 p-5 sm:p-7">
          <div className="mb-4 flex items-start gap-3">
            <FontAwesomeIcon icon={faFileCode} className="mt-1 text-lcars-gold" />
            <div>
              <h2 className="font-lcars text-lg uppercase tracking-wide text-lcars-gold">Codice pronto da inserire</h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {selectedId === 'NEW' ? 'Aggiungi' : 'Sostituisci'} questo oggetto nel file <code className="text-lcars-blue">src/data/species/{targetFile}</code>, dentro l'array esportato e prima della parentesi <code className="text-lcars-blue">];</code>.
                {selectedId !== 'NEW' && ' Cerca la scheda con lo stesso ID e sostituiscila integralmente.'}
              </p>
            </div>
          </div>
          <pre className="max-h-96 overflow-auto rounded-xl bg-slate-950 p-4 text-xs leading-relaxed text-slate-300"><code>{generatedCode}</code></pre>
          <button type="button" onClick={downloadCode} disabled={!form.name.trim()} className="mt-4 flex items-center gap-2 rounded-full bg-lcars-orange px-5 py-2.5 font-lcars text-sm uppercase tracking-wide text-slate-950 transition hover:bg-lcars-gold disabled:cursor-not-allowed disabled:opacity-40">
            <FontAwesomeIcon icon={form.name ? faDownload : faPlus} /> Scarica codice specie
          </button>
        </section>
      </main>
      <SpeciesDetailsModal
        species={isPreviewOpen ? previewSpecies : null}
        onClose={() => setIsPreviewOpen(false)}
      />
      <Footer showEditorButton={false} />
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block font-mono-lcars text-xs uppercase tracking-wider text-lcars-orange">{children}</span>;
}

function TextField({ label, value, onChange, type = 'text', placeholder, required }: { label: string; value: string; onChange: (value: string) => void; type?: string; placeholder?: string; required?: boolean }) {
  return <label className="block"><FieldLabel>{label}</FieldLabel><input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} required={required} className="field-control" /></label>;
}

function TextArea({ label, value, onChange, rows }: { label: string; value: string; onChange: (value: string) => void; rows: number }) {
  return <label className="block"><FieldLabel>{label}</FieldLabel><textarea value={value} onChange={(event) => onChange(event.target.value)} rows={rows} className="field-control resize-y" /></label>;
}

function parseEpisodes(value: string) {
  return value.split('\n').map((line) => line.trim()).filter(Boolean);
}

function slugify(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getTargetFile(name: string) {
  const letter = name.trim().charAt(0).toUpperCase();
  if (letter >= 'A' && letter <= 'I') return 'species_A_I.ts';
  if (letter >= 'J' && letter <= 'P') return 'species_J_P.ts';
  return 'species_Q_Z.ts';
}

function serializeSpecies(species: Species) {
  return `${JSON.stringify(species, null, 2)},`;
}
