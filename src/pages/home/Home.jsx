import './home.css'
import HomeHero from '../../components/homeHero/HomeHero'
import HomeIntro from '../../components/homeIntro/HomeIntro'
import HomeRecycling from '../../components/homeRecycling/HomeRecycling'
import HomeRecycInfo from '../../components/homeRecycInfo/HomeRecycInfo'
import Partners from '../../components/partners/Partners'
import Book from '../book/Book'

const Home = () => {
  return (
    <div className='homeContainer'>
      <HomeHero />
      <HomeIntro />
      <HomeRecycling />
      <HomeRecycInfo />
      <Partners />
      <Book />
    </div>
  )
}

export default Home
