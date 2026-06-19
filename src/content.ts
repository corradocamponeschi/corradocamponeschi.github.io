export type NavItem = {
  label: string;
  href: InternalPagePath;
};

export type ContactLinks = {
  email: string;
  whatsapp: string;
  instagramHandle: string;
  youtubeChannelUrl: string;
};

export type PagePath = "/" | InternalPagePath;

export type InternalPagePath =
  | "/classe-gratuita"
  | "/il-metodo"
  | "/chi-sono"
  | "/percorsi"
  | "/eventi-corsi"
  | "/blog";

export type MethodArea = {
  title: string;
  summary: string;
  icon: "seat" | "breath" | "circle" | "heart" | "flame" | "star";
};

export type Offer = {
  title: string;
  summary: string;
  cta: string;
  message: string;
  keywords?: string[];
};

export type Project = {
  title: string;
  summary: string;
  cta: string;
  tone: "blue" | "copper";
  message: string;
};

export type AudienceColumn = {
  title: string;
  points: string[];
};

export const contactLinks: ContactLinks = {
  email: "camponeschicorrado@hotmail.it",
  whatsapp: "+393334907347",
  instagramHandle: "corradocamponeschi",
  youtubeChannelUrl: "https://www.youtube.com/channel/UC9m6lhe7vsbwPfpXg2Vw8WA",
};

export const navItems: NavItem[] = [
  { label: "Classe gratuita", href: "/classe-gratuita" },
  { label: "Il metodo", href: "/il-metodo" },
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Percorsi", href: "/percorsi" },
  { label: "Eventi & Corsi", href: "/eventi-corsi" },
  { label: "Blog", href: "/blog" },
];

export const openingManifesto = {
  title: "Non è una questione di tempo.\nÈ una questione di presenza.",
  paragraphs: [
    "Molti uomini vivono la sessualità come una prova: essere all’altezza, controllare il corpo, soddisfare l’altro, non mostrare fragilità.",
    "Il mio lavoro nasce per accompagnare un passaggio diverso: dalla prestazione alla presenza, dal controllo all’ascolto, dalla vergogna alla possibilità di abitare il desiderio con più verità.",
  ],
};

export const authenticSexualityManifesto = {
  title: "Manifesto della Sessualità Autentica",
  paragraphs: [
    "Credo che la sessualità non sia soltanto tecnica, prestazione o piacere fisico. È un luogo dove si incontrano corpo, emozione, desiderio, paura, memoria, spiritualità e relazione.",
    "Molti uomini imparano a vivere la sessualità come prova, conquista o conferma del proprio valore. Io propongo un’altra via: una sessualità più lenta, presente, consapevole, capace di ascoltare il corpo e di incontrare davvero l’altro.",
    "Il lavoro non è diventare perfetti. È diventare più veri.",
  ],
};

export const marqueeTexts = {
  hero:
    "Dalla prestazione alla presenza. · Dal controllo all’ascolto. · Dalla tensione alla vitalità. · Dalla vergogna alla verità.",
  method:
    "Corpo · Respiro · Desiderio · Energia · Relazione · Confini · Intimità · Presenza ·",
};

export const thresholdQuotes = [
  "Il corpo sa prima della mente.",
  "Non devi diventare più performante. Puoi diventare più presente.",
  "La sessualità non è una prova. È un luogo di verità.",
  "Il desiderio ha bisogno di spazio, non di controllo.",
];

export const approachParagraphs = [
  "Sono Corrado Camponeschi. Il mio percorso nasce dall’incontro tra ricerca, corpo e spiritualità.",
  "Accompagno uomini e coppie a trasformare la sessualità da luogo di prestazione a spazio di presenza, ascolto e intimità autentica.",
  "Dopo una formazione ingegneristica e anni dedicati allo studio dell’energia negli edifici, ho iniziato a orientare la mia ricerca verso un’altra forma di energia: quella che abita il corpo, le emozioni, la sessualità e le relazioni.",
  "Integro pratiche corporee, yoga, meditazione, bioenergetica, comunicazione empatica e strumenti delle tradizioni tantriche e taoiste per accompagnare uomini e coppie verso una sessualità più autentica, consapevole e incarnata.",
  "Il mio lavoro non sostituisce percorsi clinici, medici o psicoterapeutici. Offre uno spazio educativo, esperienziale e corporeo per tornare ad ascoltare sé stessi e incontrare l’altro con più presenza.",
];

