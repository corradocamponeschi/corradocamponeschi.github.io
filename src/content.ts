export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ContactLinks = {
  email: string;
  whatsapp: string;
  instagramHandle: string;
};

export type Path = {
  title: string;
  summary: string;
  icon: "seat" | "breath" | "circle" | "heart" | "flame" | "star";
};

export type Offer = {
  title: string;
  summary: string;
  cta: string;
  message: string;
};

export type Project = {
  title: string;
  summary: string;
  cta: string;
  tone: "blue" | "copper";
  message: string;
};

export const contactLinks: ContactLinks = {
  email: "camponeschicorrado@hotmail.it",
  whatsapp: "+393334907347",
  instagramHandle: "corradocamponeschi",
};

export const navItems: NavItem[] = [
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Percorsi", href: "#percorsi" },
  { label: "Progetti", href: "#progetti" },
  { label: "Contatti", href: "#contatti" },
];

export const approachParagraphs = [
  "Cresciuto sulle sponde del lago di Bracciano, Corrado Camponeschi unisce l'ascolto della natura, la ricerca spirituale e una formazione tecnica orientata al rigore.",
  "La sua pratica attraversa yoga esoterico, mindfulness, meditazione, bioenergetica, contact improvisation, comunicazione empatica e medicina spirituale energetica.",
  "Ogni percorso accompagna la persona verso una maggiore integrazione di corpo, mente e spirito, con particolare attenzione alla sessualita consapevole e alla maturita emotiva.",
];

export const paths: Path[] = [
  {
    title: "Yoga Esoterico e Meditazione",
    summary: "Pratiche per espandere presenza, energia e conoscenza interiore.",
    icon: "seat",
  },
  {
    title: "Mindfulness",
    summary: "Ascolto, respiro e consapevolezza applicati alla vita quotidiana.",
    icon: "breath",
  },
  {
    title: "Consapevolezza Corporea",
    summary: "Lavoro somatico, bioenergetico e movimento consapevole.",
    icon: "circle",
  },
  {
    title: "Cerchi di Uomini",
    summary: "Condivisione, ascolto e fratellanza su identita, emozioni e desiderio.",
    icon: "heart",
  },
  {
    title: "Sessualita Consapevole",
    summary: "Relazione, intimita e trasformazione secondo chiavi taoiste, tantriche e yogiche.",
    icon: "flame",
  },
  {
    title: "Potenziale Sessuale Maschile",
    summary: "Tecniche di trasmutazione ed elevazione orientate a presenza e realizzazione.",
    icon: "star",
  },
];

export const offers: Offer[] = [
  {
    title: "Percorsi videoregistrati",
    summary:
      "Contenuti strutturati per studiare con continuita, in attesa della futura area video dedicata.",
    cta: "Richiedi informazioni",
    message:
      "Ciao Corrado, vorrei ricevere informazioni sui percorsi videoregistrati.",
  },
  {
    title: "Consulenza individuale",
    summary:
      "Uno spazio personale per orientare pratica, corpo, energia e ricerca interiore.",
    cta: "Scrivi per una consulenza",
    message:
      "Ciao Corrado, vorrei capire se una consulenza individuale puo essere adatta al mio percorso.",
  },
  {
    title: "Percorsi accademici",
    summary:
      "Accesso guidato ai programmi futuri legati ai due macroprogetti di ricerca e formazione.",
    cta: "Esprimi interesse",
    message:
      "Ciao Corrado, sono interessato ai percorsi accademici di ThotAsana e Unione Profonda.",
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
      "Un percorso con Anna Elena Comune dedicato a sessualita autentica, cura, arte, psicologia e spiritualita.",
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
