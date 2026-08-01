import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.js'
import EmailButton from './EmailButton.jsx'

const navLinks = [
  { href: '/#about', label: 'about' },
  { href: '/#experience', label: 'experience' },
  { href: '/#projects', label: 'projects' },
  { href: '/#contact', label: 'contact' },
]

const pageLinks = [
  { to: '/stack', label: 'stack' },
  { to: '/skills', label: 'skills' },
  { to: '/hobbies', label: 'hobbies' },
]

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <button
          type="button"
          className={`theme-toggle${theme === 'dark' ? ' theme-toggle--dark' : ''}`}
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">☀</span>
          <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">☾</span>
        </button>
      </div>

      <h1 className="sidebar__name">
        <Link to="/">Rodrigo N. Maglatang Jr.</Link>
      </h1>
      <p className="sidebar__title">BS Information Technology &mdash; Web Technology Track</p>

      <nav className="sidebar__nav">
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href}>{link.label}</Link>
        ))}
      </nav>

      <div className="sidebar__links">
        <EmailButton>email</EmailButton>
        <span className="sidebar__phone">+63 969 190 4630</span>
      </div>

      <div className="sidebar__scroll">
        <p className="sidebar__label">explore</p>
        <div className="sidebar__page-links">
          {pageLinks.map((link) => (
            <Link key={link.to} to={link.to} className="sidebar__page-link">
              {link.label} <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
