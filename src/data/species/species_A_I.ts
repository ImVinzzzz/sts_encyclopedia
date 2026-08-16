import { Species } from '../../types/species';

const img = (label: string) =>
  `https://placehold.co/500x500/0b192c/ff9900?font=roboto&text=${encodeURIComponent(label)}`;

export const species_A_I: Species[] = [
  {
    id: 'andoriani',
    name: 'Andoriani',
    originPlanet: 'Andoria (luna Fesoan)',
    quadrant: 'Beta',
    series: ['TOS', 'ENT', 'DIS', 'SNW', 'FILM'],
    featured: true,
    imageUrl: img('ANDORIANI'),
    shortDescription:
      'Umanoidi dalla pelle blu-azzurra e dalle antenne sensoriali, originari di un mondo ghiacciato del sistema di Epsilon Indi.',
    extendedDescription:
      'Guerrieri per tradizione e diplomatici per necessità, gli Andoriani vivono su una luna gelida e si sono affermati come una delle quattro specie fondatrici della Federazione dei Pianeti Uniti. Le loro antenne captano vibrazioni e stati emotivi, mentre la società andoriana è storicamente organizzata in clan con un forte codice d\'onore che ammette il duello formale. Rivali storici dei Vulcaniani prima dell\'alleanza con la Terra, hanno un sistema riproduttivo quadri-genere unico nella galassia.',
    notableEpisodes: [
      'Star Trek: Enterprise - "The Andorian Incident"',
      'Star Trek: Discovery - stagione 2',
      'Star Trek VI: Rotta verso l\'ignoto',
    ],
    classification: 'Umanoide (antenne sensoriali)',
  },
  {
    id: 'aenar',
    name: 'Aenar',
    originPlanet: 'Andoria (regioni polari)',
    quadrant: 'Beta',
    series: ['ENT'],
    imageUrl: img('AENAR'),
    shortDescription:
      'Sottospecie andoriana pacifista e telepatica, priva della vista ma dotata di sensibilità mentale straordinaria.',
    extendedDescription:
      'Isolati volontariamente dal resto della società andoriana, gli Aenar vivono in insediamenti remoti dedicati alla non violenza. La loro cecità di nascita è compensata da una spiccata capacità telepatica, sfruttata in passato per collegamenti mentali a distanza con equipaggi stellari. Il loro rapporto travagliato con gli Andoriani "blu" riflette antiche divisioni culturali sullo stesso pianeta.',
    notableEpisodes: ['Star Trek: Enterprise - "The Aenar"', 'Star Trek: Enterprise - "United"'],
    classification: 'Umanoide telepatico',
  },
  {
    id: 'aldeani',
    name: 'Aldeani',
    originPlanet: 'Aldea',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('ALDEANI'),
    shortDescription:
      'Civiltà isolazionista custode di un manto di occultamento planetario, incapace di procreare naturalmente.',
    extendedDescription:
      'Nascosti dietro uno scudo tecnologico perfetto, gli Aldeani hanno prosperato per secoli in totale segretezza, ma la dipendenza dal loro "Custode" li ha resi sterili. Disperati, arrivarono a rapire bambini da altre navi per garantire la sopravvivenza della loro cultura, prima che l\'Enterprise-D li aiutasse a diagnosticare e correggere il guasto tecnologico alla radice del problema.',
    notableEpisodes: ['Star Trek: The Next Generation - "When the Bough Breaks"'],
    classification: 'Umanoide',
  },
  {
    id: 'antedeani',
    name: 'Antedeani',
    originPlanet: 'Antede III',
    quadrant: 'Alfa',
    series: ['FILM'],
    imageUrl: img('ANTEDEANI'),
    shortDescription: 'Umanoidi anfibi dall\'aspetto simile a pesci, membri della Federazione.',
    extendedDescription:
      'Provenienti da un mondo oceanico, gli Antedeani respirano sia in acqua che sull\'aria grazie a strutture branchiali specializzate. Un diplomatico antedeano fu vittima di un tentativo di assassinio durante una conferenza sulla Terra, episodio che coinvolse l\'equipaggio dell\'Enterprise in un caso di cospirazione politica.',
    notableEpisodes: ['Rotta verso la Terra (Star Trek IV)'],
    classification: 'Umanoide anfibio',
  },
  {
    id: 'acamariani',
    name: 'Acamariani',
    originPlanet: 'Acamar III',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('ACAMARIANI'),
    shortDescription:
      'Popolo pacifico segnato da secoli di faide di sangue con i Gatheriani, discendenti di predoni dissidenti.',
    extendedDescription:
      'Un tempo vittime di razzie, gli Acamariani portarono avanti per generazioni una vendetta ereditaria contro i Gatheriani, discendenti degli antichi predoni. Il ciclo di violenza fu infine spezzato con la mediazione della Federazione, che li aiutò a raggiungere una riconciliazione dopo secoli di odio tramandato.',
    notableEpisodes: ['Star Trek: The Next Generation - "The Vengeance Factor"'],
    classification: 'Umanoide',
  },
  {
    id: 'bajoriani',
    name: 'Bajoriani',
    originPlanet: 'Bajor',
    quadrant: 'Alfa',
    series: ['TNG', 'DS9', 'PIC', 'FILM'],
    featured: true,
    imageUrl: img('BAJORIANI'),
    shortDescription:
      'Popolo spiritualmente devoto, riconoscibile dalle rughe sul dorso del naso, sopravvissuto a una lunga occupazione cardassiana.',
    extendedDescription:
      'Antica civiltà con millenni di storia, i Bajoriani venerano i Profeti che dimorano nel Corridoio Celeste, un wormhole stabile vicino al loro sistema. Dopo decenni di brutale occupazione cardassiana, il popolo bajoriano ha ricostruito la propria società attorno alla stazione spaziale Deep Space Nine, bilanciando fede religiosa, politica interna e la ricerca di un posto stabile nella Federazione.',
    notableEpisodes: [
      'Star Trek: Deep Space Nine - "Emissary"',
      'Star Trek: Deep Space Nine - "Accession"',
    ],
    classification: 'Umanoide',
  },
  {
    id: 'betazoidi',
    name: 'Betazoidi',
    originPlanet: 'Betazed',
    quadrant: 'Alfa',
    series: ['TNG', 'DS9', 'PIC', 'FILM'],
    featured: true,
    imageUrl: img('BETAZOIDI'),
    shortDescription:
      'Specie completamente telepatica dall\'aspetto quasi identico a quello umano, nota per rituali matrimoniali senza veli.',
    extendedDescription:
      'I Betazoidi comunicano fin dalla nascita attraverso una rete telepatica condivisa, capacità che rende la privacy mentale un valore culturale fondamentale. Molti prestano servizio nella Flotta Stellare come consulenti, sfruttando la loro sensibilità empatica per leggere le intenzioni altrui. Le tradizioni betazoidi, comprese le cerimonie nuziali "en plein air", riflettono una società che non nasconde nulla di sé.',
    notableEpisodes: [
      'Star Trek: The Next Generation - "Haven"',
      'Star Trek: The Next Generation - "Night Terrors"',
    ],
    classification: 'Umanoide telepatico',
  },
  {
    id: 'borg',
    name: 'Borg',
    originPlanet: 'Sconosciuto (Quadrante Delta)',
    quadrant: 'Delta',
    series: ['TNG', 'VOY', 'DS9', 'PIC', 'FILM'],
    featured: true,
    imageUrl: img('BORG'),
    shortDescription:
      'Collettivo cibernetico che assimila specie e tecnologie in tutta la galassia per perseguire la "perfezione".',
    extendedDescription:
      'Governati da una coscienza collettiva chiamata Regina Borg, i droni cancellano l\'individualità dei soggetti assimilati collegandoli a una rete neurale condivisa. Il Collettivo si adatta rapidamente a qualsiasi minaccia, rendendolo uno degli avversari più temuti incontrati dalla Flotta Stellare, capace di trasformare intere civiltà in estensioni di sé stesso.',
    notableEpisodes: [
      'Star Trek: The Next Generation - "The Best of Both Worlds"',
      'Star Trek: First Contact',
      'Star Trek: Voyager - "Scorpion"',
    ],
    classification: 'Cyborg collettivo',
  },
  {
    id: 'breen',
    name: 'Breen',
    originPlanet: 'Breen',
    quadrant: 'Alfa',
    series: ['DS9'],
    imageUrl: img('BREEN'),
    shortDescription:
      'Specie enigmatica sempre celata da armature refrigeranti, alleata del Dominio nella Guerra del Dominio.',
    extendedDescription:
      'Nessuno al di fuori della loro specie conosce con certezza l\'aspetto reale dei Breen, poiché non tolgono mai le tute ambientali che regolano la loro temperatura corporea. Il loro ingresso nella Guerra del Dominio, con un\'arma capace di disattivare i sistemi nemici, cambiò gli equilibri del conflitto nel Quadrante Alfa.',
    notableEpisodes: ['Star Trek: Deep Space Nine - "Indiscretion"', 'Star Trek: Deep Space Nine - "The Changing Face of Evil"'],
    classification: 'Umanoide (ignoto sotto l\'armatura)',
  },
  {
    id: 'boliani',
    name: 'Boliani',
    originPlanet: 'Bolarus IX',
    quadrant: 'Beta',
    series: ['TNG', 'VOY', 'FILM'],
    imageUrl: img('BOLIANI'),
    shortDescription: 'Umanoidi dalla pelle blu e cranio privo di setto nasale, noti per il loro carattere cordiale.',
    extendedDescription:
      'Presenti in numero crescente nella Flotta Stellare, i Boliani provengono da un mondo con una società fortemente comunitaria. Sono spesso ritratti in ruoli di supporto e amministrazione a bordo delle navi federali, apprezzati per affidabilità e socievolezza.',
    notableEpisodes: ['Star Trek: The Next Generation - "Conundrum"'],
    classification: 'Umanoide',
  },
  {
    id: 'binari',
    name: 'Binari (Bynar)',
    originPlanet: 'Bynaus',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('BYNAR'),
    shortDescription: 'Umanoidi cibernetici che operano sempre in coppia, collegati a un computer centrale planetario.',
    extendedDescription:
      'Ogni Bynar è connesso in permanenza a un partner e a un\'intelligenza artificiale che governa il loro pianeta, comunicando in un linguaggio binario ultrarapido. Quando il loro computer centrale rischiò il collasso, una coppia di Bynar dirottò temporaneamente l\'Enterprise-D per scaricarvi e salvare l\'intera memoria della loro civiltà.',
    notableEpisodes: ['Star Trek: The Next Generation - "11001001"'],
    classification: 'Umanoide cibernetico',
  },
  {
    id: 'cardassiani',
    name: 'Cardassiani',
    originPlanet: 'Cardassia Prime',
    quadrant: 'Alfa',
    series: ['TNG', 'DS9', 'VOY', 'PIC'],
    featured: true,
    imageUrl: img('CARDASSIANI'),
    shortDescription:
      'Specie militarista dal collo squamoso e occhi infossati, ex potenza occupante di Bajor.',
    extendedDescription:
      'Uscita da una carestia planetaria che ne forgiò una società rigidamente gerarchica, l\'Unione Cardassiana costruì il proprio potere attraverso espansione militare e sorveglianza interna dell\'Ordine Obsidiano. L\'occupazione di Bajor e la successiva alleanza col Dominio segnarono profondamente la loro storia, culminata in una devastante guerra che rase al suolo Cardassia Prime.',
    notableEpisodes: [
      'Star Trek: Deep Space Nine - "Duet"',
      'Star Trek: Deep Space Nine - "What You Leave Behind"',
    ],
    classification: 'Umanoide',
  },
  {
    id: 'caitiani',
    name: 'Caitiani',
    originPlanet: 'Cait',
    quadrant: 'Alfa',
    series: ['TAS', 'DIS'],
    imageUrl: img('CAITIANI'),
    shortDescription: 'Umanoidi felini dal folto pelo e coda prensile, membri della Federazione.',
    extendedDescription:
      'Agili e dai sensi acuti, i Caitiani vivono in una società che valorizza l\'onore personale e la lealtà di clan. La tenente M\'Ress servì a bordo dell\'Enterprise originale, mentre la specie è tornata in scena in epoca più recente nelle storie ambientate attorno alla Federazione del XXXII secolo.',
    notableEpisodes: ['Star Trek: The Animated Series - "The Survivor"'],
    classification: 'Umanoide felino',
  },
  {
    id: 'capellani',
    name: 'Capellani',
    originPlanet: 'Capella IV',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('CAPELLANI'),
    shortDescription: 'Umanoidi alti e fieri, organizzati in una società guerriera basata sul diritto del più forte.',
    extendedDescription:
      'Sul loro pianeta ricco di topolite, minerale strategico per la Federazione, i Capellani seguono un rigido codice per cui la leadership del clan passa solo a chi sconfigge il capo in duello. L\'Enterprise si trovò coinvolta in una crisi di successione dopo l\'assassinio del leader capellano, con conseguenze durature per gli equilibri politici del pianeta.',
    notableEpisodes: ['Star Trek: The Original Series - "Friday\'s Child"'],
    classification: 'Umanoide',
  },
  {
    id: 'cambianti',
    name: 'Cambianti (Fondatori)',
    originPlanet: 'Quadrante Gamma (Grande Legame)',
    quadrant: 'Gamma',
    series: ['DS9'],
    featured: true,
    imageUrl: img('CAMBIANTI'),
    shortDescription:
      'Mutaforma che possono assumere qualsiasi aspetto e reggenti occulti del Dominio, uniti in una coscienza liquida condivisa.',
    extendedDescription:
      'Perseguitati in passato dalle "specie solide", i Cambianti fondarono il Dominio per garantirsi sicurezza attraverso il controllo, governando tramite i geneticamente modificati Vorta e i soldati Jem\'Hadar. Quando non assumono altre forme, si riuniscono in un unico "Grande Legame" liquido, condividendo pensieri e memoria collettiva.',
    notableEpisodes: [
      'Star Trek: Deep Space Nine - "The Search"',
      'Star Trek: Deep Space Nine - "Chimera"',
    ],
    classification: 'Mutaforma',
  },
  {
    id: 'cheroniani',
    name: 'Cheroniani',
    originPlanet: 'Cheron',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('CHERONIANI'),
    shortDescription:
      'Umanoidi con pelle divisa a metà tra bianco e nero, protagonisti di un conflitto razziale distruttivo quanto assurdo.',
    extendedDescription:
      'Bele e Lokai, ultimi superstiti del loro popolo, portarono a bordo dell\'Enterprise l\'odio ereditario tra chi ha il lato sinistro nero e chi lo ha bianco, o viceversa: una distinzione tanto radicale per loro quanto invisibile agli occhi umani. La loro storia si concluse con la scoperta che il conflitto aveva già distrutto l\'intero pianeta natale.',
    notableEpisodes: ['Star Trek: The Original Series - "Let That Be Your Last Battlefield"'],
    classification: 'Umanoide (pigmentazione bicromatica)',
  },
  {
    id: 'denobuliani',
    name: 'Denobuliani',
    originPlanet: 'Denobula',
    quadrant: 'Beta',
    series: ['ENT'],
    imageUrl: img('DENOBULIANI'),
    shortDescription:
      'Umanoidi dal viso caratterizzato da protuberanze multiple, provenienti da una società poligama e progressista.',
    extendedDescription:
      'Il dottor Phlox, medico di bordo dell\'Enterprise NX-01, rese familiare al pubblico questa specie curiosa e aperta mentalmente, abituata a matrimoni multipli e a una visione della vita priva di pregiudizi verso altre culture. I Denobuliani hanno relazioni diplomatiche di lunga data con i Vulcaniani, pur mantenendo una spiccata indipendenza culturale.',
    notableEpisodes: ['Star Trek: Enterprise - "Cold Front"'],
    classification: 'Umanoide',
  },
  {
    id: 'deltani',
    name: 'Deltani',
    originPlanet: 'Delta IV',
    quadrant: 'Beta',
    series: ['FILM'],
    imageUrl: img('DELTANI'),
    shortDescription: 'Umanoidi completamente glabri, la cui intensità sensoriale ed emotiva richiede un giuramento di celibato agli ufficiali della Flotta.',
    extendedDescription:
      'I Deltani provano piacere ed emozioni con un\'intensità che gli umani troverebbero travolgente; per questo, chi presta servizio al fianco di equipaggi misti giura solennemente di astenersi da ogni contatto intimo. Ilia, ufficiale deltana, servì a bordo dell\'Enterprise durante l\'incontro con l\'entità V\'Ger.',
    notableEpisodes: ['Star Trek: The Motion Picture'],
    classification: 'Umanoide',
  },
  {
    id: 'douwd',
    name: 'Douwd',
    originPlanet: 'Sconosciuto',
    quadrant: 'Sconosciuto',
    series: ['TNG'],
    imageUrl: img('DOUWD'),
    shortDescription:
      'Entità quasi immortale capace di manipolare la realtà, celata per decenni sotto le sembianze di un\'anziana umana.',
    extendedDescription:
      'Kevin Uxbridge, un Douwd travestito da umano, visse per secoli in pace su una colonia prima di rivelare accidentalmente il proprio immenso potere: in un impeto di dolore per la morte della moglie, distrusse da solo un\'intera flotta nemica, mostrando quanto fosse pericolosa la sua vera natura se provocata.',
    notableEpisodes: ['Star Trek: The Next Generation - "The Survivors"'],
    classification: 'Entità quasi onnipotente',
  },
  {
    id: 'devidiani',
    name: 'Devidiani',
    originPlanet: 'Devidia II (XXVII secolo)',
    quadrant: 'Alfa',
    series: ['TNG'],
    imageUrl: img('DEVIDIANI'),
    shortDescription:
      'Forma di vita non corporea del lontano futuro, capace di viaggiare nel tempo per nutrirsi dell\'energia vitale di altre specie.',
    extendedDescription:
      'Estinti nella loro epoca a causa del collasso del proprio pianeta, i Devidiani impararono a viaggiare a ritroso nel tempo fino alla San Francisco del 1893 per estrarre energia neurale dagli umani. Il loro scontro con l\'equipaggio dell\'Enterprise-D coinvolse persino Guinan e Mark Twain in un intreccio temporale memorabile.',
    notableEpisodes: ['Star Trek: The Next Generation - "Time\'s Arrow"'],
    classification: 'Forma di vita temporale non corporea',
  },
  {
    id: 'el-auriani',
    name: 'El-Auriani',
    originPlanet: 'El-Auria',
    quadrant: 'Beta',
    series: ['TNG', 'FILM'],
    featured: true,
    imageUrl: img('EL-AURIANI'),
    shortDescription:
      'Popolo longevo di "ascoltatori" nato, disperso dall\'assimilazione Borg del proprio mondo natale.',
    extendedDescription:
      'Guinan, la più celebre El-Auriana, servì per decenni come barista e confidente a bordo dell\'Enterprise-D, portando la saggezza accumulata in secoli di vita e viaggi. Dopo che il Borg devastò El-Auria, il popolo si disperse per la galassia, e alcuni di loro, come Guinan, mantennero una sensibilità particolare per le distorsioni del continuum spazio-temporale.',
    notableEpisodes: ['Star Trek: The Next Generation - "Q Who"', 'Star Trek: Generations'],
    classification: 'Umanoide longevo',
  },
  {
    id: 'elasiani',
    name: 'Elasiani',
    originPlanet: 'Elas',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('ELASIANI'),
    shortDescription: 'Umanoidi il cui pianto contiene sostanze chimiche capaci di legare emotivamente chi le tocca.',
    extendedDescription:
      'La principessa elasiana Elaan fu inviata sull\'Enterprise per un matrimonio combinato volto a garantire la pace con il pianeta rivale Troyius; le sue lacrime, però, avevano il potere chimico di rendere schiavo dell\'amore chiunque le toccasse, complicando non poco la missione diplomatica di Kirk.',
    notableEpisodes: ['Star Trek: The Original Series - "Elaan of Troyius"'],
    classification: 'Umanoide',
  },
  {
    id: 'entita-cristallina',
    name: 'Entità Cristallina',
    originPlanet: 'Sconosciuto',
    quadrant: 'Sconosciuto',
    series: ['TNG'],
    imageUrl: img('CRISTALLINA'),
    shortDescription:
      'Immensa forma di vita non biologica a forma di fiocco di neve, capace di prosciugare interi pianeti di energia organica.',
    extendedDescription:
      'Vagando per lo spazio in cerca di energia vitale, l\'Entità Cristallina lasciava dietro di sé mondi completamente spopolati. Il tenente Data, che da bambino sopravvisse a un suo attacco sulla colonia Omicron Theta, sviluppò un legame personale con lo studio di questa creatura enigmatica prima del suo tragico epilogo.',
    notableEpisodes: ['Star Trek: The Next Generation - "Datalore"', 'Star Trek: The Next Generation - "Silicon Avatar"'],
    classification: 'Forma di vita non biologica',
  },
  {
    id: 'ferengi',
    name: 'Ferengi',
    originPlanet: 'Ferenginar',
    quadrant: 'Alfa',
    series: ['TNG', 'DS9', 'VOY', 'LD'],
    featured: true,
    imageUrl: img('FERENGI'),
    shortDescription:
      'Umanoidi bassi dalle grandi orecchie, la cui intera civiltà ruota attorno alle Regole dell\'Acquisizione e al profitto.',
    extendedDescription:
      'Guidata dal culto del capitalismo assoluto, la società ferengi codifica ogni aspetto della vita economica nelle sacre Regole dell\'Acquisizione. Storicamente patriarcale al punto da vietare alle donne di indossare abiti o guadagnare denaro, la cultura ferengi ha vissuto profonde riforme sociali, spinte anche da figure come Quark, Rom e Nog visti a Deep Space Nine.',
    notableEpisodes: [
      'Star Trek: The Next Generation - "The Last Outpost"',
      'Star Trek: Deep Space Nine - "Family Business"',
    ],
    classification: 'Umanoide mercantile',
  },
  {
    id: 'fabrini',
    name: 'Fabrini',
    originPlanet: 'Asteronave Yonada (originari di Fabrina, distrutta)',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('FABRINI'),
    shortDescription:
      'Discendenti di un popolo che fuggì la distruzione del proprio sole a bordo di un\'astronave-asteroide governata da un\'intelligenza artificiale religiosa.',
    extendedDescription:
      'Ignari di vivere all\'interno di un vascello generazionale, i Fabrini veneravano "l\'Oracolo" senza sapere che si trattava di un computer di bordo. L\'Enterprise scoprì che Yonada era in rotta di collisione con un sistema abitato, riuscendo a correggerne la traiettoria e a rivelare al popolo la vera natura del proprio mondo.',
    notableEpisodes: ['Star Trek: The Original Series - "For the World Is Hollow and I Have Touched the Sky"'],
    classification: 'Umanoide',
  },
  {
    id: 'gorn',
    name: 'Gorn',
    originPlanet: 'Cestus III (sistema conteso)',
    quadrant: 'Beta',
    series: ['TOS', 'SNW', 'FILM'],
    featured: true,
    imageUrl: img('GORN'),
    shortDescription: 'Umanoidi rettiliani di forte costituzione, difensori aggressivi del proprio spazio.',
    extendedDescription:
      'Il primo, storico incontro tra Flotta Stellare e Gorn avvenne per una disputa territoriale su Cestus III, culminata nel celebre duello tra il Capitano Kirk e un comandante gorn sul pianeta Vasquez. Specie tecnologicamente capace e territorialmente spietata, i Gorn sono tornati protagonisti di storie più recenti ambientate poco prima della missione quinquennale dell\'Enterprise.',
    notableEpisodes: ['Star Trek: The Original Series - "Arena"', 'Strange New Worlds - "Memento Mori"'],
    classification: 'Umanoide rettiliano',
  },
  {
    id: 'gerarchia',
    name: 'Gerarchia',
    originPlanet: 'Sconosciuto',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('GERARCHIA'),
    shortDescription:
      'Specie di sorveglianti del Quadrante Delta che osserva altre civiltà tramite reti di satelliti spia per puro intrattenimento.',
    extendedDescription:
      'La Gerarchia considera lo spionaggio interstellare una forma di svago diffuso, monitorando costantemente altre navi, tra cui la Voyager, attraverso una fitta rete di dispositivi di sorveglianza automatizzati sparsi nello spazio profondo.',
    notableEpisodes: ['Star Trek: Voyager - "The Void"', 'Star Trek: Voyager - "Prime Factors"'],
    classification: 'Umanoide (osservatori)',
  },
  {
    id: 'hirogeni',
    name: 'Hirogeni',
    originPlanet: 'Nomadi, privi di un mondo natale fisso',
    quadrant: 'Delta',
    series: ['VOY'],
    imageUrl: img('HIROGENI'),
    shortDescription:
      'Cacciatori nomadi che vagano per il Quadrante Delta in cerca di prede sempre più impegnative da inseguire.',
    extendedDescription:
      'La cultura hirogena ruota interamente attorno alla caccia: trofei, armi e rituali di conquista definiscono lo status sociale di ogni individuo. Il declino delle prede tradizionali ha spinto alcuni gruppi hirogeni a sviluppare simulazioni olografiche di caccia, con risultati inaspettatamente pericolosi a bordo della Voyager.',
    notableEpisodes: ['Star Trek: Voyager - "The Killing Game"', 'Star Trek: Voyager - "Prey"'],
    classification: 'Umanoide cacciatore',
  },
  {
    id: 'horta',
    name: 'Horta',
    originPlanet: 'Janus VI',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('HORTA'),
    shortDescription: 'Forma di vita silicea capace di sciogliere la roccia, madre solitaria di migliaia di uova.',
    extendedDescription:
      'Scambiata per un mostro dai minatori di Janus VI, la Horta si rivelò essere un\'unica genitrice intelligente che proteggeva le uova della sua specie, deposte una sola volta ogni cinquantamila anni. Il capitano Kirk mediò una convivenza pacifica tra Horta e minatori umani, basata su uno scambio reciprocamente vantaggioso.',
    notableEpisodes: ['Star Trek: The Original Series - "The Devil in the Dark"'],
    classification: 'Forma di vita silicea',
  },
  {
    id: 'iconiani',
    name: 'Iconiani',
    originPlanet: 'Iconia (civiltà distrutta)',
    quadrant: 'Alfa',
    series: ['TNG', 'DS9'],
    imageUrl: img('ICONIANI'),
    shortDescription:
      'Antica civiltà scomparsa, un tempo capace di viaggiare istantaneamente tra i mondi tramite portali dimensionali.',
    extendedDescription:
      'Ricordati con timore come "i demoni del cielo" da diverse culture della galassia, gli Iconiani svilupparono una tecnologia di portali capace di collegare pianeti distanti anni luce. La loro civiltà fu spazzata via migliaia di anni fa, ma resti della loro tecnologia continuano a riemergere, ambiti da fazioni che ne cercano il controllo.',
    notableEpisodes: ['Star Trek: The Next Generation - "Contagion"', 'Star Trek: Deep Space Nine - "To the Death"'],
    classification: 'Umanoide (civiltà scomparsa)',
  },
  {
    id: 'iotiani',
    name: 'Iotiani',
    originPlanet: 'Sigma Iotia II',
    quadrant: 'Beta',
    series: ['TOS'],
    imageUrl: img('IOTIANI'),
    shortDescription:
      'Umanoidi estremamente imitativi, che ricostruirono l\'intera società su modello della Chicago degli anni \'20 dopo un contatto federale.',
    extendedDescription:
      'Dopo la visita di una nave terrestre che lasciò accidentalmente un libro sulla criminalità organizzata del XX secolo, gli Iotiani riorganizzarono l\'intero pianeta in "famiglie" rivali gangster, imitando fedelmente costumi, gerghi e persino le automobili dell\'epoca. L\'Enterprise dovette intervenire per riportare ordine su un pianeta trasformato in un enorme gioco di ruolo criminale.',
    notableEpisodes: ['Star Trek: The Original Series - "A Piece of the Action"'],
    classification: 'Umanoide (culturalmente imitativo)',
  },
];
