import { approachParagraphs } from "../content";
import portraitImage from "../assets/corrado-closeup.jpg";
import { VerticalGlyph } from "./Symbols";

export function Approach() {
  return (
    <section className="approach section-anchor reveal" id="chi-sono" aria-labelledby="approach-title">
      <div className="section-shell approach-grid">
        <VerticalGlyph />
        <div className="approach-copy">
          <h2 id="approach-title">Chi sono</h2>
          {approachParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <figure className="framed-image">
          <img src={portraitImage} alt="Ritratto di Corrado Camponeschi tra le radici degli alberi" />
        </figure>
      </div>
    </section>
  );
}
