import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
    return (
      <section classname="about-me">
        <div classsName="about-me-container">
          <div className="image-box">
            <img src="https://via.placeholder.com/200" alt="profile" />
          </div>
          <div classname="text-box">
            <h2>About Me</h2>
            <p>
              Hello, and welcome to my portfolio! My name is Paolo, I am a student at Northwestern's coding bootcamp. I am currently learning to be a full stack web developer and have been developing my skills in HTML, CSS, JavaScript, TypeScript, Node.js, and React. I am excited to continue learning and growing as a developer and am always looking for ways to improve my skills. I am excited to see where this journey takes me and am looking forward to the possibilites of the future. Thank you for visiting my portfolio!
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutMe;