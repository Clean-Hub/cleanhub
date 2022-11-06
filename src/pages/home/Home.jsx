import './home.css'
import HomeHero from '../../components/homeHero/HomeHero'
import HomeIntro from '../../components/homeIntro/HomeIntro'

const Home = () => {
  return (
    <div className='homeContainer'>
      <HomeHero />
      <HomeIntro />
    </div>
  )
}

export default Home
