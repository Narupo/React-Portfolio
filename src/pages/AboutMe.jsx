import '../styles/AboutMe.css';
import aboutme from '../assets/images/aboutme.jpg';
import PageTitle from '../components/PageTitle'; // ✅ Reusable page title

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe-container">
        <img 
          src={aboutme}
          alt="My Photo"
          className="aboutMe-image"
        />
        <div className="aboutMe-text">
          <PageTitle title="About Me" /> {/* ✅ Consistent title style */}
          
          <p>
            With nearly a decade of experience in hospitality and team leadership, I’ve built a career around adaptability, communication, and high-pressure problem solving. I’ve worked in every front-of-house role, from server and bartender to manager, and even some back-of-house roles as well. One of my favorite accomplishments during my time working in the hospitality industry was helping Joe & The Juice launch their brand in Chicago after training with their team in New York.
          </p>
          <p>
            After spending the majority of my career in hospitality, I later transitioned into social services, working one-on-one with young adults facing mental health and substance abuse challenges. That role strengthened my empathy, resourcefulness, and commitment to helping others — qualities I now bring to the world of software development.
          </p>
          <p>
            In 2024, I made the leap into tech by enrolling in Northwestern’s Full-Stack Web Development Bootcamp. During my time in the program, I learned to build full-stack applications using HTML, CSS, JavaScript, React, Node.js, and more. What started as curiosity turned into a passion: coding challenges me creatively and logically in ways that feel both rewarding and exciting.
          </p>
          <p>
            This portfolio highlights some of the projects I’ve built and skills I’ve learned along the way. I’m currently seeking opportunities as a junior web developer where I can continue to grow my skills, collaborate with others, and contribute meaningfully to a team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

