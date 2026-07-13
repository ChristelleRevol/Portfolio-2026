import Rover from "../assets/images/logos/rover_logo.png"
import Envelope from "../assets/images/logos/envelope.svg"

import "../styles/Pet-footer.css"
import { useState, useEffect } from "react"

const breakpoint = 850

const PetFooter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = width < breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="pet-footer">
      <div className="pet-footer-name">
        <p className="pet-footer-name-orange">Christelle</p>
        <p>Revol</p>
      </div>

      {isMobile ? (
        <div className={`petbtn-menu-footer-group ${menuOpen ? "menu-open" : ""}`}>
          <button className="petbtn-menu-footer" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`petline-footer petline--1 ${menuOpen ? "petline-cross" : ""}`}></div>
            <div className={`petline-footer petline--2 ${menuOpen ? "petline-fade-out" : ""}`}></div>
            <div className={`petline-footer petline--3 ${menuOpen ? "petline-cross" : ""}`}></div>
          </button>

          <div className={`petmobile-menu-footer-grid ${menuOpen ? "open" : ""}`}>
            <div className="petmobile-menu-footer-clip">
              <div className={`petmobile-menu-footer ${menuOpen ? "open" : ""}`}>
                <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
                <a href="#a-propos" onClick={() => setMenuOpen(false)}>À propos</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services & Tarifs</a>
                <a href="#portraits" onClick={() => setMenuOpen(false)}>Portraits</a>
                <a href="#pet-contact" onClick={() => setMenuOpen(false)}>Contact</a>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div className="pet-footer-menu">
        <a href="#accueil">Accueil</a>
        <a href="#a-propos">À propos</a>
        <a href="#services">Services & Tarifs</a>
        <a href="#portraits">Portraits</a>
        <a href="#contact">Contact</a>
      </div>
      )}

      <div className="pet-footer-contacts">
        <div className="pet-footer-contact">
          <img src={Rover} alt="Rover logo" className="pet-footer-logo"/>
          <a href="">xxxxxxxxxxxx</a>
        </div>
        <div className="pet-footer-contact">
          <img src={Envelope} alt="Mail logo" className="pet-footer-logo-green"/>
          <a href="mailto">krystell.r.83@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default PetFooter
