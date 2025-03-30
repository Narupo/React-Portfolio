import '../styles/Portfolio.css';
import ProjectCard from '../components/ProjectCard';
import PageTitle from '../components/PageTitle';

// Import your image
import projectImage from '../assets/images/test-image.jpg';

function Portfolio() {
  const projects = [
    {
      title: 'ByteShift',
      image: projectImage,
      description: 'Feature-rich resource sharing platform for teams or groups.',
      liveLink: 'https://byteshift-1.onrender.com/',
      githubLink: 'https://github.com/melissakikta/ByteShift.git'
    }
  ];

  return (
    <section className="portfolio">
      <div className="page-section">
        <PageTitle title="Portfolio" /> {/* ✅ Reusable, styled title */}
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
