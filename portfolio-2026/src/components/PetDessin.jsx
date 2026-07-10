import "../styles/Pet_dessin.css"
import { useState, useEffect, useRef } from "react";

import Spike from "../assets/images/Pets/Spike_dessin_ps.jpg"
import Koka from "../assets/images/Pets/Koka_dessin_ps.jpg"
import SpikePhoto from "../assets/images/Pets/Spike_et_dessin_ps.jpg"
import KokaPhoto from "../assets/images/Pets/Koka_et_dessin_1_ps.jpg"
import HappyPhoto from "../assets/images/Pets/Happy_et_dessin_2_ps.jpg"
import Wave2 from "../assets/images/SVG/wave6.svg"
import ArrowLeft from "../assets/images/logos/caret-left.svg"
import ArrowRight from "../assets/images/logos/caret-right.svg"

const breakpoint = 1150

const PetDessin = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width < breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;

    container.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });
  };

  return (
    <div id="portraits">
      <h1>Pet-sitting et dessin</h1>

    {isMobile ? (
      <div className="dessin-infos">
        <div className="dessin-text">
          <p>Dessinatrice de profession, j'ai décidé d'associer ma passion des animaux à mon métier pour proposer à mes clients une offre exceptionnelle!
            Pour toutes personnes ayant eu recours au moins deux fois à mes services de pet-sitting, je vous propose un portrait de votre animal dessiné au crayon
            gris ou à l'aquarelle, moyennant un coût supplémentaire à tarifs fixes.
          </p>
          <p className="dessin-offert">Et pour mes <span className="dessin-text-green">5</span> premiers clients, un dessin au crayon gris de votre animal
          vous sera directement <span className="dessin-text-green">offert!</span></p>
          <p className="dessin-restants">Dessins restants à offrir: <span className="dessin-text-orange">3</span></p>
        </div>

        <div className="dessin-crayon">
          <h2>Crayon gris</h2>
          <img src={Spike} alt="dessin animal au crayon gris" />
          <p className="dessin-tarifs">À partir de <span>15€</span> de plus</p>
        </div>

        <div className="dessin-aquarelle">
          <h2>Aquarelle</h2>
          <img src={Koka} alt="dessin animal à l'aquarelle" />
          <p className="dessin-tarifs">À partir de <span>25€</span> de plus</p>
        </div>
      </div>
    ):(
      <div className="dessin-infos">
        <div className="dessin-crayon">
          <h2>Crayon gris</h2>
          <img src={Spike} alt="dessin animal au crayon gris" />
          <p className="dessin-tarifs">À partir de <span>15€</span> de plus</p>
        </div>
        <div className="dessin-text">
          <p>Dessinatrice de profession, j'ai décidé d'associer ma passion des animaux à mon métier pour proposer à mes clients une offre exceptionnelle!
            Pour toutes personnes ayant eu recours au moins deux fois à mes services de pet-sitting, je vous propose un portrait de votre animal dessiné au crayon
            gris ou à l'aquarelle, moyennant un coût supplémentaire à tarifs fixes.
          </p>
          <p className="dessin-offert">Et pour mes <span className="dessin-text-green">5</span> premiers clients, un dessin au crayon gris de votre animal
          vous sera directement <span className="dessin-text-green">offert!</span></p>
          <p className="dessin-restants">Dessins restants à offrir: <span className="dessin-text-orange">3</span></p>
        </div>
        <div className="dessin-aquarelle">
          <h2>Aquarelle</h2>
          <img src={Koka} alt="dessin animal à l'aquarelle" />
          <p className="dessin-tarifs">À partir de <span>25€</span> de plus</p>
        </div>
      </div>
    )}

      <div className="dessin-et-animaux">

        <div className="pet-slide-btn-group">
          <div className="slider-btn left" onClick={() => scroll("left")}>
            <img src={ArrowLeft} alt="slide left" className="pet-dessin-arrow"/>
          </div>
          <div className="slider-btn right" onClick={() => scroll("right")}>
            <img src={ArrowRight} alt="slide right" className="pet-dessin-arrow"/>
          </div>
        </div>

        <div className="dessin-groupe-photos" ref={sliderRef}>
          <img src={KokaPhoto} alt="Photo chat avec dessin" />
          <img src={SpikePhoto} alt="Photo chien avec dessin" />
          <img src={HappyPhoto} alt="Photo chat avec dessin 2" />
        </div>

        <img src={Wave2} className="dessin-wave" />
      </div>
    </div>
  )
}

export default PetDessin
