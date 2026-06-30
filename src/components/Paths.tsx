import { methodAreas, methodSection } from "../content";
import { PathSymbol } from "./Symbols";

export function Paths() {
  return (
    <section className="paths method section-anchor reveal" id="metodo" aria-labelledby="method-title">
      <div className="section-shell">
        <div className="section-heading section-heading--center">
          <h2 id="method-title">{methodSection.title}</h2>
          <p>{methodSection.lead}</p>
          <p className="section-intro">{methodSection.description}</p>
        </div>

        <div className="paths-rail">
          {methodAreas.map((path) => (
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
