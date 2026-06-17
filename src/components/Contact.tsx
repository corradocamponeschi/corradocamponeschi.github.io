import { Instagram, Mail, MessageCircle } from "lucide-react";
import { contactLinks, instagramLink, mailtoLink, whatsappLink } from "../content";
import lakeImage from "../assets/lake-sunset.webp";

const contactMessage =
  "Ciao Corrado, vorrei prenotare una call conoscitiva per capire da dove iniziare.";

export function Contact() {
  return (
    <section className="contact section-anchor reveal" id="contatti" aria-labelledby="contact-title">
      <div className="section-shell contact-grid">
        <div className="contact-card">
          <h2 id="contact-title">Vuoi iniziare da una conversazione?</h2>
          <p>
            Se senti che questo lavoro risuona con il momento che stai
            attraversando, puoi scrivermi per una call conoscitiva. Sarà uno
            spazio semplice e senza impegno per capire quale percorso può essere
            più adatto a te.
          </p>
          <div className="contact-actions" aria-label="Canali di contatto">
            <a href={whatsappLink(contactMessage)} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              <span>Prenota una call conoscitiva</span>
            </a>
            <a href={mailtoLink("Call conoscitiva", contactMessage)}>
              <Mail size={18} aria-hidden="true" />
              <span>Scrivimi</span>
            </a>
            <a href={instagramLink()} target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" />
              <span>@{contactLinks.instagramHandle}</span>
            </a>
          </div>
        </div>

        <div className="contact-glyph" aria-hidden="true">
          <svg viewBox="0 0 180 260">
            <path d="M90 16v228" />
            <circle cx="90" cy="72" r="34" />
            <path d="M42 139c20-42 76-42 96 0" />
            <path d="M56 195c18-26 50-26 68 0" />
            <path d="M90 106v88M64 150h52" />
            <circle cx="90" cy="232" r="10" />
          </svg>
        </div>

        <figure className="contact-image">
          <img src={lakeImage} alt="Lago di Bracciano al tramonto" />
        </figure>
      </div>
    </section>
  );
}
