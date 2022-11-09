import './navbar.css'
import logo from '../../assets/img/logo.png'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const { pathname } = useLocation()
  // console.log('pathname', pathname.split('/')[1])
  const url = pathname.split('/')[1]
  // const url = login
  console.log('url', url)
  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>
        <Link to='/'>
          <img src={logo} alt='logo' className='navbarLogo' />
        </Link>
      </div>
      <div className='navbarRight'>
        <ul className='navbarUl'>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='/'>HOME</Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='#'>ABOUT US</Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='#'>HOW IT WORKS</Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='#'>CONTACT</Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='#'>BLOG</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
