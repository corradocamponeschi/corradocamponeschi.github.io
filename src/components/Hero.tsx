import { LinkButton } from "./LinkButton";
import { WingGlyph } from "./Symbols";
import heroImage from "../assets/hero-lake-movement.webp";

export function Hero() {
  return (
    <section className="hero section-anchor reveal" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Sessualità autentica, corpo vivo e maturità emotiva</h1>
        <p>
          Percorsi individuali e di gruppo per uomini e coppie che desiderano
          uscire dalla prestazione e ritrovare presenza, piacere, ascolto e
          verità nel corpo.
        </p>
        <div className="hero-actions" aria-label="Azioni principali">
          <LinkButton href="#contatti">Prenota una call conoscitiva</LinkButton>
          <LinkButton href="#metodo" variant="secondary">
            Scopri il metodo
          </LinkButton>
        </div>
        <div className="hero-symbol">
          <WingGlyph />
        </div>
      </div>

      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <a className="scroll-cue" href="#manifesto" aria-label="Vai alla sezione Manifesto">
        <span />
      </a>
    </section>
  );
}
