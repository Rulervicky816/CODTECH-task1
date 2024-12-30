import React, { useState } from 'react';
import "../../App.css";

function Summary() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side - Profile Summary */}
        <div className="card-front">
          <h1>Profile Summary</h1>
          <p>
            Hello, I'm Guthireddy Vivek Vardhan Reddy, a passionate and enthusiastic software developer. 
            With proficiency in C and Java, I bring a strong foundation in programming and problem-solving. 
            Currently pursuing my Masters in Computer Application at CMR Institute of Technology, Bangalore (CGPA: 8.58), 
            I have honed my technical skills through diverse projects like Smart Farming using IoT and Java Programming. An active member of Techno Tuners, I strive for innovation and excellence 
            in every endeavor.
          </p>

          {/* Button inside the front side */}
          <button className="flip-button" onClick={handleFlip}>
            Show Future Goals
          </button>
        </div>

        {/* Back Side - Future Goals */}
        <div className="card-back">
          <h1>Future Goals</h1>
          <p>
            As I advance in my journey, my goals include mastering full-stack development and emerging technologies such as 
            cloud computing, AI, and blockchain. I aspire to contribute to cutting-edge projects that drive technological 
            innovation and benefit society. With a strong passion for learning, I aim to continually enhance my skills while 
            taking on leadership roles that inspire and mentor others.
          </p>

          {/* Button inside the back side */}
          <button className="flip-button" onClick={handleFlip}>
            Show Profile Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;
