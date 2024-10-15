import React from 'react';
import './Logosection.css';

const logos = [
  { id: 1, src: 'https://rainbowit.net/html/trydo/assets/images/brand/brand-01.png', alt: 'Logo 1' },
  { id: 2, src: 'https://rainbowit.net/html/trydo/assets/images/brand/brand-02.png', alt: 'Logo 2' },
  { id: 3, src: 'https://rainbowit.net/html/trydo/assets/images/brand/brand-03.png', alt: 'Logo 3' },
  { id: 4, src: 'https://rainbowit.net/html/trydo/assets/images/brand/brand-04.png', alt: 'Logo 4' },
  { id: 5, src: 'https://rainbowit.net/html/trydo/assets/images/brand/brand-05.png', alt: 'Logo 5' },
  { id: 6, src: 'https://rainbowit.net/html/trydo/assets/images/brand/brand-06.png', alt: 'Logo 6' }
];

const LogoSection = () => {
  return (
    <div className="logo-section">
      {logos.map(logo => (
        <div key={logo.id} className="logo-div">
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  );
};

export default LogoSection;
