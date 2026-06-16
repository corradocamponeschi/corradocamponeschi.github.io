import { LinkButton } from "./LinkButton";
import { WingGlyph } from "./Symbols";
import heroImage from "../assets/hero-lake-movement.webp";

export function Hero() {
  return (
    <section className="hero section-anchor" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Integrare corpo, mente e spirito</h1>
        <p>
          Yoga esoterico, mindfulness e percorsi di consapevolezza per abitare
          con autenticita il proprio potenziale.
        </p>
        <div className="hero-actions" aria-label="Azioni principali">
          <LinkButton href="#percorsi">Inizia un percorso</LinkButton>
          <LinkButton href="#progetti" variant="secondary">
            Scopri i progetti
          </LinkButton>
        </div>
        <WingGlyph />
      </div>

      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <a className="scroll-cue" href="#chi-sono" aria-label="Vai alla sezione Chi sono">
        <span />
      </a>
    </section>
  );
}
