import { useTheme } from '../hooks/useTheme.js'
import EmailButton from './EmailButton.jsx'

const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

const stack = ['HTML', 'CSS', 'JavaScript', 'Laravel', 'SQL', 'Firebase', 'React', 'Figma', 'Git & GitHub', 'Vercel', 'VS Code']

const skills = [
  'HTML & CSS for front-end web development',
  'Figma',
  'Git & GitHub',
  'Time management',
  'Verbal & interpersonal communication',
]

const hobbies = [
  'Gaming',
  'Basketball',
  'Watching movies',
  'Cooking',
  'Traveling (soon)',
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
        <a href="#top">Rodrigo N. Maglatang Jr.</a>
      </h1>
      <p className="sidebar__title">BS Information Technology &mdash; Web Technology Track</p>

      <nav className="sidebar__nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="sidebar__links">
        <EmailButton>email</EmailButton>
        <span className="sidebar__phone">+63 969 190 4630</span>
      </div>

      <div className="sidebar__scroll">
        <div className="sidebar__block">
          <p className="sidebar__label">stack</p>
          <ul className="sidebar__list">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="sidebar__block">
          <p className="sidebar__label">skills</p>
          <ul className="sidebar__list">
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="sidebar__block">
          <p className="sidebar__label">hobbies</p>
          <ul className="sidebar__list">
            {hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
