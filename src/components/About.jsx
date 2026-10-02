import { summary, education } from '../data'
import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__tag">About</span>
          <h2 className="section__title">A little about me</h2>
        </header>

        <div className="about__grid">
          <p className="about__text reveal">{summary}</p>

          <div className="about__edu reveal">
            <h3 className="about__subtitle">Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="about__edu-card">
                <span className="about__period">{e.period}</span>
                <h4 className="about__degree">{e.degree}</h4>
                <p className="about__institution">{e.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}