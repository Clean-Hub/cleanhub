import './navbar.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>
        <Link to='/'>
          <img src={logo} alt='logo' className='navbarLogo' />
        </Link>
      </div>
      <div className='navbarRight'>
        <ul className='navbarUl'>
          <li className='navbarLi'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='navbarLi'>
            <Link to='#'>ABOUT US</Link>
          </li>
          <li className='navbarLi'>
            <Link to='#'>HOW IT WORKS</Link>
          </li>
          <li className='navbarLi'>
            <Link to='#'>CONTACT</Link>
          </li>
          <li className='navbarLi'>
            <Link to='#'>BLOG</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
