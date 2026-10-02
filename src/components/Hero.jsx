import { personal, projects } from '../data'
import '../styles/Hero.css'

export default function Hero() {
  const initials = personal.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text reveal">
          <p className="hero__eyebrow">Hello, I&apos;m</p>
          <h1 className="hero__name">{personal.name}</h1>
          <h2 className="hero__role">{personal.role}</h2>
          <p className="hero__intro">{personal.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a
              href="/Karthik_S_Resume.pdf"
              className="btn btn--ghost"
              download
            >
              Download Resume
            </a>
          </div>

          <ul className="hero__socials" aria-label="Social links">
            <li>
              <a href={`mailto:${personal.email}`} aria-label="Email">
                ✉️
              </a>
            </li>
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                🐙
              </a>
            </li>
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__visual reveal" aria-hidden="true">
          {personal.avatar ? (
            <img
              src={personal.avatar}
              alt={`${personal.name} avatar`}
              className="hero__avatar"
            />
          ) : (
            /* Placeholder avatar — replace by adding an image to /public
               and setting personal.avatar = '/your-image.jpg' in data.js */
            <div className="hero__avatar hero__avatar--placeholder">
              <span>{initials}</span>
            </div>
          )}
          <div className="hero__blob" />
        </div>
      </div>
    </section>
  )
}