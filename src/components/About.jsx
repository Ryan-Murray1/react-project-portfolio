import React from 'react';
import InfoBox from './InfoBox';
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h1 id="about-h1">About Me</h1>

      <InfoBox 
        title="My Journey" 
        content="I started coding in JavaScript and have built several projects using React.js. My focus is on building modern web applications." 
      />

      <InfoBox 
        title="Skills" 
        content="Proficient in JavaScript, React.js, CSS, and front-end development. Passionate about creating interactive web experiences." 
      />
      
    </div>
  )
}

export default About;

