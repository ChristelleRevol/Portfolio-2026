import { useState, useEffect } from "react";
import "../styles/Pet_navbar.css"

import Cat from "../assets/images/SVG/cat.svg"
import Dog from "../assets/images/SVG/dog.svg"

const breakpoint = 850

const PetNavbar = ({ onClick }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isMobile = width < breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (e) => {
    if (isMobile) {
      setIsActive((prev) => !prev);
    }
    if (onClick) onClick(e);
  };

  return (
    <div id="petnavbar">

        {isMobile ? (
          <div className="pet-navbar">
          <p>Christelle <span>Revol</span></p>
          {/* Bouton burger */}
          <button className="petbtn-menu-mobile" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`petline petline--1 ${menuOpen ? "petline-cross" : ""}`}></div>
            <div className={`petline petline--2 ${menuOpen ? "petline-fade-out" : ""}`}></div>
            <div className={`petline petline--3 ${menuOpen ? "petline-cross" : ""}`}></div>
          </button>

          {/* Menu déroulant */}
            <div className={`petmobile-menu ${menuOpen ? "open" : ""}`}>
              <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
              <a href="#a-propos" onClick={() => setMenuOpen(false)}>À propos</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services & Tarifs</a>
              <a href="#portraits" onClick={() => setMenuOpen(false)}>Portraits</a>
              <a href="#pet-contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
            </div>

        ) :(
          <div className="pet-navbar">
            <p>Christelle <span>Revol</span></p>
            <div className="pet-links">
              <a href="#accueil">Accueil</a>
              <a href="#a-propos">À propos</a>
              <a href="#services">Services & Tarifs</a>
              <a href="#portraits">Portraits</a>
            </div>
            <div className={`pet-btn-contact pet-fx-wrapper ${isActive ? "is-active" : ""}`}
            onClick={handleClick}>
              <img src={Cat} className="pet-fx-icon pet-fx-icon--tl" alt="" />
              <img src={Dog} className="pet-fx-icon pet-fx-icon--br" alt="" />
              <a href="#pet-contact" className="pet-btn-contact-a">Contact</a>
            </div>
          </div>
        )}

      </div>
  )
}

export default PetNavbar
