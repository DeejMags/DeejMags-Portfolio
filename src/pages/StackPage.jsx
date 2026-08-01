import { Link } from 'react-router-dom'
import { stack } from '../data/profile.js'
import { ai } from '../data/profile.js'

export default function StackPage() {
  return (
    <section className="section page">
      <Link to="/" className="page__back">&larr; back</Link>
      <p className="section__label">stack</p>
      <ul className="page__grid">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
        
      <section className="page__subsection">
        <p className="section__label">ai</p>
        <ul className="page__grid">
          {ai.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}
