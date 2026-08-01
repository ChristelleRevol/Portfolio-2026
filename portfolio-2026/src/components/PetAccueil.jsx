import "../styles/Pet_accueil.css"
import { useState, useEffect } from "react";

import paw from "../assets/images/logos/paw.svg"
import calendar from "../assets/images/logos/calendar-dots.svg"
import heart from "../assets/images/logos/heart.svg"
import NekoEtLena from "../assets/images/Pets/Photomontage_Accueil.png"

const breakpoint = 800

const PetAccueil = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width < breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div id="accueil">
      <h1>Pet-sitting</h1>
      <p className="pet-accueil-descr">
        Bienvenue sur ma page! <br />
        Je m'appelle Christelle et je m'occupe de vos animaux, chiens et chats. <br /><br />
        J'ai toujours vécu avec des animaux au point de développer un lien très fort avec eux.
        Être en leur compagnie est un immense bonheur, et je serais ravie de veiller sur eux en votre absence.
        Vous trouverez sur cette page toutes mes ifnormations ainsi que mon contact. <br /><br />
        J'ai hâte de faire connaissance avec vos adorables compagnons!
      </p>

      {isMobile ? (
        <div className="accueil-cards">
          <div className="accueil-card pet-orange">
            <img src={paw} alt="paw" />
            <h2>Chiens et chats</h2>
            <p>Tous les types et tous les poids sont les bienvenus.<br />
              Pour des raisons d'assurance je ne peux malheureusement pas
              m'occuper de chiens catégorisés.</p>
          </div>
          <div className="accueil-card">
            <img src={calendar} alt="time" />
            <h2>Pet-sitteuse depuis 2024</h2>
            <p>J'ai de l'expérience professionnelle et le savoir qui va avec pour m'occuper au mieux de vos animaux.</p>
          </div>
          <div className="accueil-card">
            <img src={heart} alt="heart" />
            <h2>100% de satisfaction</h2>
            <p>
              Des clients ravis et des moments de bonheur partagés avec leurs animaux.
            </p>
          </div>
          <img src={NekoEtLena} alt="Dog and cat photo" className="Neko-Lena"/>
        </div>

      ) : (
        <div>
          <div className="accueil-cards">
            <div className="accueil-card pet-orange">
              <img src={paw} alt="paw" />
              <h2>Chiens et chats</h2>
              <p>Tous les types et tous les poids sont les bienvenus.<br />
                Pour des raisons d'assurance je ne peux malheureusement pas
                m'occuper de chiens catégorisés.</p>
            </div>
            <div className="accueil-card">
              <img src={calendar} alt="time" />
              <h2>Pet-sitteuse depuis 2024</h2>
              <p>J'ai de l'expérience professionnelle et le savoir qui va avec pour m'occuper au mieux de vos animaux.</p>
            </div>
            <div className="accueil-card">
              <img src={heart} alt="heart" />
              <h2>100% de satisfaction</h2>
              <p>
                Des clients ravis et des moments de bonheur partagés avec leurs animaux.
              </p>
            </div>
          </div>
          <img src={NekoEtLena} alt="Dog and cat photo" className="Neko-Lena"/>
        </div>

      )}

    </div>
  )
}

export default PetAccueil
