import './register.css'
import logo from '../../assets/img/loginLogo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Register = () => {
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
              <label for='lname' className='registerRFormL'>
                Firstname
              </label>
              <div className='userDivider'>
                <input type='text' className='passwordBtn' />
              </div>
            </div>
            <div className='userR'>
              <label for='lname' className='registerRFormL'>
                Lastname
              </label>
              <div className='userDivider'>
                <input type='text' className='passwordBtn' />
              </div>
            </div>
          </div>
          <label for='lname' className='registerRFormL'>
            Phone
          </label>
          <div className='inputPass'>
            <input type='text' className='passwordBtn' />
          </div>
          <label for='lname' className='registerRFormL'>
            Email
          </label>
          <div className='inputPass'>
            <input type='email' className='passwordBtn' />
          </div>

          <div className='user'>
            <div className='userL'>
              <label for='lname' className='registerRFormL'>
                Password
              </label>
              <div className='userDivider'>
                <input type='password' className='passwordBtn' />
                <FontAwesomeIcon icon={faEye} className='eyes' />
              </div>
            </div>
            <div className='userR'>
              <label for='lname' className='registerRFormL'>
                Confirm Password
              </label>
              <div className='userDivider'>
                <input type='password' className='passwordBtn' />
                <FontAwesomeIcon icon={faEye} className='eyes' />
              </div>
            </div>
          </div>
        </form>
        <div className='forgetP'>
          <p className='forgetPw'>
            Forget Password? <span className='reset'>Reset Password</span>
          </p>
          <div className='rememberMe'>
            <p className='rememeberMeText'>Remember Me</p>
            <div className='rememberMeCB'>check box</div>
          </div>
        </div>
        <div className='registerSignInSocial'>
          <button className='registerSignInBtn'>SIGN UP</button>
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
