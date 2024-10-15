import React from 'react';
import './Pricingsection.css';

const PricingSection = () => {
  return (
    <div className="Pricing-Container">
      <div className="Heading">
        <h1>Pricing Plan</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available,
          <br />
          but the majority have suffered alteration.
        </p>
      </div>
      
      <div className="pricing-container">
        {['Free', 'Business', 'Advanced'].map((plan, index) => (
          <div key={index} className="pricing-card matCard">
            <h3 style={{textAlign:'center'}}>{plan}</h3>
            <h1 style={{textAlign:'center',margin:'0px',fontSize:'60px'}}>{index === 1 ? 30 : 29}</h1>
            <p style={{textAlign:'center'}}>USD Per Month<hr/></p>
            <ul>
              <li><i class="ri-check-fill"></i>5 PPC Campaigns</li>
              <li><i class="ri-check-fill"></i>Digital Marketing</li>
              <li><i class="ri-check-fill"></i>Marketing Agency</li>
              <li><i class="ri-check-fill"></i>Seo Friendly</li>
              <li><i class="ri-check-fill"></i>UI/UX designs</li>
            </ul>
            <div className='button'><span style={{padding:'8px'}}>Purchase Now</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
