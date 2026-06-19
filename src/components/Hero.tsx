import { LinkButton } from "./LinkButton";
import { WingGlyph } from "./Symbols";
import { freeCallMessage, whatsappLink } from "../content";
import heroImage from "../assets/corrado-tree-portrait.webp";

export function Hero() {
  return (
    <section className="hero section-anchor reveal" id="top" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <div className="hero-copy">
        <h1 id="hero-title">
          Sessualità autentica, <span>corpo cosciente</span> e maturità emotiva
        </h1>
        <p>
          Percorsi individuali e di gruppo per uomini e coppie che desiderano
          uscire dalla prestazione e ritrovare presenza, piacere, ascolto e
          verità nel corpo.
        </p>
        <div className="hero-actions" aria-label="Azioni principali">
          <LinkButton href={whatsappLink(freeCallMessage)} target="_blank" rel="noreferrer">
            Prenota una call conoscitiva gratuita
          </LinkButton>
          <LinkButton href="/il-metodo" variant="secondary">
            Scopri il metodo
          </LinkButton>
        </div>
        <p className="hero-free-note">Call gratuita, semplice e senza impegno.</p>
        <div className="hero-symbol">
          <WingGlyph />
        </div>
      </div>

      <a className="scroll-cue" href="#manifesto" aria-label="Vai alla sezione Manifesto">
        <span />
      </a>
    </section>
  );
}
