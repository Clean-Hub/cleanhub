import './homeRecyclingCard2.css'

const HomeRecyclingCard2 = ({ img, title, content }) => {
  return (
    <div className='homeRecyclingCardContainer'>
      <img src={img} alt='card-img' />
      <p>{title}</p>
      <div className='homeRecyclingCardContent'>{content}</div>
    </div>
  )
}

export default HomeRecyclingCard2
