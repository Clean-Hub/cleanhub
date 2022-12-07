// import { useState } from 'react'
import './rememberMe.css'

const RememberMe = ({ onChange, id }) => {
  return (
    // This is another pattern of button slider
    <label className='inputWrapper'>
      <input type='checkbox' onChange={onChange} className='input' id={id} />
      <span className='inputSpan' />
    </label>
  )
}

export default RememberMe
