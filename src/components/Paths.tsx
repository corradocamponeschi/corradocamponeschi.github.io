import { methodAreas } from "../content";
import { PathSymbol } from "./Symbols";

export function Paths() {
  return (
    <section className="paths method section-anchor reveal" id="metodo" aria-labelledby="method-title">
      <div className="section-shell">
        <div className="section-heading section-heading--center">
          <h2 id="method-title">Il Metodo Corpo–Cuore–Desiderio</h2>
          <p>
            Un lavoro integrato su corpo, emozioni, desiderio, energia e
            relazione.
          </p>
          <p className="section-intro">
            Il percorso unisce pratiche corporee, respiro, yoga, bioenergetica,
            comunicazione empatica e strumenti della tradizione tantrica e
            taoista. Non come tecniche da accumulare, ma come vie per tornare a
            sentire.
          </p>
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
