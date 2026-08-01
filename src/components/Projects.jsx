const projects = [
  {
    name: 'AGAPAY Marketplace',
    description:
      'A gamified recycling marketplace where users post recyclable items for sale. ' +
      'Buyers can purchase items directly, or sellers can choose to drop the items off at a junkshop.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section__label">03 &mdash; projects</p>
      <div className="projects__list">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <a href="https://agapay-marketplace.vercel.app/" target="_blank" rel="noopener noreferrer">
                https://agapay-marketplace.vercel.app/
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
