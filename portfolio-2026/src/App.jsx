import { Routes, Route, useLocation, useMatch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects';
import ProjectDetail from "./components/ProjectDetail.jsx"
import Contact from './pages/Contact'
import ParticlesBackground from './components/ParticlesBackground';

const PARTICLES_CONFIG = {
  "/":          { maskLeft: "18%", maskWidth: "64%" },      // masque standard
  "/projects":  { maskLeft: "15%", maskWidth: "70%" },      // masque plus large
  "/contact":   { maskLeft: "25%", maskWidth: "50%" }
};

const App = () => {
  const location = useLocation();
  const isProjectDetail = useMatch("/projects/:id");

  const isTouchDevice =
    window.matchMedia("(pointer: coarse)").matches &&
  window.matchMedia("(hover: none)").matches;

  const particlesConfig = (() => {
    if (isTouchDevice) return { disabled: true };
    // Cas 3 : page dynamique → aucune particule
    if (isProjectDetail) return { noMask: true };

    // Config par route exacte, sinon config par défaut
    return PARTICLES_CONFIG[location.pathname] ?? { maskLeft: "18%", maskWidth: "64%" };
  })();

  return (
    <div className='app'>

      <ParticlesBackground {...particlesConfig}/>

        <Navbar />

        <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>

        <Footer />

    </div>
  )
}

export default App
