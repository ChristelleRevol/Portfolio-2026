import "../styles/Pet-services.css"

import { useEffect, useState } from "react"

import Cat from "../assets/images/SVG/cat.svg"
import Dog from "../assets/images/SVG/dog.svg"

const breakpoint = 850

const PetServices = ({ onClick }) => {
  const [width, setWidth] = useState(window.innerWidth);
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
    <div id="services">
      <h1>Mes services et tarifs</h1>
      <div className="pet-services-cards">
        <div className="pet-services-card">
          <h2>Visite à domicile</h2>
          <p className="pet-services-text">Visite une à plusieurs fois par jour, selon la localisation du domicile, pour nourrir, nettoyer la litière, jouer, s'assurer que l'animal aille bien.</p>
          <div>
            <hr className="pet-divider" />
            <p className="pet-tarifs">10€ / heure</p>
          </div>
        </div>

        <div className="pet-services-card">
          <h2>Promenade de chien</h2>
          <p className="pet-services-text">Pour que votre chien prenne l'air, se divertise et fasse ses besoins.<br/>
          Tout types de chien acceptés en dehors des catégorisés</p>
          <div>
            <hr className="pet-divider" />
            <p className="pet-tarifs">10€ / heure</p>
          </div>
        </div>

        <div className="pet-services-card">
          <h2>Hébergement</h2>
          <p className="pet-services-text">Pour un séjour douillet chez moi pour votre animal en restant attentive à tout ses besoins.<br/>
          Travaillant à domicile, je serai toujours présente pour veiller sur votre fidèle compagnon</p>
          <div>
            <hr className="pet-divider" />
            <p className="pet-tarifs">18€ / jour</p>
          </div>
        </div>

        <div className="pet-services-card">
          <h2>Garde à domicile</h2>
          <p className="pet-services-text">Pour ne pas perturber votre animal dans ses habitudes et veiller aussi bien sur lui que sur votre domicile.<br/>
          Période maximale de garde à domicile: 3 jours</p>
          <div>
            <hr className="pet-divider" />
            <p className="pet-tarifs">21€ / jour</p>
          </div>
        </div>
      </div>

      <div className="pet-services-contact">
        <p>Vous souhaitez avoir plus d'infos sur mes services et les forfaits appliqués ?</p>
        <div className={`pet-services-contact-btn pet-fx-wrapper ${isActive ? "is-active" : ""}`}
            onClick={handleClick}>
            <img src={Cat} className="pet-fx-icon petservices-fx-icon--tl" alt="" />
            <img src={Dog} className="pet-fx-icon petservices-fx-icon--br" alt="" />
          <a href="#pet-contact" className="pet-services-contact-a">Me contacter</a>
        </div>

      </div>
    </div>
  )
}

export default PetServices
