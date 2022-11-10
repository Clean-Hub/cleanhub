import './login.css'
import logo from '../../assets/img/loginLogo.PNG'

const Login = () => {
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

        <div className='loginRForm'>
          <form action=''>
            <label for='fname'>First name:</label>
            <input type='text' id='lname' name='lname' value='Doe' />
            <label for='lname'>Last name:</label>
            <input type='text' id='lname' name='lname' value='Doe' />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div className='forgetP'>
          <p className='forgetPw'>
            Forget Password? <span className='reset'>Reset Password</span>
          </p>
          <div className='rememberMe'>
            <p className='rememeberMeText'>Remember Me</p>
            <div className='rememberMeCB'>check box</div>
          </div>
        </div>
        <div className='loginRAuth'></div>
        <div className='signInSocial'>
          <button className='signInSocialG'>GOOGLE</button>
          <button className='signInSocialG'>FACEBOOK</button>
        </div>
        <div className='signInB'>
          <p className='signInP'>Already have an account?</p>
          <button className='signInBtn'>SIGN IN</button>
        </div>
      </div>
    </div>
  )
}

export default Login
