import { Species } from '../../types/species';

const img = (label: string) =>
  `https://placehold.co/500x500/0b192c/99ccff?font=roboto&text=${encodeURIComponent(label)}`;

export const species_Q_Z: Species[] = [
  {
    id: 'q-continuum',
    name: 'Q (Continuum)',
    originPlanet: 'Continuum Q (dimensione extra-spaziale)',
    quadrant: 'Sconosciuto',
    series: ['TNG', 'DS9', 'VOY', 'PIC', 'LD'],
    featured: true,
    imageUrl: img('Q CONTINUUM'),
    shortDescription:
      'Esseri onnipotenti capaci di manipolare tempo, spazio e materia a piacimento, che si divertono a mettere alla prova l\'umanità.',
    extendedDescription:
      'Il Continuum Q esiste in un piano di realtà dove le sue regole abituali non si applicano, popolato da entità pressoché onnipotenti annoiate dalla propria stessa esistenza infinita. Il "Q" incontrato per la prima volta dall\'Enterprise-D processò l\'intera umanità mettendola alla prova a più riprese, in un rapporto di sfida e provocazione durato decenni con il capitano Picard.',
    notableEpisodes: [
      'Star Trek: The Next Generation - "Encounter at Farpoint"',
      'Star Trek: The Next Generation - "Q Who"',
      'Star Trek: Picard - stagione 2',
    ],
    classification: 'Entità onnipotente extra-dimensionale',
  },
  {
    id: 'qomar',
    name: 'Qomar',
    originPlanet: 'Qomar',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('QOMAR'),
    shortDescription:
      'Civiltà tecnologicamente avanzata e appassionata di musica sperimentale, priva però di una vera tradizione melodica.',
    extendedDescription:
      'Affascinati dalla musica classica introdotta dal programma olografico del Dottore della Voyager, i Qomar lo elevarono a celebrità in una società dove la composizione musicale era considerata solo di recente una forma d\'arte, portando l\'ologramma medico a confrontarsi con fama e vanità.',
    notableEpisodes: ['Star Trek: Voyager - "Virtuoso"'],
    classification: 'Umanoide',
  },
  {
    id: 'romulani',
    name: 'Romulani',
    originPlanet: 'Romulus (ex Vulcan, colonizzato in antichità)',
    quadrant: 'Beta',
    series: ['TOS', 'TNG', 'DS9', 'ENT', 'PIC', 'DIS', 'FILM'],
    featured: true,
    imageUrl: img('ROMULANI'),
    shortDescription:
      'Cugini dei Vulcaniani che rifiutarono la via della logica, costruendo un impero segreto e diffidente guidato dal Senato e dal Tal Shiar.',
    extendedDescription:
      'Discendenti di Vulcaniani che millenni fa scelsero l\'esilio pur di non abbracciare la logica di Surak, i Romulani costruirono un impero fondato su segretezza, onore militare e diffidenza verso l\'esterno. La distruzione di Romulus per la supernova della loro stella, decenni dopo la Guerra del Dominio, segnò una delle tragedie più grandi della loro storia recente.',
    notableEpisodes: [
      'Star Trek: The Original Series - "Balance of Terror"',
      'Star Trek: The Next Generation - "Unification"',
      'Star Trek: Picard - stagione 1',
    ],
    classification: 'Umanoide',
  },
  {
    id: 'remani',
    name: 'Remani',
    originPlanet: 'Remus',
    quadrant: 'Beta',
    series: ['FILM', 'PIC'],
    imageUrl: img('REMANI'),
    shortDescription:
      'Popolo sfruttato come manodopera nelle miniere di Remus, tenuto ai margini dell\'Impero Romulano nonostante secoli di servizio militare.',
    extendedDescription:
      'Considerati sub-umani dai Romulani nonostante costituiscano il nerbo delle forze speciali dell\'Impero (i temuti Reman Warbird), i Remani vivono in condizioni di sfruttamento nelle miniere sotterranee del proprio pianeta gemello di Romulus. Shinzon, clone romulano cresciuto tra loro, guidò una rivolta remana che sfidò direttamente il Senato di Romulus.',
    notableEpisodes: ['Star Trek: Nemesis'],
    classification: 'Umanoide',
  },
  {
    id: 'risiani',
    name: 'Risiani',
    originPlanet: 'Risa',
    quadrant: 'Alfa',
    series: ['TNG', 'DS9', 'PIC'],
    imageUrl: img('RISIANI'),
    shortDescription:
      'Popolo ospitale di un pianeta dedicato interamente al piacere e allo svago, meta turistica prediletta in tutta la Federazione.',
    extendedDescription:
      'Il pianeta Risa, meteorologicamente controllato per garantire condizioni perfette tutto l\'anno, ha costruito la propria economia e cultura attorno all\'accoglienza dei visitatori, con tradizioni come i fiori "jamaharon" diventate proverbiali in tutta la Federazione come simbolo di relax e piacere.',
    notableEpisodes: ['Star Trek: The Next Generation - "Captain\'s Holiday"', 'Star Trek: Deep Space Nine - "Let He Who Is Without Sin..."'],
    classification: 'Umanoide',
  },
  {
    id: 'suliban',
    name: 'Suliban',
    originPlanet: 'Nessun mondo fisso, diaspora nomade',
    quadrant: 'Beta',
    series: ['ENT'],
    imageUrl: img('SULIBAN'),
    shortDescription:
      'Popolo nomade privo di pianeta natale, in parte alterato geneticamente dal misterioso Cabale Suliban per servire agenti temporali futuri.',
    extendedDescription:
      'Dispersi nello spazio dopo l\'abbandono forzato del proprio mondo d\'origine, molti Suliban accettarono modifiche genetiche capaci di donare loro abilità sovrumane, offerte in cambio di lealtà al Cabale Suliban, un\'organizzazione manipolata da agenti provenienti dal futuro nella Guerra Temporale.',
    notableEpisodes: ['Star Trek: Enterprise - "Broken Bow"', 'Star Trek: Enterprise - "Detained"'],
    classification: 'Umanoide geneticamente modificato',
  },
  {
    id: 'sheliak',
    name: 'Sheliak',
    originPlanet: 'Sheliak Corporate',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('SHELIAK'),
    shortDescription:
      'Forma di vita cristallina non umanoide, rigidamente burocratica e legalista fin nei minimi dettagli contrattuali.',
    extendedDescription:
      'Considerando gli umani poco più che forme di vita microbica, gli Sheliak interagiscono con la Federazione attraverso un trattato di centinaia di pagine interpretato alla lettera. Quando pretesero lo sgombero immediato di una colonia federale dal loro spazio, il capitano Picard dovette sfruttare proprio i cavilli di quel trattato per guadagnare tempo.',
    notableEpisodes: ['Star Trek: The Next Generation - "The Ensigns of Command"'],
    classification: 'Forma di vita cristallina',
  },
  {
    id: 'sona',
    name: "Son'a",
    originPlanet: 'Nessun pianeta fisso, in origine Ba\'ku',
    quadrant: 'Alfa',
    series: ['FILM'],
    imageUrl: img("SON'A"),
    shortDescription:
      'Fazione dissidente dei Ba\'ku, tecnologicamente avanzata ma segnata da un rapido decadimento fisico dovuto all\'aver abbandonato il proprio pianeta natale.',
    extendedDescription:
      'Espulsi generazioni addietro dal loro stesso popolo per avidità e crudeltà, i Son\'a svilupparono tecnologie chirurgiche estreme per contrastare l\'invecchiamento accelerato causato dalla lontananza dalle proprietà rigenerative del pianeta Ba\'ku, arrivando a complottare con la Sezione 31 per riappropriarsene con la forza.',
    notableEpisodes: ['Star Trek: Insurrection'],
    classification: 'Umanoide',
  },
  {
    id: 'specie-8472',
    name: 'Specie 8472',
    originPlanet: 'Spazio fluidico (dimensione parallela)',
    quadrant: 'Sconosciuto',
    series: ['VOY'],
    featured: true,
    imageUrl: img('SPECIE 8472'),
    shortDescription:
      'Forme di vita biotecnologiche estremamente potenti, native di una dimensione parallela e capaci di distruggere navi Borg con estrema facilità.',
    extendedDescription:
      'Provenienti da un regno dimensionale fatto di "spazio fluidico", i membri della Specie 8472 possiedono una fisiologia tripartita e una tecnologia biologica capace di sopraffare persino il Collettivo Borg. Il loro breve conflitto con la Voyager, alleata di necessità con lo stesso Collettivo, rimane uno degli scontri più letali mai affrontati dall\'equipaggio nel Quadrante Delta.',
    notableEpisodes: ['Star Trek: Voyager - "Scorpion"', 'Star Trek: Voyager - "In the Flesh"'],
    classification: 'Forma di vita biotecnologica extra-dimensionale',
  },
  {
    id: 'trill',
    name: 'Trill',
    originPlanet: 'Trill',
    quadrant: 'Alfa',
    series: ['TNG', 'DS9', 'PIC', 'DIS'],
    featured: true,
    imageUrl: img('TRILL'),
    shortDescription:
      'Umanoidi maculati capaci di ospitare un simbionte vermiforme che tramanda memoria e personalità attraverso generazioni di ospiti diversi.',
    extendedDescription:
      'Solo pochi Trill selezionati vengono uniti a un simbionte, dando vita a un\'unica identità composita che unisce ospite e simbionte in una continuità di ricordi che può durare secoli. Jadzia e successivamente Ezri Dax, ospiti del simbionte Dax a Deep Space Nine, mostrarono al pubblico le complessità psicologiche ed etiche di questa unione.',
    notableEpisodes: ['Star Trek: The Next Generation - "The Host"', 'Star Trek: Deep Space Nine - "Equilibrium"'],
    classification: 'Umanoide simbiotico',
  },
  {
    id: 'tholiani',
    name: 'Tholiani',
    originPlanet: 'Tholia',
    quadrant: 'Beta',
    series: ['TOS', 'ENT', 'DS9'],
    imageUrl: img('THOLIANI'),
    shortDescription:
      'Forme di vita cristalline territoriali, capaci di tessere reti energetiche letali attorno alle navi intruse nel proprio spazio.',
    extendedDescription:
      'Estremamente sensibili a temperatura e territorio, i Tholiani difendono i propri confini con la celebre "Rete Tholiana", una struttura energetica generata da due o più vascelli capace di intrappolare e distruggere qualsiasi nave nemica. La loro rigida burocrazia diplomatica li rende interlocutori tanto affidabili quanto inflessibili.',
    notableEpisodes: ['Star Trek: The Original Series - "The Tholian Web"'],
    classification: 'Forma di vita cristallina',
  },
  {
    id: 'talosiani',
    name: 'Talosiani',
    originPlanet: 'Talos IV',
    quadrant: 'Beta',
    series: ['TOS', 'SNW'],
    imageUrl: img('TALOSIANI'),
    shortDescription:
      'Umanoidi dal cranio ipertrofico, sopravvissuti a una guerra nucleare rifugiandosi sottoterra e sviluppando straordinari poteri illusori.',
    extendedDescription:
      'Avendo distrutto la superficie del proprio pianeta in un conflitto atomico, i Talosiani si ritirarono in vaste città sotterranee, dove la dipendenza dalle illusioni mentali sostituì gradualmente ogni altra forma di civiltà reale, portandoli sull\'orlo dell\'estinzione come specie capace di azione concreta. Il loro tentativo di intrappolare il Capitano Pike per ripopolare il pianeta con schiavi umani portò a uno dei primi grandi dilemmi etici della Flotta Stellare.',
    notableEpisodes: ['Star Trek: The Original Series - "The Cage" / "The Menagerie"'],
    classification: 'Umanoide telepatico',
  },
  {
    id: 'tosk',
    name: 'Tosk',
    originPlanet: 'Quadrante Gamma (origine specifica sconosciuta)',
    quadrant: 'Gamma',
    series: ['DS9'],
    imageUrl: img('TOSK'),
    shortDescription:
      'Individui allevati e addestrati fin dalla nascita con il solo scopo di essere cacciati, per cui la cattura equivale a un\'infamia disonorevole.',
    extendedDescription:
      'Geneticamente predisposto a un\'esistenza dedicata interamente alla fuga e alla sopravvivenza, un Tosk in visita su Deep Space Nine sconvolse il concetto federale di libero arbitrio quando chiese di essere restituito ai suoi Cacciatori piuttosto che vivere libero ma "senza scopo" secondo la sua cultura d\'origine.',
    notableEpisodes: ['Star Trek: Deep Space Nine - "Captive Pursuit"'],
    classification: 'Umanoide (allevato per la caccia)',
  },
  {
    id: 'umani',
    name: 'Umani (Terrestri)',
    originPlanet: 'Terra',
    quadrant: 'Alfa',
    series: ['TOS', 'TNG', 'DS9', 'VOY', 'ENT', 'DIS', 'PIC', 'SNW', 'LD', 'PRO', 'FILM'],
    featured: true,
    imageUrl: img('UMANI'),
    shortDescription:
      'Specie fondatrice della Federazione dei Pianeti Uniti, protagonista dell\'espansione della Flotta Stellare dopo il primo contatto con i Vulcaniani.',
    extendedDescription:
      'Dopo aver superato guerre nucleari e divisioni planetarie nel proprio passato, gli umani abbracciarono un futuro di esplorazione pacifica in seguito al primo volo a curvatura di Zefram Cochrane e al conseguente contatto con i Vulcaniani. Da allora sono stati tra i principali promotori della Federazione, portando avanti i valori di curiosità scientifica, diplomazia e cooperazione multispecie.',
    notableEpisodes: ['Star Trek: First Contact', 'Star Trek: Enterprise - "Broken Bow"'],
    classification: 'Umanoide',
  },
  {
    id: 'vulcaniani',
    name: 'Vulcaniani',
    originPlanet: 'Vulcan (Ni\'Var)',
    quadrant: 'Alfa',
    series: ['TOS', 'TNG', 'DS9', 'VOY', 'ENT', 'DIS', 'PIC', 'SNW', 'FILM'],
    featured: true,
    imageUrl: img('VULCANIANI'),
    shortDescription:
      'Umanoidi dalle orecchie appuntite che hanno soppresso le proprie emozioni intensissime abbracciando la disciplina della logica pura.',
    extendedDescription:
      'Dopo secoli di guerre devastanti alimentate da passioni incontrollate, i Vulcaniani seguirono l\'insegnamento del filosofo Surak, incanalando ogni emozione dietro una rigida disciplina logica. Il loro contatto con la Terra nel 2063 diede inizio all\'era della Federazione, mentre figure come Spock resero celebre in tutta la galassia il conflitto interiore tra logica ed eredità emotiva.',
    notableEpisodes: [
      'Star Trek: The Original Series - "Amok Time"',
      'Star Trek: Enterprise - "Broken Bow"',
    ],
    classification: 'Umanoide',
  },
  {
    id: 'vidiiani',
    name: 'Vidiiani',
    originPlanet: 'Vidiia',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('VIDIIANI'),
    shortDescription:
      'Popolo devastato da una malattia genetica degenerativa chiamata Fago, costretto a espiantare organi da altre specie per sopravvivere.',
    extendedDescription:
      'Un tempo civiltà fiorente di artisti e scienziati, i Vidiiani videro la propria società crollare sotto il peso del Fago, una piaga che consuma progressivamente organi e tessuti. La disperata pratica del "clonaggio degli organi" tramite prelievi forzati da altre specie, incluso l\'equipaggio della Voyager, li rese al contempo vittime e aggressori agli occhi della galassia.',
    notableEpisodes: ['Star Trek: Voyager - "Phage"', 'Star Trek: Voyager - "Faces"'],
    classification: 'Umanoide',
  },
  {
    id: 'vorta',
    name: 'Vorta',
    originPlanet: 'Quadrante Gamma (geneticamente modificati dai Fondatori)',
    quadrant: 'Gamma',
    series: ['DS9'],
    imageUrl: img('VORTA'),
    shortDescription:
      'Amministratori clonati e devoti al servizio dei Fondatori, incaricati di gestire diplomazia e comando militare del Dominio.',
    extendedDescription:
      'Privi di alcuni sensi come il gusto ma dotati di eloquenza e astuzia politica innate, i Vorta fungono da intermediari tra i Cambianti e le forze militari Jem\'Hadar, gestendo la propaganda religiosa che venera i Fondatori come divinità. Ogni Vorta viene clonato da una linea genetica preesistente, garantendo continuità di carattere tra un individuo e il successivo.',
    notableEpisodes: ['Star Trek: Deep Space Nine - "The Search"', 'Star Trek: Deep Space Nine - "Treachery, Faith and the Great River"'],
    classification: 'Umanoide geneticamente ingegnerizzato',
  },
  {
    id: 'wadi',
    name: 'Wadi',
    originPlanet: 'Quadrante Gamma (origine specifica sconosciuta)',
    quadrant: 'Gamma',
    series: ['DS9'],
    imageUrl: img('WADI'),
    shortDescription:
      'Uno dei primi popoli del Quadrante Gamma incontrati tramite il wormhole bajoriano, appassionato di giochi d\'azzardo dalle regole oscure.',
    extendedDescription:
      'Arrivati su Deep Space Nine per esplorare il Quadrante Alfa, i Wadi introdussero l\'equipaggio della stazione al gioco "Muovi Insieme a Casa", le cui regole apparentemente semplici nascondevano conseguenze reali e pericolose per i partecipanti intrappolati in una simulazione.',
    notableEpisodes: ['Star Trek: Deep Space Nine - "Move Along Home"'],
    classification: 'Umanoide',
  },
  {
    id: 'xindi',
    name: 'Xindi',
    originPlanet: 'Sistema Xindi (Espansione Delphica)',
    quadrant: 'Beta',
    series: ['ENT'],
    featured: true,
    imageUrl: img('XINDI'),
    shortDescription:
      'Confederazione di cinque sotto-specie senzienti evolutesi sullo stesso pianeta natale ormai distrutto: primati, rettiliani, insettoidi, acquatici e arborei.',
    extendedDescription:
      'Manipolati da entità future note come gli Sferici che li convinsero di una futura minaccia terrestre, gli Xindi lanciarono una sonda che devastò parte della Terra, spingendo l\'Enterprise NX-01 in una missione disperata attraverso l\'instabile Espansione Delphica per impedire un\'arma capace di distruggere l\'intero pianeta. Le tensioni tra le cinque sotto-specie, ciascuna con priorità diverse, resero il conflitto tanto interno quanto esterno.',
    notableEpisodes: ['Star Trek: Enterprise - "The Expanse"', 'Star Trek: Enterprise - "Zero Hour"'],
    classification: 'Umanoide (cinque sotto-specie)',
  },
  {
    id: 'zakdorn',
    name: 'Zakdorn',
    originPlanet: 'Zakdorn',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('ZAKDORN'),
    shortDescription:
      'Popolo che si considera il più abile stratega della galassia, formato fin dall\'infanzia attraverso giochi di strategia competitivi.',
    extendedDescription:
      'Convinti della propria superiorità tattica, gli Zakdorn producono i più rinomati stratreghi della Federazione, sebbene la loro fiducia venga messa alla prova quando affrontano scenari realmente imprevedibili, come dimostrato dallo scontro simulato tra il capitano Riker e l\'esperto zakdorn Sirna Kolrami a bordo dell\'Enterprise-D.',
    notableEpisodes: ['Star Trek: The Next Generation - "Peak Performance"'],
    classification: 'Umanoide',
  },
];
