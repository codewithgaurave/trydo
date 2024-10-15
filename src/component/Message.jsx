import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <div className="testimonial-quote">
            <p>“This software simplifies the website building process, making it a breeze to manage our online presence.”</p>
            <div className="testimonial-author">
              <strong>David Larry</strong>
              <br />
              <span style={{color:'grey',fontWeight:'500'}}>Founder & CEO</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p>Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.</p>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Your email" required />
            </div>
            <input type="text" placeholder="Subject" className="full-width" required />
            <textarea placeholder="Your message.." required></textarea>
            <button type="submit" className="send-button" style={{fontWeight:'bold'}}>Send message</button>
          </form>
          <p className="alternative-contact" style={{textAlign:'center',fontWeight:'500'}}>
            Or drop us a message via <a style={{color:'#178d72'}}>email</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Message;
