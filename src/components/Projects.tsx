import { projects, whatsappLink } from "../content";
import { LinkButton } from "./LinkButton";
import thotasanaEmblem from "../assets/thotasana-emblem.jpg";
import { IntimacyGlyph } from "./Symbols";

export function Projects() {
  return (
    <section className="projects section-anchor reveal" id="progetti" aria-labelledby="projects-title">
      <h2 className="sr-only" id="projects-title">
        Progetti
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-panel project-panel--${project.tone}`} key={project.title}>
            <div className="project-mark" aria-hidden="true">
              {project.mark === "thotasana" ? (
                <img src={thotasanaEmblem} alt="" />
              ) : (
                <IntimacyGlyph />
              )}
            </div>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <LinkButton href={whatsappLink(project.message)} variant="light" target="_blank" rel="noreferrer">
                {project.cta}
              </LinkButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
