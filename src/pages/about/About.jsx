import AboutHero from '../../components/aboutHero/AboutHero'
import AboutIntro from '../../components/aboutIntro/AboutIntro'
import './about.css'

const About = () => {
  return (
    <div className='aboutContainer'>
      <AboutHero />
      <AboutIntro />
    </div>
  )
}

export default About
