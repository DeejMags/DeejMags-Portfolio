import profilePhoto from '../assets/new profile.png'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero__photo" src={profilePhoto} alt="Rodrigo N. Maglatang Jr." />
    </section>
  )
}
