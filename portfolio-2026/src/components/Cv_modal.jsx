import { useState } from "react"
import cvLogo from "../assets/images/logos/user-square.svg"
import "../styles/Cv_modal.css"
import "../styles/Home_description.css"

const CvModal = () => {
  const [openResume, setOpenResume] = useState(false);
  return (
    <div>
      <button className="clearindigo-btn" onClick={() => setOpenResume(true)}>
        <img src={cvLogo} alt="cv logo" className="indigo-logo"/>
        My resume
      </button>

      {/* MODAL */}
      {openResume && (
        <div className="modal-overlay" onClick={() => setOpenResume(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <iframe
              src="/cv_Christelle_Revol.pdf"
              title="CV"
              className="pdf-viewer"
            />

          </div>
          </div>
        )}
    </div>

  )
}

export default CvModal
