import './home.css'
import HomeHero from '../../components/homeHero/HomeHero'
import HomeIntro from '../../components/homeIntro/HomeIntro'
import HomeRecycling from '../../components/homeRecycling/HomeRecycling'

const Home = () => {
  return (
    <div className='homeContainer'>
      <HomeHero />
      {/* <HomeIntro /> */}
      {/* <HomeRecycling /> */}
    </div>
  )
}

export default Home
