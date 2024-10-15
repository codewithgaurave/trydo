import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          {/* <img src="" alt="Logo" className="logo-image" /> */}
          <i class="ri-shining-fill" style={{fontSize:'35px' , color:'#178d72'}}></i>
          <span className="logo-text">lexend</span>
        </a>
        <ul className="navbar-links">
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/insights">Insights</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/more">More  <i class="ri-arrow-down-s-line" ></i></a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-actions">
          <li><a href="#">Request a demo</a></li>
          <li><a href="#">Log in</a></li>
          <li><a href="#" className="start-trial-btn" style={{color:'white'}}>Start free trial</a></li>
          <li><a href="#" className="language-icon">🌐 En <i class="ri-arrow-down-s-line"></i></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
