import type { Species, StarTrekSeries } from '../types/species';
import { species_A_I } from './species/species_A_I';
import { species_J_P } from './species/species_J_P';
import { species_Q_Z } from './species/species_Q_Z';

export const ALL_SPECIES: Species[] = [...species_A_I, ...species_J_P, ...species_Q_Z];
export const getFeaturedSpecies=()=>ALL_SPECIES.filter(s=>s.featured);
export const getSpeciesByLetter=(letter:string)=>letter==='ALL'?ALL_SPECIES:ALL_SPECIES.filter(s=>s.name.toLocaleUpperCase('it-IT').startsWith(letter.toLocaleUpperCase('it-IT')));
export const filterSpecies=(searchQuery:string,selectedLetter:string,selectedSeries:StarTrekSeries[])=>ALL_SPECIES.filter(s=>{
 const q=searchQuery.trim().toLocaleLowerCase('it-IT');
 const matchesSearch=!q || [s.name,s.originPlanet,s.shortDescription,s.classification,s.extendedDescription].some(v=>v.toLocaleLowerCase('it-IT').includes(q));
 const matchesLetter=selectedLetter==='ALL'||s.name.toLocaleUpperCase('it-IT').startsWith(selectedLetter.toLocaleUpperCase('it-IT'));
 const matchesSeries=selectedSeries.length===0||selectedSeries.some(x=>s.series.includes(x));
 return matchesSearch&&matchesLetter&&matchesSeries;
});
