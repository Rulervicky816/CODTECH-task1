import React from "react";
import "../../App.css";
import proj1 from "../../assets/Images/proj1.jpeg";
import proj2 from "../../assets/Images/proj2.jpg";
const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">

        {/* Project 1 - Smart Farming Using IoT */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src={proj1} // Use the imported image
                className="project-image"
                alt="Smart Farming Using IoT"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">Smart Farming Using IoT</h5>
              <p className="project-description">
                This project uses IoT to help farmers monitor real-time environmental data like temperature, humidity, soil moisture, and soil temperature, improving yield and quality.
              </p>
              <p className="project-tools">
                <strong>Tools Used:</strong> Arduino IDE, C++ Programming Language
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 - Game-Based Learning */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src={proj2}
                className="project-image"
                alt="Game-Based Learning Platform for Coding"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">Game-Based Learning Platform for Coding</h5>
              <p className="project-description">
                An innovative platform designed to teach coding through engaging and interactive games. This project leverages gamification principles to enhance learning and retention for beginners and coding enthusiasts.
              </p>
              <p className="project-status">
                <strong>Status:</strong> Currently under development
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
