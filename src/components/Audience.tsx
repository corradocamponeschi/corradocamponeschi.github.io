import { audienceColumns } from "../content";

export function Audience() {
  return (
    <section className="audience reveal" aria-labelledby="audience-title">
      <div className="section-shell">
        <div className="section-heading section-heading--center">
          <h2 id="audience-title">Per chi è questo lavoro</h2>
        </div>

        <div className="audience-grid">
          {audienceColumns.map((column) => (
            <article className="audience-card" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
