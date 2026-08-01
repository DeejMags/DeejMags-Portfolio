import EmailButton from './EmailButton.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section__label">03 &mdash; contact</p>
      <p>
        Email: <EmailButton />
      </p>
      <p>
        Phone: <span>+63 969 190 4630</span>
      </p>
    </section>
  )
}
