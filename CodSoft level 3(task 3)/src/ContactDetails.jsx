import React from 'react';
import '../assets/css/ContactDetails.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const ContactDetails = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: ForexFlare@gmail.com</p>
        <p>Phone: +91 9161718191</p>
        <p>Address: 16/5, Main St, Coimbatore, Tamilnadu</p>
      </div>

      <div className="social-links">
        <h2 className="classcolorforfollow">About us</h2>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <Link to="/privacy" className="link-button">
          Privacy Policy
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/terms" className="link-button">
          Terms and Conditions
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/faq" className="link-button">
          FAQ
        </Link>
        
        <p>&#169; 2023 FOREXFLARE</p>
      </div>
    </footer>
  );
};
export default ContactDetails;