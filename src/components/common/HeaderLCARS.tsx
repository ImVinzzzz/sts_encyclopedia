import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish, faDatabase } from '@fortawesome/free-solid-svg-icons';
export function HeaderLCARS({total}:{total:number}){return <header className="mb-7">
  <div className="flex items-stretch gap-2 mb-4 h-16">
    <div className="w-14 sm:w-20 bg-[#cc99cc] rounded-l-full"/><div className="flex-1 bg-[#ff9900] px-5 flex items-center justify-between"><div><div className="text-[10px] tracking-[.35em] font-bold text-slate-950">FEDERATION DATABASE / LCARS</div><h1 className="text-xl sm:text-3xl font-black tracking-widest text-slate-950">STAR TREK SPECIES ENCYCLOPEDIA</h1></div><FontAwesomeIcon icon={faSatelliteDish} className="hidden sm:block text-2xl text-slate-950"/></div><div className="w-10 bg-[#99ccff]"/>
  </div>
  <div className="rounded-2xl border border-sky-300/20 bg-slate-950/70 shadow-lcars p-4 sm:p-5 flex gap-4 items-start"><FontAwesomeIcon icon={faDatabase} className="text-[#ffcc00] mt-1"/><div className="text-sm leading-6 text-slate-300"><span className="text-[#ffcc00] font-bold tracking-widest">FEDERATION DATABASE LOG //</span> Archivio alfabetico delle specie e forme di vita presenti nel dataset di riferimento. Seleziona una lettera, una serie o usa la ricerca per interrogare il database. <span className="text-sky-300">RECORDS: {total}</span></div></div>
</header>}
