import './navbar.css'
import logo from '../../assets/img/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const { pathname } = useLocation()
  const url = pathname.split('/')[1]

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>
        <Link to='/'>
          <img src={logo} alt='logo' className='navbarLogo' />
        </Link>
        <div onClick={handleClick} className='icon'>
          {!open ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>
      </div>
      <div className={open ? 'navbarRight active' : 'navbarRight'}>
        <ul className='navbarUl'>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='/'>HOME</Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='/about'>ABOUT US</Link>
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
