import React from 'react'
import classes from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
// import { fab } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerContainer}>
        <div className={classes.policiesWrapper}>
          <h1>Policies</h1>
          <div className={classes.policiesContainer}>
            <Link to='/shop'>FAQ</Link>
            <Link to='/shop'>Store Policy</Link>
            <Link to='/shop'>Shipping and Returns</Link>
          </div>
        </div>
        <div className={classes.socialMediaWrapper}>
          <h1>Socials</h1>
          <div className={classes.socialsOne}>
            <FontAwesomeIcon
              icon={faFacebookF}
              className={classes.socialIcons}
            />
            <FontAwesomeIcon icon={faTwitter} className={classes.socialIcons} />
          </div>
          <div className={classes.socialsTwo}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={classes.socialIcons}
            />
            <FontAwesomeIcon
              icon={faGooglePlusG}
              className={classes.socialIcons}
            />
          </div>
          <div className={classes.socialsThree}>
            <FontAwesomeIcon icon={faYoutube} className={classes.socialIcons} />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={classes.socialIcons}
            />
          </div>
        </div>
        <div className={classes.contactWrapper}>
          <h1>Contact</h1>
          <div className={classes.policiesContainer}>
            <p>123-456-7890</p>
            <p>500 Terry Francois Street</p>
            <p>San Francisco, CA 94158</p>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>© 2023 BY CAPACITYX.</div>
    </div>
  )
}
