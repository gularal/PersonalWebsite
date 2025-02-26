import React from "react";
import "./Introduce.css";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-two">
        <div className="name">
          <span className="introduce-line"></span>
          <span className="text">MARGARET HAMİLTON</span>
        </div>
        <div className="introduce-text">
          <div>
        <h1 className="title">
        Creative thinker, <br />
        Minimalism lover
        
        </h1>
        
        <p className="text-two">
        Hello, I'm Margaret. I am a software engineer. If you are looking for
          Developer who produces robust and scalable front-end products with great features
          user experiences. Let's shake hands with me.
        </p>
        <div className="intro-links">
          <a className="button " href="#">Hire me</a>
          <a className="button" href="#">Github</a>
          <a className="button" href="#">Linkedin</a>
        </div>
        </div>
        <div className="images">
        <img
          src="src/assets/margaret_hamilton.jpg"
          alt="Profile"
        />
        </div>
      
      </div>
     
      </div>
    </div>
  );
};

export default Introduce;