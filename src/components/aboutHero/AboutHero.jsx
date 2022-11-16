import './aboutHero.css'
import { sliderImg } from '../../demoData'
import BtnSlider from '../btnSlider/BtnSlider'
import { useState } from 'react'

const AboutHero = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== sliderImg.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === sliderImg.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(sliderImg.length)
    }
  }
  return (
    <div className='container-slider'>
      {sliderImg.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            key={obj.id}
          >
            <img src={obj.photo} alt='sliderImages' className='imgSlider' />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  )
}

export default AboutHero
