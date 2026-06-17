import { approachParagraphs } from "../content";
import lakeImage from "../assets/lake-sunset.webp";
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
          <img src={lakeImage} alt="Lago al tramonto con canneti e colline" />
        </figure>
      </div>
    </section>
  );
}
