import "../styles/Projects.css"
import "../styles/image_cards.css"

import { Link } from "react-router-dom"
import { useState } from "react"

import { projectsData } from "../Data/Projects.js"
import ImageCards from "../components/Image_card.jsx"
import BtnContact from "../components/Btn_contact.jsx"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const toggleFilter = (filter) => {
    setIsLoading(true)
    const delay = Math.random() * 1000 + 1000 // entre 1000 et 2000ms

    setTimeout(() => {
      setActiveFilter(prev => prev === filter ? "" : filter)
      setIsLoading(false)
    }, delay)
  }

  const filteredProjects = activeFilter === ""
    ? projectsData                       // aucun filtre = tout afficher
    : projectsData.filter(p => p.category === activeFilter)

  return (
    <div>
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="filter-container">
          <p>Filter by:</p>
          <div className="filters">
            <span
              className={`filter ${activeFilter.includes("design") ? "active" : ""}`}
              onClick={() => toggleFilter("design")}
            >
              Web Design
            </span>
            <span
              className={`filter ${activeFilter.includes("development") ? "active" : ""}`}
              onClick={() => toggleFilter("development")}
            >
              Web Development
            </span>
          </div>
        </div>

        <div className="grid-container">
          {isLoading ? (<div className="loading-overlay">
              <div className="loader">
              </div>
            </div>) : (
              <div className={`grid grid--${activeFilter || "default"}`}>
            {filteredProjects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} className={`image-card ${project.className}`}>
                <ImageCards key={project.className} {...project}/>
              </Link>
            ))}
          </div>
            )}

        </div>
      </div>
      <div className="contact-project-page">
        <p>Need me in your team or to work on a project?</p>
        <BtnContact />
      </div>
    </div>)
}

export default Projects
