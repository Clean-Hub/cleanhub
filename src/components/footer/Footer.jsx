import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
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
            <input
              type='text'
              placeholder='Enter your email address'
              className='footerSubscribeInput'
            />
            <button className='footerSubscribeBtn'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='footerTR'>
          <div className=''>
            <h4 className='footerH'>ABOUT US</h4>
            <ul className='footerUl'>
              <li className='footerUi'>Who we are</li>
              <li className='footerUi'>Our Mission</li>
              <li className='footerUi'>Services</li>
              <li className='footerUi'>Our Projects</li>
              <li className='footerUi'>Partnerships</li>
            </ul>
          </div>
          <div className=''>
            <h4 className='footerH'>RESOURCES</h4>
            <ul className='footerUl'>
              <li className='footerUi'>Careers</li>
              <li className='footerUi'>Blog</li>
              <li className='footerUi'>My Points</li>
              <li className='footerUi'>Gallery</li>
              <li className='footerUi'>FAQS</li>
            </ul>
          </div>
          <div className=''>
            <h4 className='footerH contact'>CONTACT US</h4>
            <div className='house'>
              <h3 className='footerHC'>
                8 Jubliee-CMD Road, Magodo, Lagos State
              </h3>
            </div>
            <div className='phone'>
              <h3 className='footerHC'>+2349000099900</h3>
            </div>
            <div className='email'>
              <h3 className='footerHC'>hello@klinlag.ng</h3>
            </div>
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
                <FontAwesomeIcon icon={faFacebookSquare} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitterSquare} />
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
