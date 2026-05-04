import "../styles/Home_services.css"
import code from "../assets/images/logos/code.svg"
import stack from "../assets/images/logos/stack.svg"
import palette from "../assets/images/logos/palette.svg"
import monitorLogo from "../assets/images/logos/monitor.svg"

import angular from "../assets/images/white_logos/angular_white.png"
import bootstrap from "../assets/images/white_logos/Bootstrap_white.png"
import css from "../assets/images/white_logos/CSS3_white.png"
import figma from "../assets/images/white_logos/Figma_white.png"
import github from "../assets/images/white_logos/Github_white.png"
import heroku from "../assets/images/white_logos/heroku_white.png"
import html from "../assets/images/white_logos/HTML5_white.png"
import illustrator from "../assets/images/white_logos/illustrator_white.png"
import javascript from "../assets/images/white_logos/JavaScript_white.png"
import nodejs from "../assets/images/white_logos/nodejs_transp.png"
import photoshop from "../assets/images/white_logos/Photoshop_white.png"
import postgresql from "../assets/images/white_logos/Postgresql_white.png"
import rails from "../assets/images/white_logos/Rails_white.png"
import react from "../assets/images/white_logos/React_white.png"
import ruby from "../assets/images/white_logos/Ruby_white.png"
import sql from "../assets/images/white_logos/Sql_white.png"
import stimulus from "../assets/images/white_logos/stimulus_white.png"
import typescript from "../assets/images/white_logos/Typescript_white.png"
import ubuntu from "../assets/images/white_logos/ubuntu_white.png"
import wordpress from "../assets/images/white_logos/WordPress_White.png"

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

          <div className="card-orange">
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

          <div className="card3-and-btn">
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

            <div className="project-btn-container">
              <a href="/projects" className="services-project-btn">
                <img src={monitorLogo} alt="projects logo" className="services-project-logo" />
                View projects
              </a>
            </div>
          </div>

        </div>

        <div className="white-logo-group">
          <img src={ruby} alt="ruby logo" className="white-logo"/>
          <img src={rails} alt="rails logo" className="white-logo"/>
          <img src={javascript} alt="javascript logo" className="white-logo"/>
          <img src={react} alt="react logo" className="white-logo"/>
          <img src={angular} alt="angular logo" className="white-logo"/>
          <img src={nodejs} alt="nodejs logo" className="white-logo"/>
          <img src={stimulus} alt="stimulus logo" className="white-logo"/>
          <img src={typescript} alt="typescript logo" className="white-logo"/>
          <img src={html} alt="html logo" className="white-logo"/>
          <img src={css} alt="css logo" className="white-logo"/>
          <img src={bootstrap} alt="bootstrap logo" className="white-logo"/>
          <img src={postgresql} alt="postgresql logo" className="white-logo"/>
          <img src={sql} alt="sql logo" className="white-logo"/>
          <img src={github} alt="github logo" className="white-logo"/>
          <img src={figma} alt="figma logo" className="white-logo"/>
          <img src={photoshop} alt="photoshop logo" className="white-logo"/>
          <img src={illustrator} alt="illustrator logo" className="white-logo"/>
          <img src={wordpress} alt="wordpress logo" className="white-logo"/>
          <img src={ubuntu} alt="ubuntu logo" className="white-logo"/>
          <img src={heroku} alt="heroku logo" className="white-logo"/>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