export const methodAreas: MethodArea[] = [
  {
    title: "Corpo",
    summary:
      "Ritornare alla percezione, al respiro, al radicamento e alle sensazioni, imparando ad abitare il corpo con più presenza.",
    icon: "seat",
  },
  {
    title: "Respiro",
    summary:
      "Usare il respiro come soglia tra controllo e ascolto, regolando intensità, eccitazione, emozione e presenza.",
    icon: "breath",
  },
  {
    title: "Confini",
    summary:
      "Imparare a sentire, nominare e rispettare il sì, il no, il ritmo e la responsabilità dentro l’incontro.",
    icon: "circle",
  },
  {
    title: "Intimità",
    summary:
      "Coltivare una relazione più vera con il corpo, il desiderio, l’altro e la dimensione spirituale della sessualità.",
    icon: "heart",
  },
];

export const offers: Offer[] = [
  {
    title: "Percorso individuale per uomini",
    summary:
      "Uno spazio di accompagnamento per uomini che desiderano comprendere meglio il proprio corpo, la sessualità, l’ansia, la vergogna, il rapporto con il piacere e con l’intimità.",
    cta: "Richiedi una call individuale",
    message:
      "Ciao Corrado, vorrei richiedere una call individuale per capire quale percorso può essere adatto a me.",
  },
  {
    title: "Cerchi di uomini",
    summary:
      "Spazi di ascolto, presenza e fratellanza per attraversare identità, emozioni, sessualità, vulnerabilità, relazione con il maschile e con il femminile.",
    cta: "Partecipa al prossimo cerchio",
    message:
      "Ciao Corrado, vorrei ricevere informazioni sul prossimo cerchio di uomini.",
    keywords: [
      "ascolto",
      "presenza",
      "vulnerabilità",
      "fratellanza",
      "confini",
      "corpo",
      "parola",
      "silenzio",
    ],
  },
  {
    title: "Percorsi di coppia e intimità consapevole",
    summary:
      "Percorsi per coppie o partner che desiderano ritrovare comunicazione, contatto, ascolto, ritualità, desiderio e intimità non performativa.",
    cta: "Scrivimi per un percorso di coppia",
    message:
      "Ciao Corrado, vorrei scriverti per un percorso di coppia o di intimità consapevole.",
  },
];

