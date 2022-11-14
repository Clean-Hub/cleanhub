import './rememberMe.css'

const RememberMe = ({ onChange }) => {
  return (
    <label className='inputWrapper'>
      <input type='checkbox' onChange={onChange} className='input' />
      <span className='inputSpan' />
    </label>
  )
}

export default RememberMe
