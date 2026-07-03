import Rover from "../assets/images/logos/rover_logo.png"
import Envelope from "../assets/images/logos/envelope.svg"

import "../styles/Pet-footer.css"

const PetFooter = () => {
  return (
    <div className="pet-footer">
      <div className="pet-footer-name">
        <p className="pet-footer-name-orange">Christelle</p>
        <p>Revol</p>
      </div>

      <div className="pet-footer-menu">
        <a href="#accueil">Accueil</a>
        <a href="#a-propos">À propos</a>
        <a href="#services">Services & Tarifs</a>
        <a href="#portraits">Portraits</a>
        <a href="#contact">Contact</a>
      </div>

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
