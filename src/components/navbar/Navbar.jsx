import './navbar.css'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbarRight'>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>HOW IT WORKS</li>
          <li>CONTACT</li>
          <li>BLOG</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
