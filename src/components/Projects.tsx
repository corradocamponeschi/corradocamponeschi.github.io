import { projects, whatsappLink } from "../content";
import { LinkButton } from "./LinkButton";

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
              <svg viewBox="0 0 180 180">
                <circle cx="90" cy="90" r="72" />
                <circle cx="90" cy="90" r="42" />
                <path d="M90 18v144M18 90h144M39 39l102 102M141 39 39 141" />
                <path d="M90 35 122 122 35 90 122 58 90 145 58 58 145 90 58 122Z" />
              </svg>
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
