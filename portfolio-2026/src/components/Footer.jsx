import "../styles/Footer.css"

import { Link } from "react-router-dom"

import linkedin from "../assets/images/logos/linkedin.svg"
import github from "../assets/images/logos/github.svg"

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://fr.linkedin.com/in/christelle-revol-458923130" target="_blank">
          <img src={linkedin} alt="linkedin link" className="footer-logo"/>
        </a>
        <a href="https://github.com/ChristelleRevol" target="_blank">
          <img src={github} alt="github link" className="footer-logo"/>
        </a>
      </div>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>

    <div>
      <p>christellerevol.works@gmail.com</p>
    </div>
    </footer>
  )
}

export default Footer
