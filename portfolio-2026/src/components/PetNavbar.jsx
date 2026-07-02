import "../styles/Pet_navbar.css"

const PetNavbar = () => {
  return (
    <div>
      <div className="pet-navbar">
        <p>Christelle <span>Revol</span></p>
        <div className="pet-links">
          <a href="#accueil">Accueil</a>
          <a href="#a-propos">À propos</a>
          <a href="#services">Services & Tarifs</a>
          <a href="#portraits">Portraits</a>
        </div>
        <div className="pet-btn-contact">
          <a href="#pet-contact">Contact</a>
        </div>
      </div>

    </div>
  )
}

export default PetNavbar
