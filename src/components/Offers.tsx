import { Mail } from "lucide-react";
import { mailtoLink, offers, offersSection, whatsappLink } from "../content";
import { LinkButton } from "./LinkButton";

export function Offers() {
  return (
    <section className="offers section-anchor" id="percorsi" aria-labelledby="offers-title">
      <div className="section-shell offers-grid">
        <div className="section-heading">
          <h2 id="offers-title">Scegli il tuo primo passo</h2>
          <p>{offersSection.intro}</p>
          <p className="offers-note">{offersSection.invitation}</p>
        </div>

        <div className="offer-list">
          {offers.map((offer, index) => (
            <article className="offer-item" key={offer.title}>
              <div>
                <span className="offer-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{offer.title}</h3>
                <p>{offer.summary}</p>
                {offer.keywords ? (
                  <div className="circle-keywords" aria-label="Parole chiave del cerchio">
                    {offer.keywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                ) : null}
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
