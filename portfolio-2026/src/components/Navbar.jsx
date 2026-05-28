import { Link } from "react-router-dom"
import "../styles/Navbar.css"

// import burger from "../assets/images/logos/list.svg"
// import close from "../assets/images/logos/x.svg"

import { useState, useEffect } from "react";

const breakpoint = 750

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = width < breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <header className="nbar">
    <Link to="/" className="nbar-name">Christelle Revol</Link>

    <p>{width}</p>

    {isMobile ? (
        <>
          {/* Bouton burger */}
          <button className="btn-menu-mobile" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`line line--1 ${menuOpen ? "line-cross" : ""}`}></div>
            <div className={`line line--2 ${menuOpen ? "line-fade-out" : ""}`}></div>
            <div className={`line line--3 ${menuOpen ? "line-cross" : ""}`}></div>
          </button>

          {/* Menu déroulant */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
        </>
      ) :(
    <nav className="nbar-menu">
      <Link to="/" className="nbar-menu-text">Home</Link>
      <Link to="/projects" className="nbar-menu-text">Projects</Link>
      <Link to="/contact" className="nbar-menu-text">Contact</Link>
    </nav>
    )}
  </header>
  )
}

export default Navbar
