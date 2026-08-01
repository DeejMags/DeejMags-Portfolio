import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Contact /></Reveal>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rodrigo N. Maglatang Jr.</p>
      </footer>
    </>
  )
}
