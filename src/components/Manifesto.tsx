import { authenticSexualityManifesto, openingManifesto } from "../content";

export function Manifesto() {
  return (
    <section className="manifesto section-anchor reveal" id="manifesto" aria-labelledby="manifesto-title">
      <div className="section-shell manifesto-grid">
        <div className="manifesto-lead">
          <h2
            id="manifesto-title"
            aria-label={`${openingManifesto.titleLines.join(" ")} ${openingManifesto.conclusion}`}
          >
            <span className="manifesto-lead-question" aria-hidden="true">
              {openingManifesto.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
            <span className="manifesto-lead-conclusion" aria-hidden="true">
              {openingManifesto.conclusion}
            </span>
          </h2>
          <blockquote>{openingManifesto.sideQuote}</blockquote>
        </div>

        <div className="manifesto-copy">
          {openingManifesto.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="manifesto-declaration">
            <h3>{authenticSexualityManifesto.title}</h3>
            <p className="manifesto-intro">{authenticSexualityManifesto.intro}</p>
            <ol>
              {authenticSexualityManifesto.principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{principle}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
