import '../styles/ProjectCard.css';
import PropTypes from 'prop-types';

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired
};

function ProjectCard({ title, image, description, liveLink, githubLink }) {
  return (
    <div className="flex-item">
      <div className="img-container">
        <img src={image} alt={title} className="project-image" />
        <div className="overlay">
          <p>{description}</p>
        </div>
      </div>
      <h2>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/github.png" alt="GitHub Logo" className="github-icon" />
        </a>
      </h2>
    </div>
  );
}

export default ProjectCard;
