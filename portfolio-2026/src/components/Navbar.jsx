import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  return (
  <header className="nbar">
    <Link to="/" className="nbar-name">Christelle Revol</Link>

    <nav className="nbar-menu">
      <Link to="/" className="nbar-menu-text">Home</Link>
      <Link to="/projects" className="nbar-menu-text">Projects</Link>
      <Link to="/contact" className="nbar-menu-text">Contact</Link>
    </nav>
  </header>
  )
}

export default Navbar
