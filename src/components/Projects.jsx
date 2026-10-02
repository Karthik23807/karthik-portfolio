import { projects } from '../data'
import '../styles/Projects.css'

export default function Projects() {
  if (!projects.length) return null

  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__tag">Projects</span>
          <h2 className="section__title">Things I&apos;ve built</h2>
        </header>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card reveal">
              <div className="project-card__top">
                <h3 className="project-card__title">{p.title}</h3>
              </div>

              <p className="project-card__desc">{p.description}</p>

              <ul className="project-card__tags">
                {p.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="project-card__actions">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn--primary btn--sm"
                  >
                    Live Demo ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn--ghost btn--sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}