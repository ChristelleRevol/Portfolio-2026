import FormulaireContact from "../components/Formulaire_contact.jsx"
import "../styles/Contact.css"

import linkedin from "../assets/images/logos/linkedin.svg"
import github from "../assets/images/logos/github.svg"

const Contact = () => {
  return (
  <div class="container-contact">
    <div class="references">
				<div class="ref-group">
					<h2>Email</h2>
					<a href="mailto:christellerevol.works@gmail.com" className="ref-group-mail">
						christellerevol.works@gmail.com
					</a>
					{/* <p>christellerevol.works@gmail.com</p> */}
				</div>
				<div class="ref-group">
					<h2>Réseaux Sociaux</h2>
					<div className="contact-page-logo-container">
						<a
							href="https://fr.linkedin.com/in/christelle-revol-458923130"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={linkedin}
								alt="linkedin link"
								className="contact-page-logo"
							/>
						</a>
						<a
							href="https://github.com/ChristelleRevol"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={github} alt="github link" className="contact-page-logo" />
						</a>
					</div>
				</div>
			</div>

    <FormulaireContact />
  </div>
)}

export default Contact
