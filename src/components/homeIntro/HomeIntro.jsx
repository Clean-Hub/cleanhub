import './homeIntro.css'
import circle from '../../assets/img/cycle.png'

const HomeIntro = () => {
  return (
    <div className='homeIntroContainer'>
      <div className='homeIntroL'>
        <img src={circle} alt='homeIntroLImg' className='homeIntroLImg' />
      </div>
      <div className='homeIntroR'>
        <div className='homeIntroH2'>WHO WE ARE</div>
        <div className='homeIntroH1'>
          Yes, we believe in a cleaner and healthy LAGOS!
        </div>
        <div className='homeIntroP'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
          libero suspendisse in urna, fusce imperdiet aliquet. Tellus, mollis
          commodo turpis netus ultrices ut. Senectus in a vestibulum aliquet
          amet ornare tellus egestas. Condimentum sodales a faucibus eu enim.
        </div>
        <button className='homeIntroBtn'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default HomeIntro
