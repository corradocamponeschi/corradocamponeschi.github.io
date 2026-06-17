export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ContactLinks = {
  email: string;
  whatsapp: string;
  instagramHandle: string;
};

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
};

export const navItems: NavItem[] = [
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Metodo", href: "#metodo" },
  { label: "Percorsi", href: "#percorsi" },
  { label: "Progetti", href: "#progetti" },
  { label: "Contatti", href: "#contatti" },
];

export const openingManifesto = {
  title: "Non si tratta di durare di più. Si tratta di sentire di più.",
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
    "Dalla prestazione alla presenza · Dal controllo all’ascolto · Dal corpo contratto al corpo vivo · Dalla vergogna alla verità ·",
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
    title: "Emozione",
    summary:
      "Riconoscere vergogna, paura, rabbia, bisogno e vulnerabilità, trasformandole in possibilità di ascolto e consapevolezza.",
    icon: "heart",
  },
  {
    title: "Desiderio",
    summary:
      "Ascoltare cosa muove davvero l’attrazione, il piacere, il contatto e la sessualità, oltre gli automatismi e le aspettative.",
    icon: "flame",
  },
  {
    title: "Energia",
    summary:
      "Lavorare con pratiche yogiche, tantriche e taoiste senza ridurle a tecnica performativa, ma come strumenti di presenza e integrazione.",
    icon: "star",
  },
  {
    title: "Relazione",
    summary:
      "Portare comunicazione empatica, confini, ascolto e responsabilità nell’incontro con l’altro.",
    icon: "circle",
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
