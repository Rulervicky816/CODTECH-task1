import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../App.css";

const educationData = [
  {
    id: "mca",
    title: "MCA (Master of Computer Application)",
    year: "2023-25",
    institution: "CMR Institute of Technology",
    cgpa: "8.62 (Pursuing) CGPA",
    link: "#", // Add the actual link to the marksheet or remove this field if not available
  },
  {
    id: "bca",
    title: "BCA (Bachelor of Computer Applications)",
    year: "2020-23",
    institution: "CMR University",
    cgpa: "8.58 CGPA",
    link: "#",
  },
  {
    id: "twelfth",
    title: "12th",
    year: "2017-18",
    institution: "Vijaya Krishna Junior College",
    cgpa: "74.5%",
    link: "#",
  },
  {
    id: "tenth",
    title: "10th (Common Subjects)",
    year: "2016-17",
    institution: "Pooja International School",
    cgpa: "8.6 CGPA",
    link: "#",
  },
];

function Education() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div id="education">
      <h1>Education</h1>
      <div className="educationWrapper">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className={`flip-card ${flippedCard === edu.id ? "flipped" : ""}`}
          >
            {/* Front Side */}
            <div className="flip-card-front">
              <h3>{edu.title}</h3>
              <h4>
                <span>({edu.year})</span>
              </h4>
              <button
                className="button"
                onClick={() => handleFlip(edu.id)}
              >
                {flippedCard === edu.id ? "Hide Details" : "Show Details"}
              </button>
            </div>

            {/* Back Side */}
            <div className="flip-card-back">
              <h3>{edu.institution}</h3>
              <h5>{edu.cgpa}</h5>
              {edu.link && (
                <a href={edu.link} target="_blank" rel="noopener noreferrer" className="marksheet-link">
                  <FaArrowLeft className="arrow" />
                  Marksheet
                  <FaArrowRight className="arrow" />
                </a>
              )}
              <button
                className="button"
                onClick={() => handleFlip(edu.id)}
              >
                {flippedCard === edu.id ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
