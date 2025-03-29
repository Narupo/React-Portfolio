import '../styles/AboutMe.css';
import aboutme from '../assets/images/aboutme.jpg'; // Import your image here

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe-container">
        <img 
          src={aboutme} // You’ll add your image path later
          alt="My Photo"
          className="aboutMe-image"
        />
        <div className="aboutMe-text">
          <h1>About Me</h1>
          <p>Welcome to my portfolio! (This is text to test the page. I only want to see how it looks when there is a whole paragraph here. Now I have a good idea of what the page will look. This is text to test the page. I only want to see how it looks when there is a whole paragraph here. Now I have a good idea of what the page will look. This is text to test the page. I only want to see how it looks when there is a whole paragraph here. Now I have a good idea of what the page will look.)</p>
          <p>I am a.... (This is text to test the page. I only want to see how it looks when there is a whole paragraph here. Now I have a good idea of what the page will look. This is text to test the page. I only want to see how it looks when there is a whole paragraph here. Now I have a good idea of what the page will look. This is text to test the page. I only want to see how it looks when there is a whole paragraph here. Now I have a good idea of what the page will look.  )</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
