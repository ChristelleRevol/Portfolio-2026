import "../styles/Projects.css"

import { useState } from "react"

import { projectsData } from "../Data/Projects.js"
import ImageCards from "../components/Image_card.jsx"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("")

  const toggleFilter = (filter) => {
    setActiveFilter(prev => prev === filter ? "" : filter
    )
  }

  const filteredProjects = activeFilter === ""
    ? projectsData                       // aucun filtre = tout afficher
    : projectsData.filter(p => p.category === activeFilter)

  return (
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
        <div className={`grid ${activeFilter.length === 0 ? "grid--default" : ""}`}>
          {filteredProjects.map((project) => (
            <ImageCards key={project.className} {...project}/>
          ))}
        </div>
      </div>
    </div>)
}

export default Projects
