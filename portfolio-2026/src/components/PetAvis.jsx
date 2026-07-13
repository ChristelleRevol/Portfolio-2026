import "../styles/Pet-avis.css"
import { useEffect, useState, useRef } from "react";

import Line from "../assets/images/SVG/Pet-line.svg"

const avisList = [
  { nom: "Suzie et Sébastien", animal: "Koka, chat", texte: "Lorem ipsum dolor sit amet consectetur. Convallis aenean mauris enim lectus." },
  { nom: "Célie et Laure", animal: "Spike, chien", texte: "Lorem ipsum dolor sit amet consectetur. Convallis aenean mauris enim lectus." },
  { nom: "Lucie et Yves", animal: "Happy, chat", texte: "Lorem ipsum dolor sit amet consectetur. Convallis aenean mauris enim lectus." },
];

const PetAvis = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const intervalRef = useRef(null);

  const nextIndex = (currentIndex + 1) % avisList.length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    intervalRef.current = setInterval(() => {
      setIsSliding(true); // déclenche la transition CSS
    }, 10000);
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  // appelé quand la transition CSS est terminée
  const handleTransitionEnd = () => {
    if (!isSliding) return;
    setCurrentIndex(nextIndex); // on affiche le suivant
    setIsSliding(false); // on retire la transition -> reset instantané à translateX(0)
  };

  const renderAvis = (avis, key) => (
    <div className="pet-avis" key={key}>
      <h3>{avis.nom}</h3>
      <p className="pet-avis-animal">{avis.animal}</p>
      <p className="pet-avis-text">{avis.texte}</p>
    </div>
  );

  return (
    <div className="pet-avis-div">
      <img src={Line} className="pet-avis-line" alt="" />
      <div className={`pet-avis-list ${isMobile ? "pet-avis-list-mobile" : ""}`}>
        {isMobile ? (
          <div className="pet-avis-track-wrapper">
            <div
              className={`pet-avis-track ${isSliding ? "is-sliding" : ""}`}
              onTransitionEnd={handleTransitionEnd}
            >
              {renderAvis(avisList[currentIndex], "current")}
              {renderAvis(avisList[nextIndex], "next")}
            </div>
          </div>
        ) : (
          avisList.map((avis, i) => renderAvis(avis, i))
        )}
      </div>
    </div>
  );
}

export default PetAvis
