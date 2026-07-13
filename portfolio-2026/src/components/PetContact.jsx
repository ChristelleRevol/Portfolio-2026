import "../styles/Pet-contact.css"

import KokaU from "../assets/images/Pets/Koka_1_ps.jpg"
import Rover from "../assets/images/logos/rover_logo.png"
import Phone from "../assets/images/logos/phone.svg"
import Envelope from "../assets/images/logos/envelope.svg"
// import Rectangle from "../assets/images/SVG/Rectangle.svg"

const PetContact = () => {
  return (
<div id="pet-contact">
    <div className="petcontact-right">
      <h1>Me contacter</h1>
  </div>

  <img src={KokaU} alt="Photo pet-sitter avec chat" className="Koka-and-you"/>

  <div className="petcontact-rectangle-div">
    {/* <img src={Rectangle} alt="" className="petcontact-rectangle"/> */}
    <div className="petcontact-rectangle"/>

    <div className="petcontact-text-rectangle">
      <p>
        Vous pouvez me contacter sur WhatsApp, par téléphone, ou par mail.
        <br />
        Je possède aussi un compte sur Rover.
      </p>

      <div className="petcontact-infos-list">
        <div className="petcontact-infos">
          <img src={Rover} alt="Logo Rover" />
          <p>xxxxxxxxxxxx</p>
        </div>

        <div className="petcontact-infos">
          <img src={Phone} alt="Logo téléphone" className="petcontact-logo-white"/>
          <p>xxxxxxxxxxxx</p>
        </div>

        <div className="petcontact-infos">
          <img src={Envelope} alt="Logo mail" className="petcontact-logo-white"/>
          <p>xxxxxxxxxxxx</p>
        </div>
      </div>

    </div>
  </div>

</div>
  )
}

export default PetContact
