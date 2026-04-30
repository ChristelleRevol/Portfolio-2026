import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  return (
  <header className="nbar">
    <Link>
      <p className="nbar-name">Christelle Revol</p>
    </Link>

    <nav className="nbar-menu">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
  )
}

export default Navbar
