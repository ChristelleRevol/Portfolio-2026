import "../styles/Pet_dessin.css"

import Spike from "../assets/images/Pets/Spike_dessin_ps.jpg"
import Koka from "../assets/images/Pets/Koka_dessin_ps.jpg"
import SpikePhoto from "../assets/images/Pets/Spike_et_dessin_ps.jpg"
import KokaPhoto from "../assets/images/Pets/Koka_et_dessin_1_ps.jpg"
import HappyPhoto from "../assets/images/Pets/Happy_et_dessin_2_ps.jpg"
import Wave2 from "../assets/images/SVG/wave6.svg"

const PetDessin = () => {
  return (
    <div className="pet-dessin">
      <h1>Pet-sitting et dessin</h1>
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
      <div className="dessin-et-animaux">
        <div className="dessin-groupe-photos">
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
