import React from 'react'
import logo from '../../demoData'

const RecyclingLogo = () => {
  return (
    <div>
      {logo.map((item) => (
        <div>
          <img src={item.photo} alt='' />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default RecyclingLogo
