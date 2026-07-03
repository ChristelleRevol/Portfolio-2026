import Plus from "../assets/images/logos/Plus_green.png"
import HeidiValko from "../assets/images/Pets/Heidi_Valko_compo.jpg"

import "../styles/Pet-propos.css"

const PetPropos = () => {
  return (
    <div id="a-propos">
      <div className="pet-propos-text">
        <h1>À propos</h1>
        <p>J'ai longtemps vécu avec des chats et chiens. Ce vécu et ma formation me donnent
          plusieurs atouts garantissants une prise en charge responsable et bienveillante
          de vos fidèles compagnons.
        </p>
        <div className="pet-propos-list">
          <div className="pet-propos-li">
            <img src={Plus} alt="tiret" />
            <p>Attestée par l'ACACED, je suis formée sur les besoins biologiques, physiologiques, comportementaux des chats et chiens</p>
          </div>
          <div className="pet-propos-li">
            <img src={Plus} alt="tiret" />
            <p>Très adaptable, je fais en sorte de garder une continuité dans l'éducation et les habitudes de chaque animal</p>
          </div>
          <div className="pet-propos-li">
            <img src={Plus} alt="tiret" />
            <p>En tant que bénévole à la SPAMMM, j'ai un engagement fort et concret pour le bien-être animal</p>
          </div>
          <div className="pet-propos-li">
            <img src={Plus} alt="tiret" />
            <p>Entre le pet-sitting et la SPAMMM, j'ai pu promener des chiens à la taille et au comportement très variés</p>
          </div>
          <div className="pet-propos-li">
            <img src={Plus} alt="tiret" />
            <p>Je suis très patiente avec les animaux afin de leur donner le temps nécessaire pour faire connaissance et les mettre à l'aise.
              Mes actions s'adaptent selon leurs envies
            </p>
          </div>
        </div>
      </div>
      <img src={HeidiValko} alt="Photo pet-sitteuse avec malinois et chiens de berger" className="Heidi-Valko"/>
    </div>
  )
}

export default PetPropos
