import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/projects">Projects</Link>
    </nav>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App