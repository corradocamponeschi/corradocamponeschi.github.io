import { Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import {
  contactLinks,
  freeCallMessage,
  instagramLink,
  mailtoLink,
  navItems,
  whatsappLink,
  youtubeLink,
} from "../content";

const privacyMessage =
  "Ciao Corrado, vorrei ricevere informazioni sulla privacy e sul trattamento dei dati.";

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-manifesto">
        Dal controllo alla presenza. Dalla prestazione all’intimità. Dal corpo
        dimenticato al corpo vivo.
      </p>
      <div className="footer-main">
        <div>
          <a className="footer-brand" href="/">
            Corrado Camponeschi
          </a>
          <div className="footer-line" aria-hidden="true" />
        </div>

        <nav aria-label="Navigazione footer">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-social" aria-label="Canali social e contatto">
          <a href={instagramLink()} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={21} />
          </a>
          <a href={youtubeLink()} target="_blank" rel="noreferrer" aria-label="YouTube">
            <Youtube size={22} />
          </a>
          <a href={whatsappLink(freeCallMessage)} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={21} />
          </a>
          <a href={mailtoLink("Richiesta informazioni", freeCallMessage)} aria-label={contactLinks.email}>
            <Mail size={21} />
          </a>
        </div>
      </div>
      <p className="copyright">
        2026 Corrado Camponeschi. Tutti i diritti riservati.
      </p>
      <div className="footer-utility">
        <a href={mailtoLink("Privacy", privacyMessage)}>Privacy</a>
      </div>
    </footer>
  );
}
