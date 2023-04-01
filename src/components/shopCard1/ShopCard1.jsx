import './shopCard1.css'

const ShopCard1 = ({ img, title }) => {
  return (
    <div className='shopCard1'>
      <div className='card'>
        <img src={img} alt='card-img' className='shopCardImg' />
      </div>
      <div>
        <div className='pContainer'>
          <h3 className='title'>{title}</h3>
          <h3 className='price'>$100</h3>
        </div>
        <div className='cartBtn'>
          <button className='addtocart'>
            <div className='pretext'>ADD TO CART</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopCard1
