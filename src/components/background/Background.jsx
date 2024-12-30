import React from 'react';
import '../../App.css';

const Background = () => {
    const shapes = Array.from({ length: 5 }); 

    return (
        <div className="background">
            {shapes.map((_, index) => {
                const animationDuration = `${8 + Math.random() * 4}s`;
                const leftPosition = `${Math.random() * (100 - (50 / window.innerWidth))}vw`; 
                return (
                    <div
                        key={index}
                        className={`shape ${getRandomShape()}`}
                        style={{
                            left: leftPosition,
                            animationDuration,
                            animationDelay: `${index * 0.5}s`, 
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

// Function to randomly assign a shape class
const getRandomShape = () => {
    const shapeTypes = ['circle', 'hexagon', 'rectangle','polygon'];
    return shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
};

export default Background;