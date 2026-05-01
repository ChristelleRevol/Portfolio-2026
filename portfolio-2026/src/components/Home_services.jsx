import "../styles/Home_services.css"
import code from "../assets/images/logos/code.svg"
import stack from "../assets/images/logos/stack.svg"
import palette from "../assets/images/logos/palette.svg"

import banner from "../assets/images/SVG/Services_banner.svg"

const HomeServices = () => {
  return (
    <div className="services-container">
      <div className="banner-container">
        <img src={banner} alt="services sum-up" className="services-banner"/>
      </div>

      <div className="services-main">
        <h1 className="orange-text-clear">My services</h1>

        <div className="cards-group">
          <div className="card">
            <div className="card-title">
              <img src={code} alt="code logo" className="card-logo"/>
              <h2 className="indigo-text">Development</h2>
              <img src={code} alt="code logo" className="hidden"/>
            </div>

            <ul>
              <li>Front-end</li>
              <li>Back-end</li>
              <li>Create and manage database</li>
              <li>RESTful applications</li>
              <li>Features integration</li>
              <li>Deployment</li>
              </ul>
          </div>
          <div className="card">
            <div className="card-title">
              <img src={stack} alt="code logo" class="card-logo-orange"/>
              <h2 className="orange-text-clear">Stack</h2>
              <img src={stack} alt="code logo" className="hidden"/>
            </div>

            <ul>
              <li>Javascript - React, Angular, Node.js</li>
              <li>Typescript</li>
              <li>Ruby on Rails</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL - PostgreSQL</li>
              <li>Wordpress</li>
              <li>Github</li>
              <li>Ubuntu</li>
              <li>Figma</li>
              <li>Suite Adobe</li>
              <li>Heroku</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">
              <img src={palette} alt="code logo" className="card-logo"/>
              <h2 className="indigo-text">UI / UX</h2>
              <img src={palette} alt="code logo" className="hidden"/>
            </div>

            <ul>
              <li>Clean UI</li>
              <li>User experience oriented</li>
              <li>Responsive layout</li>
              <li>Wireframe & prototypes</li>
              <li>Vectorial drawing</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
