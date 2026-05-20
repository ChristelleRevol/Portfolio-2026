import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { projectDetailsData } from "../Data/ProjectDetail.js"

import "../styles/Project_detail.css"
import Dot from "../assets/images/logos/dot.svg"
import ArrowLeft from "../assets/images/logos/caret-left.svg"
import ArrowRight from "../assets/images/logos/caret-right.svg"
import MonitorLogo from "../assets/images/logos/monitor.svg"

const ProjectDetail = () => {
 const { id } = useParams()
 const navigate = useNavigate()
 const project = projectDetailsData.find((p) => p.id === id)
 const [currentImg, setCurrentImg] = useState(0)

 if (!project) return <p>Projet introuvable</p>

 const prev = () => setCurrentImg((i) => (i-1 + project.images.length) % project.images.length)
 const next = () => setCurrentImg((i) => (i + 1) % project.images.length);

 return (
  <div>
   <div className="project-container">


      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          {project.images.length > 1 && (<img src={ArrowLeft} className="arrows" onClick={prev}/>)}

          <div className="screenshot-wrapper">
            <img src={project.images[currentImg]} alt={`${project.title} ${currentImg + 1}`} className="screenshots"/>
          </div>
          {project.images.length > 1 && (<img src={ArrowRight} className="arrows" onClick={next}/>)}
        </div>

        {/* Indicateurs (dots) */}
        {project.images.length > 1 && (
          <div className="dots">
            {project.images.map((_, i) => (
              <img
                src={Dot}
                key={i}
                className={i === currentImg ? "dot-active" : "dot"}
                onClick={() => setCurrentImg(i)}
              />
            ))}
          </div>
        )}

      </div>

      <div className="project-info">
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <ul>
          {project.list.map((li, index) => (
          <li key={`li${index}`}>{li}</li>
          ))}
        </ul>

        <div className="keywords-container">
          {project.keywords.map((kw) => (
          <span key={kw} className="keyword-tag">
            {kw}
          </span>))}
        </div>

      </div>
    </div>
    <button className="btn-back-projects" onClick={() => navigate("/projects")}>
      <img src={MonitorLogo} alt="" />
      Go back to Projects
      </button>
  </div>
 )
}

export default ProjectDetail
