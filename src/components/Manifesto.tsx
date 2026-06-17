import { authenticSexualityManifesto, openingManifesto } from "../content";

export function Manifesto() {
  return (
    <section className="manifesto section-anchor reveal" id="manifesto" aria-labelledby="manifesto-title">
      <div className="section-shell manifesto-grid">
        <div className="manifesto-lead">
          <h2 id="manifesto-title">{openingManifesto.title}</h2>
        </div>

        <div className="manifesto-copy">
          {openingManifesto.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="manifesto-declaration">
            <h3>{authenticSexualityManifesto.title}</h3>
            {authenticSexualityManifesto.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
