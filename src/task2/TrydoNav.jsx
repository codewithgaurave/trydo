import React, { useState } from 'react';
import './nav.css';

const TrydoNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navBar ${menuOpen ? 'active' : ''}`}>
      <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/http://rainbowit.net/themes/trydo/wp-content/themes/trydo/assets/images/logo/logo.png' />
      
      <div className='menu-toggle' onClick={toggleMenu}>
        &#9776; 
      </div>
      
      <ul>
        <li>HOME</li>
        <li>SERVICE</li>
        <li>ABOUT</li>
        <li>PAGES</li>
        <li>BLOCKS</li>
        <li>CONTACT</li>
        <li><button>BUY NOW</button></li>
      </ul>
    </div>
  );
};

export default TrydoNav;
