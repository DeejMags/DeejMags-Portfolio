import { Link } from 'react-router-dom'
import { skills } from '../data/profile.js'
import { ai } from '../data/profile.js'

export default function SkillsPage() {
  return (
    <section className="section page">
      <Link to="/" className="page__back">&larr; back</Link>
      <p className="section__label">skills</p>
      <ul className="page__grid">
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
