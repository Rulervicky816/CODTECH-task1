import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HeroSection/Hero";
import Education from "./components/Education/Education"
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';
import Aos from "aos";
import "aos/dist/aos.css"
import Background from "./components/background/Background";
import Summary from "./components/summary/Summary";


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
       <Background/>
      <Navbar />
      <div className="container">
        <Home />
        <Summary/>
        <Skills />
        <Projects />
        <Education/>
        <Contact />
      </div>
  
    </>
  );
};

export default App;
