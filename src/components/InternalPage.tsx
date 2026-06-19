import { BookOpen, CalendarDays, Mail, MessageCircle, PlayCircle } from "lucide-react";
import {
  approachParagraphs,
  blogPlaceholders,
  eventPlaceholders,
  freeCallMessage,
  internalPages,
  mailtoLink,
  methodAreas,
  offers,
  whatsappLink,
  type InternalPagePath,
} from "../content";
import { LinkButton } from "./LinkButton";
import portraitImage from "../assets/corrado-tree-portrait.webp";

type InternalPageProps = {
  route: InternalPagePath;
};

export function InternalPage({ route }: InternalPageProps) {
  const page = internalPages[route];

  return (
    <article className={`inner-page inner-page--${route.slice(1)}`}>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="section-shell page-hero-grid">
          <div>
            <h1 id="page-title">{page.title}</h1>
            <p>{page.intro}</p>
          </div>

          {page.cta ? (
            <div className="page-hero-action">
              <LinkButton href={whatsappLink(page.message ?? freeCallMessage)} target="_blank" rel="noreferrer">
                {page.cta}
              </LinkButton>
              <a href={mailtoLink(page.title, page.message ?? freeCallMessage)}>
                <Mail size={18} aria-hidden="true" />
                <span>Scrivimi via email</span>
              </a>
            </div>
          ) : null}
        </div>
      </section>

      {route === "/classe-gratuita" ? <FreeClassPage /> : null}
      {route === "/il-metodo" ? <MethodPage /> : null}
      {route === "/chi-sono" ? <AboutPage /> : null}
      {route === "/percorsi" ? <PathsPage /> : null}
      {route === "/eventi-corsi" ? <EventsPage /> : null}
      {route === "/blog" ? <BlogPage /> : null}
    </article>
  );
}

function FreeClassPage() {
  const page = internalPages["/classe-gratuita"];

  return (
    <section className="page-body">
      <div className="section-shell page-two-column">
        <div className="video-placeholder" aria-label="Spazio video YouTube futuro">
          <PlayCircle size={52} strokeWidth={1.4} aria-hidden="true" />
          <p>{page.placeholder}</p>
        </div>
        <div className="page-copy-block">
          <h2>Una porta d’ingresso semplice</h2>
          <p>
            La classe gratuita sarà pensata come una pratica introduttiva, sobria
            e accessibile, per avvicinarti al lavoro senza fretta e senza
            pressione.
          </p>
          <LinkButton href={whatsappLink(freeCallMessage)} target="_blank" rel="noreferrer">
            Prenota una call conoscitiva gratuita
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function MethodPage() {
  const page = internalPages["/il-metodo"];

  return (
    <section className="page-body">
      <div className="section-shell">
        <div className="page-section-heading">
          <h2>Quattro pilastri</h2>
          <p>{page.placeholder}</p>
        </div>
        <div className="page-card-grid page-card-grid--four">
          {methodAreas.map((area) => (
            <article className="page-card" key={area.title}>
              <span className="page-card-index">{area.title.slice(0, 2)}</span>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
            </article>
          ))}
        </div>
        <div className="long-form-placeholder">
          <h2>Spazio per testo lungo</h2>
          <p>
            Questa area è pronta per accogliere una spiegazione più ampia del
            metodo, delle pratiche, dei limiti del lavoro educativo e del modo in
            cui si apre un percorso.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page-body page-body--soft">
      <div className="section-shell page-two-column page-two-column--about">
        <figure className="page-portrait">
          <img src={portraitImage} alt="Corrado Camponeschi tra le radici degli alberi" />
        </figure>
        <div className="page-copy-block">
          <h2>Una ricerca che passa dal corpo</h2>
          {approachParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function PathsPage() {
  return (
    <section className="page-body">
      <div className="section-shell">
        <div className="page-section-heading">
          <h2>Primi spazi di accompagnamento</h2>
          <p>
            Ogni percorso nasce da una conversazione gratuita, per comprendere il
            momento, il desiderio reale e il contenitore più adatto.
          </p>
        </div>
        <div className="page-card-grid">
          {offers.map((offer) => (
            <article className="page-card page-card--path" key={offer.title}>
              <h3>{offer.title}</h3>
              <p>{offer.summary}</p>
              <a href={whatsappLink(offer.message)} target="_blank" rel="noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                <span>{offer.cta}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <section className="page-body page-body--soft">
      <div className="section-shell">
        <div className="page-section-heading">
          <h2>In preparazione</h2>
          <p>{internalPages["/eventi-corsi"].placeholder}</p>
        </div>
        <div className="page-card-grid">
          {eventPlaceholders.map((event) => (
            <article className="page-card" key={event.title}>
              <CalendarDays size={28} strokeWidth={1.4} aria-hidden="true" />
              <h3>{event.title}</h3>
              <p>{event.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPage() {
  return (
    <section className="page-body">
      <div className="section-shell">
        <div className="page-section-heading">
          <h2>Archivio editoriale</h2>
          <p>{internalPages["/blog"].placeholder}</p>
        </div>
        <div className="blog-grid">
          {blogPlaceholders.map((article) => (
            <article className="blog-card" key={article.title}>
              <BookOpen size={26} strokeWidth={1.4} aria-hidden="true" />
              <p>In preparazione</p>
              <h3>{article.title}</h3>
              <span>{article.summary}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
