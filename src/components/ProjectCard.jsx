import '../styles/ProjectCard.css';
import PropTypes from 'prop-types';
import githubLogo from '../assets/images/github.png';

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
      <div className="card-body">
        <div className="img-container">
          <img src={image} alt={title} className="project-image" />
          <div className="hover-overlay">
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="project-footer">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-title"
        >
          {title}
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubLogo}
            alt="GitHub Logo"
            className="github-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;





