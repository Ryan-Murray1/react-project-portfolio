import React from 'react';
import { useNavigate } from "react-router-dom";
import InfoBox from './InfoBox';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>Welcome to My Portfolio</h1>
      
      <InfoBox 
        title="About Me" 
        content="Hello! I’m Ryan, a passionate web developer with a focus on building modern, responsive applications using React.js.
                 I create intuitive, user-friendly websites that deliver seamless experiences. Dive into my portfolio to discover how I bring ideas to life through clean code and creative design." 
      />

      <button onClick={() => navigate("contact")}>Contact Me</button>      
    </div>
  )
}

export default Home;

