import { Link } from 'react-router-dom'
import { hobbies } from '../data/profile.js'

export default function HobbiesPage() {
  return (
    <section className="section page">
      <Link to="/" className="page__back">&larr; back</Link>
      <p className="section__label">hobbies</p>
      <ul className="page__grid">
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </section>
  )
}
