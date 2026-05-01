import { useState } from "react"
import "../styles/Cv_modal.css"

const CvModal = () => {
  const [openResume, setOpenResume] = useState(false);
  return (
    <div>
      <button className="resume-btn" onClick={() => setOpenResume(true)}>
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
