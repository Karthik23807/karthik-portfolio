import { personal } from '../data'
import '../styles/Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name.value}`
    )
    const body = encodeURIComponent(
      `${form.message.value}\n\n— ${form.name.value} (${form.email.value})`
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__tag">Contact</span>
          <h2 className="section__title">Let&apos;s work together</h2>
          <p className="section__sub">
            Have a project or opportunity? Drop me a message.
          </p>
        </header>

        <div className="contact__grid">
          <ul className="contact__info reveal">
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </li>
            <li>
              <span className="contact__label">Phone</span>
              <a href={`tel:${personal.phone}`}>{personal.phone}</a>
            </li>
            <li>
              <span className="contact__label">LinkedIn</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                linkedin.com/in/karthiks8072859076
              </a>
            </li>
            <li>
              <span className="contact__label">GitHub</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                github.com/Karthik23807
              </a>
            </li>
          </ul>

          <form className="contact__form reveal" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="How can I help?"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}