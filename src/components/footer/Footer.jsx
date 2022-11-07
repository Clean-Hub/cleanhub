import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/img/logo.png'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerT'>
        <div className='footerTL'>
          <img src={logo} alt='logo' className='footerLogo' />

          <p className='footerText'>SUBSCRIBE TO OUR NEWSLETTER</p>
          <div className='footerSubscribe'>
            <input type='text' placeholder='Enter your email address' />
            <button className='footerSubscribeBtn'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='footerTR'>
          <div className=''>
            <h4 className=''>ABOUT US</h4>
            <ul className=''>
              <li className=''>Who we are</li>
              <li className=''>Our Mission</li>
              <li className=''>Services</li>
              <li className=''>Our Projects</li>
              <li className=''>Partnerships</li>
            </ul>
          </div>
          <div className=''>
            <h4 className=''>RESOURCES</h4>
            <ul className=''>
              <li className=''>Careers</li>
              <li className=''>Blog</li>
              <li className=''>My Points</li>
              <li className=''>Gallery</li>
              <li className=''>FAQS</li>
            </ul>
          </div>
          <div className=''>
            <h4 className=''>CONTACT US</h4>
          </div>
        </div>
      </div>
      <div className='footerB'>
        <div className='footerBConnect'>
          <span></span>
          <h3>CONNECT WITH US</h3>
        </div>
        <div className='footerBSocial'>
          <div className='footerBSocialL'>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className='footerBSocialR'>
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
