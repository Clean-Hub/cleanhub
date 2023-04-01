import React from 'react'
import ShopCard1 from '../shopCard1/ShopCard1'
import './shopCard2.css'
import ch1 from '../../assets/img/recycleProd1.PNG'
import ch2 from '../../assets/img/recycleProd2.PNG'
import ch3 from '../../assets/img/recycleProd3.PNG'
import ch4 from '../../assets/img/recycleProd4.PNG'
import ch5 from '../../assets/img/recycleProd5.png'
import ch6 from '../../assets/img/recycleProd6.PNG'
import ch7 from '../../assets/img/recycleProd7.PNG'
import ch8 from '../../assets/img/recycleProd8.PNG'

const ShopCard2 = () => {
  return (
    <div className='howitworks-wrapper'>
      <div className='howitworks-content'>
        <ShopCard1 img={ch1} title='Bottles For Sale' />
        <ShopCard1 img={ch2} title='Bottles and Can For Sale' />
        <ShopCard1 img={ch3} title='Clean Recycle For Sale' />

        <ShopCard1 img={ch4} title='Bottles For Sale' />
        <ShopCard1 img={ch5} title='Bottles and Can For Sale' />
        <ShopCard1 img={ch6} title='Clean Recycle For Sale' />

        <ShopCard1 img={ch7} title='Bottles For Sale' />
        <ShopCard1 img={ch8} title='Bottles and Can For Sale' />
        <ShopCard1 img={ch3} title='Clean Recycle For Sale' />
      </div>
    </div>
  )
}

export default ShopCard2
