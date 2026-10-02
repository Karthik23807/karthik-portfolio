import { personal } from '../data'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <ul className="footer__links">
          <li>
            <a href={`mailto:${personal.email}`}>Email</a>
          </li>
          <li>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}