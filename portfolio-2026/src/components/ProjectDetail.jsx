import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { projectDetailsData } from "../Data/ProjectDetail.js"

import "../styles/Project_detail.css"
import Dot from "../assets/images/logos/dot.svg"
import ArrowLeft from "../assets/images/logos/caret-left.svg"
import ArrowRight from "../assets/images/logos/caret-right.svg"

const ProjectDetail = () => {
 const { id } = useParams()
//  const navigate = useNavigate()
 const project = projectDetailsData.find((p) => p.id === id)
 const [currentImg, setCurrentImg] = useState(0)

 if (!project) return <p>Projet introuvable</p>

 const prev = () => setCurrentImg((i) => (i-1 + project.images.length) % project.images.length)
 const next = () => setCurrentImg((i) => (i + 1) % project.images.length);

 return (
   <div className="project-container">
      {/* <button onClick={() => navigate("/projects")}>← Retour</button> */}

      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          <img src={ArrowLeft} className="arrows" onClick={prev}/>
          <div className="screenshot-wrapper">
            <img src={project.images[currentImg]} alt={`${project.title} ${currentImg + 1}`} className="screenshots"/>
          </div>
          <img src={ArrowRight} className="arrows" onClick={next}/>
        </div>

        {/* Indicateurs (dots) */}
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
      </div>

      <div className="project-info">
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        {project.keywords.map((kw) => (
          <span key={kw} className="keyword-tag">
            {kw}
          </span>))}
      </div>
    </div>
 )
}

export default ProjectDetail
