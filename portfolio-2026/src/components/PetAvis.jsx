import "../styles/Pet-avis.css"

import Line from "../assets/images/SVG/Pet-line.svg"

const PetAvis = () => {
  return (
    <div className="pet-avis-div">
      <img src={Line} className="pet-avis-line"/>
      <div className="pet-avis-list">
        <div className="pet-avis">
          <h3>Suzie et Sébastien</h3>
          <p className="pet-avis-animal">Koka, chat</p>
          <p>Lorem ipsum dolor sit amet consectetur. Convallis aenean mauris enim lectus.</p>
        </div>
        <div className="pet-avis">
          <h3>Célie et Laure</h3>
          <p className="pet-avis-animal">Spike, chien</p>
          <p>Lorem ipsum dolor sit amet consectetur. Convallis aenean mauris enim lectus.</p>
        </div>
        <div className="pet-avis">
          <h3>Lucie et Yves</h3>
          <p className="pet-avis-animal">Happy, chat</p>
          <p>Lorem ipsum dolor sit amet consectetur. Convallis aenean mauris enim lectus.</p>
        </div>
      </div>
    </div>
  )
}

export default PetAvis
