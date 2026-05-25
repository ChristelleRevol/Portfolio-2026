import avatar from "../assets/images/SVG/Round_avatar.svg"
import bg from "../assets/images/SVG/Av_bg+grid.svg"
import monitorLogo from "../assets/images/logos/monitor.svg"
import linkedinLogo from "../assets/images/logos/linkedin.svg"
import githubLogo from "../assets/images/logos/github.svg"
import verticalLine from "../assets/images/SVG/Line-vertical.svg"

import "../styles/Home_description.css"
import CvModal from "./Cv_modal"
import BtnContact from "./Btn_contact"

const HomeDescription = () => {
  return (
    <div>
      <div className="avatar-container">
        <img src={avatar} alt="avatar image" className="avatar" />

        <div className="avatar-texts">
          <div className="avatar-text-left">
            <p className="avatar-text-hello">Hello, I'm</p>
            <p className="avatar-text-name">Christelle</p>
            <p className="avatar-text-lastname">Revol</p>
          </div>

          <p className="avatar-text-descr"><span className="highlight">Web developper fullstack</span>, I’m passionate about using my skills
          to contribute to innovative projects that combine technology
          with a clear awareness of tomorrow’s challenges.</p>
        </div>

        <div className="buttons-logos">
          <div className="description-btns">
            <BtnContact />
            <a href="/projects" className="home-projects-btn">
              <img src={monitorLogo} alt="projects logo" className="indigo-logo" />
              View projects
            </a>
            <CvModal />
          </div>

          <img src={verticalLine} alt="separation line" className="separation-line"/>

          <div className="description-logos">
              <a href="https://www.linkedin.com/in/christelle-revol-458923130/" target="_blank">
                <img src={linkedinLogo} alt="linkedin logo" className="logo-color-size"/>
              </a>
              <a href="https://github.com/ChristelleRevol" target="_blank">
                <img src={githubLogo} alt="github logo" className="logo-color-size"/>
              </a>
          </div>
        </div>


      </div>
      <div className="avatar-bg">
        <img src={bg} alt="" className="bg" />
      </div>
    </div>
  )
}

export default HomeDescription
