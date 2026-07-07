import "../styles/Pet-services.css"

const PetServices = () => {
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
        <a href="#pet-contact" className="pet-services-contact-a">Me contacter</a>
      </div>
    </div>
  )
}

export default PetServices
