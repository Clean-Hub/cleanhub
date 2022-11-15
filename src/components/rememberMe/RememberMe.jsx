// import { useState } from 'react'
import './rememberMe.css'

const RememberMe = ({ onChange }) => {
  // const [click, setClick] = useState(false)

  // const toggleHandler = () => {
  //   setClick(!click)
  // }
  return (
    // This is another pattern of button slider
    <label className='inputWrapper'>
      <input type='checkbox' onChange={onChange} className='input' />
      <span className='inputSpan' />
    </label>

    // This is another pattern of button slider
    // <div className='toggle-btn'>
    //   <div
    //     onClick={toggleHandler}
    //     className={click ? 'toggle-btn--circle toggle' : 'toggle-btn--circle'}
    //   ></div>
    //   <div className='toggle-btn--slider'></div>
    // </div>
  )
}

export default RememberMe
