import { Species } from '../../types/species';

const img = (label: string) =>
  `https://placehold.co/500x500/0b192c/cc99cc?font=roboto&text=${encodeURIComponent(label)}`;

export const species_J_P: Species[] = [
  {
    id: 'jnaii',
    name: "J'naii",
    originPlanet: "J'naii",
    quadrant: 'Beta',
    series: ['TNG'],
    imageUrl: img("J'NAII"),
    shortDescription:
      'Specie androgina evoluta oltre la distinzione di genere, in cui l\'espressione di un\'identità sessuale definita è considerata devianza da correggere.',
    extendedDescription:
      'La società dei J\'naii ha eliminato ogni riferimento di genere dalla propria cultura, arrivando a sottoporre a "terapie psicotettoniche" chi manifesta un\'identità di genere definita. Il caso di Soren, membro dell\'equipaggio ausiliario dell\'Enterprise-D che si dichiarò femmina, portò alla luce le tensioni tra individualità e conformismo di questa civiltà.',
    notableEpisodes: ['TNG 5x17 - The Outcast'],
    classification: 'Umanoide androgino',
  },
  {
    id: 'jem-hadar',
    name: "Jem'Hadar",
    originPlanet: 'Quadrante Gamma (creati in laboratorio)',
    quadrant: 'Gamma',
    series: ['DS9'],
    featured: true,
    imageUrl: img("JEM'HADAR"),
    shortDescription:
      'Soldati geneticamente modificati e dipendenti da una droga chiamata Ketracel-white, forza militare d\'élite del Dominio.',
    extendedDescription:
      'Creati e clonati dai Fondatori per servire e proteggere il Dominio, i Jem\'Hadar nascono già adulti, con una durata di vita breve compensata da un addestramento istintivo al combattimento. La loro totale dipendenza dal Ketracel-white, somministrato dai Vorta, li rende leali per necessità biologica oltre che per fede religiosa verso i "Fondatori-dèi".',
    notableEpisodes: [
      'DS9 3x06 - The Abandoned',
      'DS9 6x02 - Rocks and Shoals',
    ],
    classification: 'Umanoide geneticamente ingegnerizzato',
  },
  {
    id: 'klingon',
    name: 'Klingon',
    originPlanet: "Qo'noS",
    quadrant: 'Beta',
    series: ['TOS', 'TNG', 'DS9', 'VOY', 'ENT', 'DIS', 'PIC', 'SNW', 'FILM'],
    featured: true,
    imageUrl: img('KLINGON'),
    shortDescription:
      'Guerrieri fieri e onorevoli dalla fronte cresta, la cui cultura ruota attorno a battaglia, onore e la promessa del Sto-Vo-Kor.',
    extendedDescription:
      'Da nemici storici a fragili alleati della Federazione dopo il Trattato di Khitomer, i Klingon vivono secondo un rigido codice d\'onore incentrato sul combattimento, la lealtà di Casata e il rispetto per una morte gloriosa. Guidati dall\'Alto Consiglio e legati alle antiche opere di Kahless il Solitario, restano una delle grandi potenze militari della galassia.',
    notableEpisodes: [
      'FILM 6 - Rotta verso l\'ignoto',
      'TNG 3x17 - Sins of the Father',
      'DS9 5x21 - Soldiers of the Empire',
    ],
    classification: 'Umanoide guerriero',
  },
  {
    id: 'kazon',
    name: 'Kazon',
    originPlanet: 'Nessun mondo fisso, organizzati in sette rivali',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('KAZON'),
    shortDescription:
      'Popolo diviso in sette rivali e in perenne conflitto per il controllo di risorse e territorio nel Quadrante Delta.',
    extendedDescription:
      'Un tempo schiavi dei Trabe, i Kazon si liberarono con la violenza ma non riuscirono mai a unificarsi, restando frammentati in sette come i Nistrim e gli Ogla. Il loro antagonismo verso la USS Voyager, appena giunta nel quadrante, fu una delle prime e più durature sfide dell\'equipaggio di Kathryn Janeway.',
    notableEpisodes: ['VOY 1x01 - Caretaker', 'VOY 2x26 - Basics'],
    classification: 'Umanoide',
  },
  {
    id: 'krenim',
    name: 'Krenim',
    originPlanet: 'Krenim (impero temporale)',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('KRENIM'),
    shortDescription:
      'Civiltà del Quadrante Delta dotata di un\'arma temporale capace di cancellare intere specie dalla storia.',
    extendedDescription:
      'Ossessionato dal ripristino dei propri confini imperiali, l\'Impero Krenim utilizzò una nave armata di un\'arma cronologica per riscrivere la storia cancellando civiltà intere dalla linea temporale, trascinando la Voyager in un logorante "Anno d\'Inferno" fatto di realtà mutevoli.',
    notableEpisodes: ['VOY 4x08 - Year of Hell'],
    classification: 'Umanoide',
  },
  {
    id: 'kelvani',
    name: 'Kelvani (Kelvan)',
    originPlanet: 'Galassia di Andromeda',
    quadrant: 'Sconosciuto',
    series: ['TOS'],
    imageUrl: img('KELVANI'),
    shortDescription:
      'Esploratori extragalattici dalla forma naturale simile a tentacoli multipli, costretti a indossare corpi umanoidi per sopravvivere nella nostra galassia.',
    extendedDescription:
      'Inviati in avanscoperta dalla loro galassia morente, i Kelvani presero il controllo dell\'Enterprise assumendo sembianze umane per pilotarla verso casa. Il confronto con l\'equipaggio della nave, che fece leva sulle nuove emozioni umane percepite dagli invasori, portò a una tregua inattesa.',
    notableEpisodes: ['TOS 2x22 - By Any Other Name'],
    classification: 'Forma di vita extragalattica (in corpo umanoide)',
  },
  {
    id: 'ligoniani',
    name: 'Ligoniani',
    originPlanet: 'Ligon II',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('LIGONIANI'),
    shortDescription:
      'Società dai costumi cavallereschi rigidi, in cui il duello rituale regola dispute d\'onore anche mortali.',
    extendedDescription:
      'Detentori di un vaccino essenziale per la Federazione, i Ligoniani insistettero per stringere accordi diplomatici secondo le proprie tradizioni, incluso un duello a cui il capitano Picard fu costretto a partecipare per difendere l\'onore dell\'ufficiale Tasha Yar.',
    notableEpisodes: ['TNG 1x04 - Code of Honor'],
    classification: 'Umanoide',
  },
  {
    id: 'malon',
    name: 'Malon',
    originPlanet: 'Malon Prime',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('MALON'),
    shortDescription:
      'Civiltà industriale del Quadrante Delta specializzata nello smaltimento di scorie radioattive teoniche, spesso scaricate su altri mondi.',
    extendedDescription:
      'Dipendenti da un\'economia costruita interamente sullo smaltimento di rifiuti tossici, i Malon trasportano le proprie scorie su enormi navi cisterna, spesso disfandosene senza scrupoli in territori altrui. Il loro incontro con la Voyager sollevò questioni etiche sull\'inquinamento interstellare e la responsabilità ambientale.',
    notableEpisodes: ['VOY 5x01 - Night', 'VOY 5x21 - Juggernaut'],
    classification: 'Umanoide',
  },
  {
    id: 'medusani',
    name: 'Medusani',
    originPlanet: 'Medusa',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('MEDUSANI'),
    shortDescription:
      'Forme di vita energetiche non corporee il cui solo aspetto visivo può indurre follia negli umani, ma dotate di straordinaria genialità nella navigazione.',
    extendedDescription:
      'Percepiti come pura energia luminosa priva di forma fisica stabile, i Medusani sono navigatori spaziali ineguagliati, capaci di calcolare rotte impossibili per la mente umana. Il loro ambasciatore, trasportato in un contenitore opaco per proteggere l\'equipaggio, si dimostrò decisivo nel salvare l\'Enterprise durante una crisi di navigazione.',
    notableEpisodes: ['TOS 3x05 - Is There in Truth No Beauty?'],
    classification: 'Forma di vita energetica non corporea',
  },
  {
    id: 'metron',
    name: 'Metron',
    originPlanet: 'Sconosciuto',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('METRON'),
    shortDescription:
      'Specie estremamente evoluta ed energetica, capace di manipolare spazio e materia per mettere alla prova altre civiltà.',
    extendedDescription:
      'Considerandosi troppo avanzati per intervenire direttamente nei conflitti altrui, i Metron costrinsero Kirk e un comandante gorn a duellare su un pianeta artificiale per dirimere una disputa territoriale, osservando l\'esito come un esperimento sulla natura delle specie "primitive".',
    notableEpisodes: ['TOS 1x18 - Arena'],
    classification: 'Forma di vita energetica avanzata',
  },
  {
    id: 'mari',
    name: 'Mari',
    originPlanet: 'Mari',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('MARI'),
    shortDescription:
      'Società telepatica assolutamente pacifista, che criminalizza persino i pensieri violenti captati dai propri concittadini.',
    extendedDescription:
      'Fiera della propria società priva di violenza, la civiltà Mari monitora costantemente i pensieri dei cittadini per individuare ed espellere chiunque nutra impulsi aggressivi, sollevando interrogativi inquietanti sul confine tra prevenzione del crimine e libertà di pensiero quando un membro dell\'equipaggio della Voyager ne fu vittima.',
    notableEpisodes: ['VOY 4x10 - Random Thoughts'],
    classification: 'Umanoide telepatico',
  },
  {
    id: 'nausicaani',
    name: 'Nausicaani',
    originPlanet: 'Nausicaa',
    quadrant: 'Beta',
    series: ['TNG'],
    imageUrl: img('NAUSICAANI'),
    shortDescription: 'Umanoidi alti e insettoidi, spesso attivi come mercenari e contrabbandieri ai confini della Federazione.',
    extendedDescription:
      'Temuti per la loro forza fisica e propensione alla violenza, i Nausicaani sono frequentemente coinvolti in traffici illeciti nello spazio di confine. Un giovane Jean-Luc Picard fu accoltellato al cuore da un Nausicaano durante una rissa in una bettola, episodio che segnò profondamente la sua gioventù.',
    notableEpisodes: ['TNG 6x15 - Tapestry'],
    classification: 'Umanoide insettoide',
  },
  {
    id: 'nacene',
    name: 'Nacene (Custodi)',
    originPlanet: 'Sconosciuto (esseri extra-dimensionali)',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('NACENE'),
    shortDescription:
      'Forme di vita extra-dimensionali estremamente potenti, tra cui il "Custode" che catapultò la Voyager nel Quadrante Delta.',
    extendedDescription:
      'Giunti nel Quadrante Delta da un\'altra dimensione, i Nacene provocarono danni ecologici involontari a un pianeta abitato dagli Ocampa; per rimediare, un membro della specie, il "Custode", trascorse secoli fornendo acqua e protezione a quel popolo, prima di trascinare accidentalmente la Voyager attraverso la galassia nel tentativo di trovare un successore.',
    notableEpisodes: ['VOY 1x01 - Caretaker', 'VOY 2x10 - Cold Fire'],
    classification: 'Forma di vita extra-dimensionale',
  },
  {
    id: 'ocampa',
    name: 'Ocampa',
    originPlanet: 'Ocampa',
    quadrant: 'Delta',
    series: ['VOY'],
    featured: true,
    imageUrl: img('OCAMPA'),
    shortDescription:
      'Specie dalla vita breve, di soli nove anni, ma dotata di potenziale psionico latente enorme, protetta a lungo dal "Custode".',
    extendedDescription:
      'Costretti a vivere sottoterra dopo un disastro ecologico causato secoli prima dai Nacene, gli Ocampa dipendono da fonti d\'acqua fornite artificialmente, pur possedendo capacità telepatiche e telecinetiche straordinarie mai pienamente sviluppate. Kes, membro dell\'equipaggio della Voyager, offrì al pubblico uno sguardo ravvicinato sulla loro breve ma intensa esistenza.',
    notableEpisodes: ['VOY 1x01 - Caretaker', 'VOY 4x02 - The Gift'],
    classification: 'Umanoide psionico',
  },
  {
    id: 'organiani',
    name: 'Organiani',
    originPlanet: 'Organia',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('ORGANIANI'),
    shortDescription:
      'Antichissime forme di vita energetica pura, camuffate da placidi contadini umanoidi per osservare senza essere disturbate.',
    extendedDescription:
      'Dietro l\'apparenza di una civiltà agricola arretrata, gli Organiani nascondevano un\'evoluzione così avanzata da renderli quasi puro pensiero. Quando Klingon e Federazione minacciarono di trasformare il loro pianeta in un campo di battaglia, gli Organiani imposero con facilità disarmante un trattato di pace, rivelando il proprio immenso potere.',
    notableEpisodes: ['TOS 1x26 - Errand of Mercy'],
    classification: 'Forma di vita energetica non corporea',
  },
  {
    id: 'orioniani',
    name: 'Orioniani',
    originPlanet: 'Rigel VIII (spazio orioniano)',
    quadrant: 'Beta',
    series: ['TOS', 'ENT', 'DIS', 'FILM'],
    imageUrl: img('ORIONIANI'),
    shortDescription:
      'Umanoidi dalla pelle verde, storicamente associati a pirateria, contrabbando e a un fiorente mercato di schiavitù mai del tutto debellato.',
    extendedDescription:
      'Ufficialmente neutrali rispetto ai grandi imperi galattici, i Sindacati orioniani operano da secoli ai margini della legalità, controllando rotte commerciali illecite in tutto lo spazio di confine. Le celebri "schiave verdi" orioniane, spesso più calcolatrici dei loro apparenti padroni, sono un tòpos ricorrente fin dalla serie originale.',
    notableEpisodes: ['TOS 2x10 - Journey to Babel', 'ENT 4x17 - Bound'],
    classification: 'Umanoide',
  },
  {
    id: 'pakled',
    name: 'Pakled',
    originPlanet: 'Pakled Prime',
    quadrant: 'Alfa',
    series: ['TNG', 'LD'],
    imageUrl: img('PAKLED'),
    shortDescription:
      'Umanoidi tozzi dall\'apparente semplicità mentale, che compensano la scarsa tecnologia propria rubando quella altrui.',
    extendedDescription:
      'Dietro il celebre mantra "Siamo forti, siamo intelligenti", i Pakled nascondono una strategia opportunista: attirano navi più avanzate fingendo guasti per poi sottrarne tecnologia e componenti. Sottovalutarli si è rivelato spesso un errore per equipaggi della Flotta Stellare.',
    notableEpisodes: ['TNG 2x17 - Samaritan Snare'],
    classification: 'Umanoide',
  },
  {
    id: 'parasiti',
    name: 'Parassiti Neurali',
    originPlanet: 'Sconosciuto',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('PARASSITI'),
    shortDescription:
      'Organismi simbionti capaci di controllare la mente ospite infiltrandosi nel tronco encefalico, arrivati a minacciare l\'Alto Comando della Flotta Stellare.',
    extendedDescription:
      'Camuffati da funzionari e ufficiali di alto rango, questi parassiti insettoidi si erano infiltrati silenziosamente ai vertici della Flotta Stellare, pianificando un\'invasione più ampia prima di essere scoperti dal capitano Picard e dal comandante Riker, che ne provocarono l\'esposizione pubblica e la disfatta.',
    notableEpisodes: ['TNG 1x25 - Conspiracy'],
    classification: 'Organismo parassita',
  },
  {
    id: 'ressikani',
    name: 'Ressikani (Picardi di Kataan)',
    originPlanet: 'Kataan (pianeta distrutto)',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('RESSIKANI'),
    shortDescription:
      'Popolo estinto di un pianeta la cui civiltà fu spazzata via dal proprio sole, sopravvissuto solo grazie a una sonda-messaggio lanciata nello spazio.',
    extendedDescription:
      'Consapevoli dell\'imminente fine del proprio mondo, gli abitanti di Kataan lanciarono una sonda contenente un intero programma di vita simulata, capace di far vivere a chiunque la incontrasse un\'intera esistenza nel villaggio di Ressik. Il capitano Picard, colpito dalla sonda, visse così per il resto della sua vita un\'intera esistenza come Kamin, portando poi con sé per sempre il ricordo di quel popolo scomparso.',
    notableEpisodes: ['TNG 5x25 - The Inner Light'],
    classification: 'Umanoide (civiltà estinta)',
  },
  {
    id: 'pah-wraith',
    name: 'Pah-wraith',
    originPlanet: 'Corridoio Celeste (esiliati dal wormhole bajoriano)',
    quadrant: 'Alfa',
    series: ['DS9'],
    imageUrl: img('PAH-WRAITH'),
    shortDescription:
      'Entità non corporee un tempo residenti nel wormhole bajoriano, venerate come demoni dai loro oppositori religiosi e cacciate dai Profeti.',
    extendedDescription:
      'Esiliati dal Corridoio Celeste in epoca remota, i Pah-wraith rappresentano nella teologia bajoriana la controparte oscura dei Profeti venerati come divinità. La loro influenza corruttrice su fedeli e antagonisti, incluso l\'ex Gul cardassiano Dukat, alimentò alcune delle trame più cupe dell\'ultima fase di Deep Space Nine.',
    notableEpisodes: ['DS9 5x05 - The Assignment', 'DS9 7x25 - What You Leave Behind'],
    classification: 'Entità incorporea',
  },
];
