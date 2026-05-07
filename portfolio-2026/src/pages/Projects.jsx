import "../styles/Projects.css"
import emity from "../assets/images/Screenshots/Mairie + entr.png"
import suzie from "../assets/images/Screenshots/Accueil.png"
import dixcit from "../assets/images/Screenshots/Services.png"
import colorPicker from "../assets/images/Screenshots/colorPicker.png"
import aiDuel from "../assets/images/Screenshots/Board.jpg"

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <div className="grid-container">
        <div className="grid">
          <img src={emity} alt="screenshot from emity work" className="emity"/>
          <img src={suzie} alt="screenshot from la seconde vie de suzie" className="suzie"/>
          <img src={dixcit} alt="screenshot from dixcit" className="dixcit"/>
          <img src={colorPicker} alt="link to the color picker work's description" className="color-picker"/>
          <img src={aiDuel} alt="screenshot from Ai-Duel work" className="ai-duel"/>
        </div>
      </div>
    </div>)
}

export default Projects
