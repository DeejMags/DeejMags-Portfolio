const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'UC Innovation and Technology Transfer Office',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section__label">02 &mdash; experience</p>
      <ul className="experience__list">
        {experience.map((item) => (
          <li key={item.company}>
            <p className="experience__role">{item.role}</p>
            <p className="experience__company">{item.company}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
