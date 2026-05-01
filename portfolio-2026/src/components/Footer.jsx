import "../styles/Footer.css"

import { Link } from "react-router-dom"

import linkedin from "../assets/images/logos/linkedin.svg"
import github from "../assets/images/logos/github.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos-group">
        <a href="https://fr.linkedin.com/in/christelle-revol-458923130" target="_blank">
          <img src={linkedin} alt="linkedin link" className="footer-logo"/>
        </a>
        <a href="https://github.com/ChristelleRevol" target="_blank">
          <img src={github} alt="github link" className="footer-logo"/>
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-name">
          <p>Christelle</p>
          <p>Revol</p>
        </div>

      <nav className="footer-menu">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="footer-contact">
        <p>christellerevol.works@gmail.com</p>
        <a href="/contact" class="footer-contact-btn">
          Contact me
        </a>
      </div>
    </div>
    </footer>
  )
}

export default Footer
