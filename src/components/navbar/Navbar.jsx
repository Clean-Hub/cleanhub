import './navbar.css'
import logo from '../../assets/img/logo.png'
import { Link, useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Navbar = () => {
  const { pathname } = useLocation()
  const url = pathname.split('/')[1]
  const [showLink, setShowLink] = useState(false)
  const menuOpen = useRef()
  const ulRef = useRef()

  const toggleMenu = () => {
    setShowLink(!showLink)
    console.log('hi')
  }
  useEffect(() => {
    const lenghtHeight = menuOpen.current.getBoundingClientRect().height
    console.log(lenghtHeight)
    if (showLink) {
      ulRef.current.style.height = `${lenghtHeight}px`
    } else {
      ulRef.current.style.height = '0px'
    }
  }, [showLink])
  return (
    <div className='max-wrapper'>
      <nav className='max-wrapper-content nav'>
        <div className='nav-header'>
          <div className='nav-logo'>
            <Link to='/'>
              <img src={logo} alt='logo' className='navbarLogo' />
            </Link>
          </div>
          <div className='menu-bar' onClick={toggleMenu}>
            {!showLink ? (
              <FontAwesomeIcon icon={faBars} className='icon' />
            ) : (
              <FontAwesomeIcon icon={faXmark} className='icon' />
            )}
          </div>
        </div>
        <div className='navbarRight' ref={ulRef}>
          <ul className='navbarUl' ref={menuOpen}>
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
      </nav>
    </div>
  )
}

export default Navbar
