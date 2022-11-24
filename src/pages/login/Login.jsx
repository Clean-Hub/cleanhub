import './login.css'
import logo from '../../assets/img/loginLogo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import RememberMe from '../../components/rememberMe/RememberMe'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axiosInstance from '../../utils/axiosInstance'
import userSlice from '../../store/userSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const { login } = userSlice.actions
  const dispatch = useDispatch()
  // console.log('login', login)

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  // const handleClick = (e) => {
  //   e.preventDefault()

  //   const res = axiosInstance
  //     .post('/login', credentials)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(login({ ...data }))
  //       console.log('data', data)
  //       toast.success(data.success, {
  //         position: toast.POSITION.TOP_RIGHT,
  //       })
  //     })
  //     .catch((error) => {
  //       toast.error(error.response.data.error, {
  //         position: toast.POSITION.TOP_RIGHT,
  //       })
  //     })

  // console.log('res', res)
  // toast.success(res.data.success, {
  //   position: toast.POSITION.TOP_RIGHT,
  // })

  // if (err.response.data.error) {
  //   toast.error(err.response.data.error, {
  //     position: toast.POSITION.TOP_RIGHT,
  //   })
  // }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await axiosInstance.post('/login', credentials)
      console.log('res', res)
      dispatch(login({ ...res.data }))
      toast.success(res.data.success, {
        position: toast.POSITION.TOP_RIGHT,
      })
    } catch (err) {
      // console.log('err', err.response.data.error)

      toast.error(err.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  return (
    <div className='loginContainer'>
      <ToastContainer />

      <div className='loginL'>
        <img src={logo} alt='logo' className='loginLogo' />
      </div>
      <div className='loginR'>
        <div className='loginRHInfo'>
          <h1 className='loginRHInfoWelcome'>Welcome Back</h1>
          <span className='loginRHInfoSp'></span>
        </div>
        <form action='' className='loginRForm'>
          <label htmlFor='fname' className='loginRFormL'>
            Email
          </label>
          <input
            type='text'
            className='loginRFormInput'
            id='email'
            onChange={handleChange}
          />
          <label htmlFor='lname' className='loginRFormL'>
            Password
          </label>
          <div className='inputPassLogin'>
            <input
              type='password'
              className='passwordBtn'
              id='password'
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faEye} className='eyes' />
          </div>
        </form>
        <div className='forgetP'>
          <p className='forgetPw'>
            Forget Password? <span className='reset'>Reset Password</span>
          </p>
          <div className='rememberMe'>
            <p className='rememeberMeText'>Remember Me</p>
            <div className='rememberMeCB'>
              <RememberMe onChange={(e) => setRememberMe(e.target.checked)} />
            </div>
          </div>
        </div>
        <div className='signInSocial'>
          <button className='signInSocialS' onClick={handleClick}>
            SIGN IN
          </button>
          <span className='signInSocialOr'>OR</span>
          <button className='signInSocialG'>
            <span className='g'>G</span>
            <span className='o1'>O</span>
            <span className='o2'>O</span>
            <span className='g'>G</span>
            <span className='o2'>L</span>
            <span className='o1'>E</span>
          </button>
          <button className='signInSocialF'>FACEBOOK</button>
        </div>
        <div className='signInB'>
          <p className='signInP'>Already have an account?</p>
          <Link to='/register'>
            <button className='signInBtn'>SIGN UP</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
