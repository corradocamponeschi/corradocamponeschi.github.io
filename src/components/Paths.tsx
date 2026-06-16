import { paths } from "../content";
import { PathSymbol } from "./Symbols";

export function Paths() {
  return (
    <section className="paths section-anchor" id="percorsi" aria-labelledby="paths-title">
      <div className="section-shell">
        <div className="section-heading section-heading--center">
          <h2 id="paths-title">Percorsi</h2>
          <p>
            Pratiche e spazi di studio per aprire un dialogo reale tra energia,
            corpo, relazione e coscienza.
          </p>
        </div>

        <div className="paths-rail">
          {paths.map((path) => (
            <article className="path-item" key={path.title}>
              <PathSymbol icon={path.icon} />
              <h3>{path.title}</h3>
              <p>{path.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