export const audienceColumns: AudienceColumn[] = [
  {
    title: "È per te se…",
    points: [
      "Ti senti spesso nella prestazione.",
      "Hai difficoltà a sentire il corpo durante l’intimità.",
      "Vivi vergogna, ansia o chiusura nella sessualità.",
      "Desideri portare più presenza e ascolto nelle relazioni.",
      "Sei attratto da pratiche corporee, spirituali e somatiche, ma cerchi un contenitore serio e rispettoso.",
    ],
  },
  {
    title: "Non è per te se…",
    points: [
      "Cerchi una tecnica magica per controllare l’altro.",
      "Vuoi solo aumentare la performance sessuale.",
      "Non sei disposto a incontrare emozioni, vulnerabilità e responsabilità.",
      "Cerchi terapia clinica o trattamento medico: in quel caso è importante rivolgersi a professionisti sanitari qualificati.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "ThotAsana",
    summary:
      "Un progetto di ricerca e divulgazione esoterica sui nessi tra sistema yogico e astrologia egizia, in collaborazione con Jacopo Trombetti.",
    cta: "Scopri ThotAsana",
    tone: "blue",
    message:
      "Ciao Corrado, vorrei scoprire il progetto ThotAsana e i suoi futuri percorsi.",
  },
  {
    title: "Unione Profonda",
    summary:
      "Un percorso con Anna Elena Comune dedicato a sessualità autentica, cura, arte, psicologia e spiritualità.",
    cta: "Scopri Unione Profonda",
    tone: "copper",
    message:
      "Ciao Corrado, vorrei ricevere informazioni su Unione Profonda e sui percorsi disponibili.",
  },
];

export const freeCallMessage =
  "Ciao Corrado, vorrei prenotare una call conoscitiva gratuita per capire da dove iniziare.";

export const internalPages: Record<
  InternalPagePath,
  {
    title: string;
    intro: string;
    placeholder?: string;
    cta?: string;
    message?: string;
  }
> = {
  "/classe-gratuita": {
    title: "Classe gratuita",
    intro:
      "Uno spazio introduttivo per incontrare il lavoro con calma, attraverso una pratica semplice e accessibile.",
    placeholder: "Questa sezione accoglierà una pratica gratuita introduttiva.",
    cta: "Richiedi una call gratuita",
    message: freeCallMessage,
  },
  "/il-metodo": {
    title: "Il metodo",
    intro:
      "Una struttura di studio e pratica che unisce corpo, respiro, confini e intimità per trasformare la sessualità in presenza incarnata.",
    placeholder:
      "Qui verranno approfonditi principi, pratiche e testi lunghi dedicati al metodo.",
    cta: "Prenota una call conoscitiva gratuita",
    message: freeCallMessage,
  },
  "/chi-sono": {
    title: "Chi sono",
    intro:
      "Il mio percorso nasce dall’incontro tra ricerca, spiritualità, corpo e relazione. Questa pagina diventerà uno spazio più ampio e personale.",
    cta: "Scrivimi",
    message: "Ciao Corrado, vorrei conoscerti meglio e capire se il tuo lavoro può essere adatto a me.",
  },
  "/percorsi": {
    title: "Percorsi",
    intro:
      "Percorsi individuali, di coppia e di gruppo pensati come cammini di studio, ascolto e trasformazione.",
    cta: "Prenota una call conoscitiva gratuita",
    message: freeCallMessage,
  },
  "/eventi-corsi": {
    title: "Eventi & Corsi",
    intro:
      "Uno spazio per futuri incontri, laboratori, corsi esperienziali e programmi di pratica dal vivo o online.",
    placeholder: "Gli eventi e i corsi futuri verranno pubblicati qui.",
    cta: "Ricevi aggiornamenti",
    message: "Ciao Corrado, vorrei ricevere aggiornamenti sui prossimi eventi e corsi.",
  },
  "/blog": {
    title: "Blog",
    intro:
      "Appunti, articoli e riflessioni su corpo, sessualità autentica, relazione, spiritualità incarnata e maturità emotiva.",
    placeholder: "I primi articoli verranno raccolti in questa sezione.",
  },
};

export const eventPlaceholders = [
  {
    title: "Laboratori esperienziali",
    summary: "Spazi di pratica guidata per esplorare corpo, respiro, confini e presenza.",
  },
  {
    title: "Cerchi e incontri",
    summary: "Momenti di parola, ascolto e pratica per uomini, coppie o gruppi misti.",
  },
  {
    title: "Programmi futuri",
    summary: "Percorsi più lunghi e strutturati, da aprire quando il contenuto sarà pronto.",
  },
];

export const blogPlaceholders = [
  {
    title: "Dal controllo all’ascolto",
    summary: "Una riflessione sulla sessualità come spazio di presenza, non di prova.",
  },
  {
    title: "Il corpo come soglia",
    summary: "Appunti sul radicamento, il respiro e la capacità di sentire.",
  },
  {
    title: "Confini e intimità",
    summary: "Perché il contatto autentico nasce anche dalla chiarezza del limite.",
  },
];

export function mailtoLink(subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${contactLinks.email}?${params.toString()}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${contactLinks.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    message,
  )}`;
}

export function instagramLink() {
  return `https://www.instagram.com/${contactLinks.instagramHandle}/`;
}

export function youtubeLink() {
  return contactLinks.youtubeChannelUrl;
}
