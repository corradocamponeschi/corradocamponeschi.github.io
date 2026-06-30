import { LinkButton } from "./LinkButton";
import { EgyptianBirdGlyph } from "./Symbols";
import { freeCallMessage, heroContent, whatsappLink } from "../content";
import heroImage from "../assets/corrado-tree-portrait.webp";

export function Hero() {
  return (
    <section className="hero section-anchor reveal" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Sessualità autentica, <span>corpo cosciente</span> e maturità emotiva
        </h1>
        <p className="hero-intro">{heroContent.intro}</p>
        <div className="hero-cta-group">
          <div className="hero-actions" aria-label="Azioni principali">
            <LinkButton href={whatsappLink(freeCallMessage)} target="_blank" rel="noreferrer">
              Prenota una call conoscitiva gratuita
            </LinkButton>
            <LinkButton href="/il-metodo" variant="secondary">
              Scopri il Metodo
            </LinkButton>
          </div>
          <p className="hero-free-note">{heroContent.freeCallNote}</p>
        </div>
        <div className="hero-symbol">
          <EgyptianBirdGlyph />
        </div>
      </div>

      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
}
