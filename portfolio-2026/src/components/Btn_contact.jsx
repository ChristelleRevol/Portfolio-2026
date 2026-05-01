import "../styles/Btn_contact.css"
import messageLogo from "../assets/images/logos/envelope.svg"

const BtnContact = () => {
  return (
    <a href="/contact" className="btn-contact">
    <img src={messageLogo} alt="" className="btn-contact-logo"/>
      Contact me
    </a>

  )
}

export default BtnContact
