import './recyclingLogo.css'
import logo from '../../demoData'

const RecyclingLogo = () => {
  return (
    <div className='recyclingLogoContainer'>
      {logo.map((item) => (
        <div>
          <img src={item.photo} alt='' className='recyclingImg' />
          <h2 className='recyclingH'>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default RecyclingLogo
