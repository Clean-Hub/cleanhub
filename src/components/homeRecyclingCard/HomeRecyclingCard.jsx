import './homeRecyclingCard.css'
import { cardInfo } from '../../demoData'

const HomeRecyclingCard = () => {
  return (
    <div className='homeRecyclingCardContainer'>
      {cardInfo.map((item, index) => {
        return (
          <div className='homeRecyclingCardWrapper' key={index}>
            <p className='homeRecyclingCardP'>{item}</p>
          </div>
        )
      })}
    </div>
  )
}
/* <div className='homeRecyclingCardWrapper'>
          {cardInfo.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div> */
export default HomeRecyclingCard
