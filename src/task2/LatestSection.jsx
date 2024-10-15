import React from "react";
import "./Latestsection.css"; 

const LatestSection = () => {
  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available,<br /> but the
        majority have suffered alteration.
      </p>
      <div className="news-container">
        <div className="news-card">
          <img
            src="https://rainbowit.net/html/trydo/assets/images/blog/blog-01.jpg" 
            alt="News 1"
            className="news-image"
          />
          <div className="news-overlay">
            <span>Development</span>
            <h3>Getting tickets to the big show</h3>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="news-card">
          <img
            src="https://rainbowit.net/html/trydo/assets/images/blog/blog-02.jpg" 
            alt="News 2"
            className="news-image"
          />
          <div className="news-overlay">
            <span>Development</span>
            <h3>Getting tickets to the big show</h3>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="news-card">
          <img
            src="https://rainbowit.net/html/trydo/assets/images/blog/blog-03.jpg" 
            alt="News 3"
            className="news-image"
          />
          <div className="news-overlay">
            <span>Development</span>
            <h3>Getting tickets to the big show</h3>
            <div className="read-more-btn">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestSection;
