import { Mail } from "lucide-react";
import { mailtoLink, offers, whatsappLink } from "../content";
import { LinkButton } from "./LinkButton";

export function Offers() {
  return (
    <section className="offers" aria-labelledby="offers-title">
      <div className="section-shell offers-grid">
        <div className="section-heading">
          <h2 id="offers-title">Verso percorsi acquistabili</h2>
          <p>
            Questa prima versione raccoglie interesse qualificato. I contenuti
            videoregistrati, le consulenze e i percorsi accademici saranno
            introdotti senza simulare pagamenti o aree riservate.
          </p>
        </div>

        <div className="offer-list">
          {offers.map((offer) => (
            <article className="offer-item" key={offer.title}>
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.summary}</p>
              </div>
              <div className="offer-actions">
                <LinkButton href={whatsappLink(offer.message)} target="_blank" rel="noreferrer">
                  {offer.cta}
                </LinkButton>
                <a
                  className="mail-link"
                  href={mailtoLink(offer.title, offer.message)}
                  aria-label={`Invia email per ${offer.title}`}
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
