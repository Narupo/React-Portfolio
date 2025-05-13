import '../styles/Portfolio.css';
import ProjectCard from '../components/ProjectCard';
import PageTitle from '../components/PageTitle';

// Import your image
import projectImage1 from '../assets/images/propfolio.jpg';
import projectImage2 from '../assets/images/books.jpg';
import projectImage3 from '../assets/images/weather.webp';
//import projectImage4 from '../assets/images/candidate.jpg';

function Portfolio() {
  const projects = [
    {
      title: 'Propfolio',
      image: projectImage1,
      description: 'Propfolio is a web application designed for independent property owners who need an intuitive and efficient tool to track and manage their real estate investments. (Currently in development.)',
      liveLink: 'https://real-state-portfolio.onrender.com/',
      githubLink: 'https://github.com/realejandro/propfolio'
    },
    {
      title: 'Book-Search',
      image: projectImage2,
      description: 'A full-stack MERN application that allows users to search for books, save their favorite titles, and manage their list. This project was refactored from a RESTful architecture into a fully functional GraphQL API using Apollo Server.',
      liveLink: 'https://book-search-engine-9b1i.onrender.com/',
      githubLink: 'https://github.com/Narupo/Book-Search-Engine'
    },
    {
      title: 'Weather-Dashboard',
      image: projectImage3,
      description: 'A simple weather application that gives users a 5 day forecast on cities they search.',
      liveLink: 'https://paolos-weather-dashboard.onrender.com/',
      githubLink: 'https://github.com/Narupo/Weather-Dashboard?tab=readme-ov-file'
    },
    // {
    //   title: 'Candidate-Search',
    //   image: projectImage4,
    //   description: 'Feature-rich resource sharing platform for teams or groups.',
    //   liveLink: 'https://byteshift-1.onrender.com/',
    //   githubLink: 'https://github.com/Narupo/Candidate-Search-Application'
    // },
  ];

  return (
    <section className="portfolio">
      <div className="page-section">
        <PageTitle title="Portfolio" /> 
        <div className="flex-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
