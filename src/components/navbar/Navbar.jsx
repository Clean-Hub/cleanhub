import './navbar.css'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>
        <img src={logo} alt='logo' className='navbarLogo' />
      </div>
      <div className='navbarRight'>
        <ul className='navbarUl'>
          <li className='navbarLi'>HOME</li>
          <li className='navbarLi'>ABOUT US</li>
          <li className='navbarLi'>HOW IT WORKS</li>
          <li className='navbarLi'>CONTACT</li>
          <li className='navbarLi'>BLOG</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
