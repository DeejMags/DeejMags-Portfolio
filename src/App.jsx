import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Reveal from './components/Reveal.jsx'
import './App.css'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Rodrigo N. Maglatang Jr.</p>
        </footer>
      </main>
    </div>
  )
}
