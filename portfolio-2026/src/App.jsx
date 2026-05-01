import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
