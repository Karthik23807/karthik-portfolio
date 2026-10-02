import { education, experience } from '../data'
import '../styles/Timeline.css'

export default function Timeline() {
  const items = [
    ...experience.map((e) => ({
      period: e.period,
      title: e.role,
      subtitle: e.company,
      type: 'Experience',
    })),
    ...education.map((e) => ({
      period: e.period,
      title: e.degree,
      subtitle: e.institution,
      type: 'Education',
    })),
  ]

  if (!items.length) return null

  return (
    <section id="timeline" className="section section--alt">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__tag">Timeline</span>
          <h2 className="section__title">Education &amp; Experience</h2>
        </header>

        <ol className="timeline">
          {items.map((item, i) => (
            <li key={i} className="timeline__item reveal">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <span className="timeline__badge">{item.type}</span>
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__subtitle">{item.subtitle}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}