import './register.css'
import logo from '../../assets/img/loginLogo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import RememberMe from '../../components/rememberMe/RememberMe'
import { useState } from 'react'

const Register = () => {
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <div className='loginContainer'>
      <div className='loginL'>
        <img src={logo} alt='logo' className='loginLogo' />
      </div>
      <div className='loginR'>
        <div className='loginRHInfo'>
          <h1 className='loginRHInfoWelcome'>Welcome Back</h1>
          <span className='loginRHInfoSp'></span>
        </div>
        <form action='' className='loginRForm'>
          <label for='fname' className='loginRFormL'>
            Email
          </label>
          <input type='text' className='loginRFormInput' />
          <label for='lname' className='loginRFormL'>
            Password
          </label>
          <div className='inputPass'>
            <input type='password' className='passwordBtn' />
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
          <button className='signInSocialS'>SIGN IN</button>
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
          <button className='signInBtn'>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default Register
