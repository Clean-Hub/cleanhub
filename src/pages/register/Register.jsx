import './register.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/img/loginLogo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { registerUser } from '../../slices/userSlice'

const Register = () => {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    agreement: '',
  })

  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.id === 'agreement') {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.checked }))
    } else {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    if (credentials.password === credentials.password2) {
      dispatch(registerUser(credentials))
    } else {
      setError('your password does not match')
    }
    console.log('credentials', credentials)
  }

  return (
    <div className='registerContainer'>
      <div className='registerL'>
        <img src={logo} alt='logo' className='registerLogo' />
        <div className='registerSignInB'>
          <p className='registerSignInP'>Already have an account?</p>
          <Link to='/login'>
            <button className='registerSignInSocialS'>SIGN IN</button>
          </Link>
        </div>
      </div>

      <div className='registerR'>
        <div className='registerRHInfo'>
          <h1 className='registerRHInfoWelcome'>Getting Started</h1>
          <span className='registerRHInfoSp'></span>
        </div>
        <form action='' className='registerRForm'>
          <div className='user'>
            <div className='userL'>
              <label htmlFor='lname' className='registerRFormL'>
                Firstname
              </label>
              <div className='userDivider'>
                <input
                  type='text'
                  className='passwordBtn'
                  id='firstName'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='userR'>
              <label htmlFor='lname' className='registerRFormL'>
                Lastname
              </label>
              <div className='userDivider'>
                <input
                  type='text'
                  className='passwordBtn'
                  id='lastName'
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <label htmlFor='lname' className='registerRFormL mail'>
            Phone
          </label>
          <div className='inputPass'>
            <input
              type='text'
              className='passwordBtn'
              id='phone'
              onChange={handleChange}
            />
          </div>
          <label htmlFor='lname' className='registerRFormL mail'>
            Email
          </label>
          <div className='inputPass'>
            <input
              type='email'
              className='passwordBtn'
              id='email'
              onChange={handleChange}
            />
          </div>

          <div className='user'>
            <div className='userL'>
              <label htmlFor='lname' className='registerRFormL'>
                Password
              </label>
              <div className='userDivider'>
                <input
                  type='password'
                  className='passwordBtn'
                  id='password'
                  onChange={handleChange}
                />
                <FontAwesomeIcon icon={faEye} className='eyes' />
              </div>
            </div>
            <div className='userR'>
              <label htmlFor='lname' className='registerRFormL cf'>
                Confirm Password
              </label>
              <div className='userDivider cf2'>
                <input
                  type='password'
                  className='passwordBtn'
                  id='password2'
                  onChange={handleChange}
                />
                <FontAwesomeIcon icon={faEye} className='eyes' />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
        </form>
        <div className='registerTerms'>
          <input
            type='checkbox'
            className='registerTermsCheck'
            id='agreement'
            onChange={handleChange}
          />
          <p className='registerTermsP'>
            I agree to Cleanhub’s
            <span className='registerTermsSp'> Terms of Condition</span> and
            <span className='registerTermsSp'> Privacy Policy</span>
          </p>
        </div>
        <div className='registerSignInSocial'>
          <button className='registerSignInBtn' onClick={handleClick}>
            SIGN UP
          </button>
          <span className='registerSignInSocialOr'>OR</span>
          <button className='registerSignInSocialG'>
            <span className='g'>G</span>
            <span className='o1'>O</span>
            <span className='o2'>O</span>
            <span className='g'>G</span>
            <span className='o2'>L</span>
            <span className='o1'>E</span>
          </button>
          <button className='registerSignInSocialF'>FACEBOOK</button>
        </div>
      </div>
    </div>
  )
}

export default Register
