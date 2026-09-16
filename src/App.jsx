import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
    <nav className="flex gap-6 px-8 py-4 bg-gray-900 text-white shadow-md sticky top-0">
      <Link to="/" className="font-bold text-lg hover:text-blue-400">Home</Link>
      <Link to="/about" className="hover:text-blue-400">About</Link>
      <Link to="/contacts" className="hover:text-blue-400">Contacts</Link>
      <Link to="/projects" className="hover:text-blue-400">Projects</Link>
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