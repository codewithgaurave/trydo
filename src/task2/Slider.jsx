import React, { useState } from 'react';
import './Slider.css'; 

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-adult-backlit-433083-1200x450_c.jpg', 
      title: 'AGENCY.',
      description: 'There are many variations of passages but the majority have suffered alteration.',
    },
    {
      image: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg',
      title: 'AGENCY 2.',
      description: 'This is another version of the agency text for slide 2.',
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className="slide-content">
              <h2 style={{fontSize:'100px',margin:'0px'}}>{slide.title}</h2>
              <p style={{fontSize:'30px'}}>{slide.description}</p>
              <button className="contact-btn">Contact Us</button>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}><i class="ri-arrow-left-line"></i></button>
      <button className="next" onClick={nextSlide}><i class="ri-arrow-right-line"></i></button>
    </div>
  );
};

export default Slider;
