export type StarTrekSeries='TOS'|'TAS'|'TNG'|'DS9'|'VOY'|'ENT'|'DIS'|'PIC'|'SNW'|'LD'|'PRO'|'FILM';
export type Quadrant='Alfa'|'Beta'|'Gamma'|'Delta'|'Sconosciuto';
export interface Species{ id:string; name:string; originPlanet:string; quadrant:Quadrant; series:StarTrekSeries[]; featured?:boolean; imageUrl:string; shortDescription:string; extendedDescription:string; notableEpisodes:string[]; classification:string; }
