import React from 'react';
import './ReachUs.css';

const ReachUs = () => {
  return (
    <section className="reach-us-section">
      <h2>Other ways to reach us</h2>
      <div className="reach-us-cards">
        <div className="card">
        {/* <i class="ri-map-pin-line" style={{fontSize:'80px' , color:'#178d72'}}></i> */}
        {/* <i class="ri-map-pin-fill" style={{fontSize:'80px' , color:'#178d72'}}></i> */}
        <img src='https://unistudio.co/demo/lexend/assets/images/template/icon-location.svg'/>
          <h3>Visit us</h3>
          <p>Don Valley, Toronto, CA</p>
          <a href="#">View on maps →</a>
        </div>
        <div className="card">
        {/* <i class="ri-message-fill" style={{fontSize:'80px' , color:'#178d72'}}></i> */}
        <img src='https://unistudio.co/demo/lexend/assets/images/template/icon-chat-dark.svg'/>
          <h3>Via chat</h3>
          <p>Get instant answers.</p>
          <a href="#">Let's chat →</a>
        </div>
        <div className="card">
        {/* <i class="ri-at-line" style={{fontSize:'80px' , color:'#178d72'}}></i> */}
        <img src='https://unistudio.co/demo/lexend/assets/images/template/icon-internet.svg'/>
          <h3>Report Issue</h3>
          <p>Get priority support.</p>
          <a href="#">Send report →</a>
        </div>
        <div className="card">
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjlPMaNDBCV9YlkbPF7h8DZ9ObjETw-b4pA&s" alt="Our Community" className="icon" style={{fontSize:'80px' , color:'#178d72'}} /> */}
          <img src='https://unistudio.co/demo/lexend/assets/images/template/icon-community.svg'></img>
          <h3>Our community</h3>
          <p>Connect with users.</p>
          <a href="#">Join us now →</a>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
