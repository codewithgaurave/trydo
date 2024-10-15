import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{width:'400px',paddingRight:'40px'}}>
        <i class="ri-shining-fill" style={{fontSize:'35px' , color:'#178d72'}}></i>
        <p>This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamio pricing tables.</p>
        </div>
        <div className="footer-column">
          {/* Left Column (About, Pricing, etc.) */}
          <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>Integrations</li>
            <li>Career</li>
            <li>Contact</li>
            <li>Contact v2</li>
          </ul>
        </div>
        <div className="footer-column">
          {/* Center Column (Shop, etc.) */}
          <ul>
            <li>Shop</li>
            <li>With sidebar</li>
            <li>Product detail</li>
            <li>Product detail v2</li>
            <li>Cart</li>
            <li>Checkout</li>
            <li>Order confirmation</li>
          </ul>
        </div>
        <div className="footer-column">
          {/* Right Column (Request Demo, etc.) */}
          <ul>
            <li>Request a demo</li>
            <li>Sign in</li>
            <li>Sign in v2</li>
            <li>Sign up</li>
            <li>Sign up v2</li>
            <li>Reset password</li>
            <li>Reset password v2</li>
          </ul>
        </div>
        <div className="footer-column">
          {/* Blog & Legal */}
          <ul>
            <li>Blog</li>
            <li>Blog detail</li>
            <li>FAQ</li>
            <li>404</li>
            <li>Coming Soon</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Lexend @ 2024 All rights reserved.</p>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;