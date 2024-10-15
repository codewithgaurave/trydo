import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          height='80px'
          src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/http://rainbowit.net/themes/trydo/wp-content/themes/trydo/assets/images/logo/logo.png'
          alt='Logo'
        />
      </div>

      <div>
        <ul className="footer-icons">
          <li><i className="ri-facebook-circle-fill"></i></li>
          <li><i className="ri-linkedin-box-fill"></i></li>
          <li><i className="ri-twitter-fill"></i></li>
          <li><i className="ri-instagram-fill"></i></li>
        </ul>
      </div>

      <p className="footer-text">Copyright @2024 #ErrorTeam All Rights Reserved</p>
    </div>
  );
};

export default Footer;
