import { skills } from '../data'
import '../styles/Skills.css'

export default function Skills() {
  const groups = Object.entries(skills)
  if (!groups.length) return null

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__tag">Skills</span>
          <h2 className="section__title">Technologies I work with</h2>
        </header>

        <div className="skills__grid">
          {groups.map(([category, items]) => (
            <div key={category} className="skills__card reveal">
              <h3 className="skills__card-title">{category}</h3>
              <ul className="skills__list">
                {items.map((s) => (
                  <li key={s} className="badge">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}