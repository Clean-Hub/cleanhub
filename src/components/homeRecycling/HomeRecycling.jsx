import HomeRecyclingCard from '../homeRecyclingCard/HomeRecyclingCard'
import RecyclingLogo from '../recyclingLogo/RecyclingLogo'
import './homeRecycling.css'

const HomeRecycling = () => {
  return (
    <div className='homeRecyclingContainer'>
      <div className='homeRecyclingInfo'>
        <h2 className='homeRecyclingInfoH2'>HOW IT WORKS</h2>
        <p className='homeRecyclingInfoP'>
          Make some cash from recycling that trash - Learn how it works
        </p>
      </div>
      <RecyclingLogo />
      <HomeRecyclingCard />
    </div>
  )
}

export default HomeRecycling
