import React from 'react';
import './Aboutsection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About</h2>
        <p className="about-description">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
        </p>
        
        <div className="about-list">
          <h3>Lorem ipsum dolor sit.</h3>
          <ul>
            <li><span className="check-icon">✔</span> The Philosophy Of business analytics</li>
            <li><span className="check-icon">✔</span> Fast-Track Your business</li>
            <li><span className="check-icon">✔</span> Lies And Damn Lies About business</li>
            <li><span className="check-icon">✔</span> The Ultimate Deal On business</li>
          </ul>
        </div>

        <div className="about-list">
          <h3>Lorem ipsum dolor sit.</h3>
          <ul>
            <li><span className="check-icon">✔</span> The Philosophy Of business analytics</li>
            <li><span className="check-icon">✔</span> Fast-Track Your business</li>
            <li><span className="check-icon">✔</span> Lies And Damn Lies About business</li>
            <li><span className="check-icon">✔</span> The Ultimate Deal On business</li>
          </ul>
        </div>
      </div>

      <div className="about-image">
        <div className="video-wrapper">
          <img src="https://rainbowit.net/html/trydo/assets/images/about/about-3.png" alt="About" />
          <div className="play-button">
          <i class="ri-play-fill"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
