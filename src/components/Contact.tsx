import { Instagram, Mail, MessageCircle } from "lucide-react";
import { contactLinks, finalContact, freeCallMessage, instagramLink, mailtoLink, whatsappLink } from "../content";
import portraitImage from "../assets/corrado-closeup.jpg";

export function Contact() {
  return (
    <section className="contact section-anchor reveal" id="contatti" aria-labelledby="contact-title">
      <div className="section-shell contact-grid">
        <div className="contact-card">
          <h2 id="contact-title">{finalContact.title}</h2>
          <p>{finalContact.body}</p>
          <div className="contact-actions" aria-label="Canali di contatto">
            <a href={whatsappLink(freeCallMessage)} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              <span>Richiedi una call gratuita</span>
            </a>
            <a href={mailtoLink("Call conoscitiva gratuita", freeCallMessage)}>
              <Mail size={18} aria-hidden="true" />
              <span>Scrivimi</span>
            </a>
            <a href={instagramLink()} target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" />
              <span>@{contactLinks.instagramHandle}</span>
            </a>
          </div>
        </div>

        <figure className="contact-image">
          <img src={portraitImage} alt="Corrado Camponeschi in ascolto tra le radici degli alberi" />
        </figure>
      </div>
    </section>
  );
}
