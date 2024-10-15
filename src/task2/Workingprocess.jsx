import React from 'react';
import './Workingprocess.css';

const WorkingProcess = () => {
  return (
    <div className="working-process-container">
      <div className="image-section">
        <img src="https://img.freepik.com/free-photo/professional-man-drawing-graph_23-2148349957.jpg?t=st=1728195669~exp=1728199269~hmac=b19763008c6686d848aa86ba2bb559c6bd337671c331444ee8ab8ef48d188070&w=996" alt="Process Illustration" />
      </div>
      <div className="text-section">
        <h1>Working Process</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim exercitationem impedit iure quia quo recusandae?
        </p>
        <ul>
          <li>Your Business Skills But Never Stop Improving.</li>
          <li>Tactics That Can Help Your Business Grow.</li>
          <li>The Secret of Successful Business.</li>
          <li>How To Start A Business With Business.</li>
        </ul>
        <button className="cta-button">See How It Works</button>
      </div>
    </div>
  );
};

export default WorkingProcess;
