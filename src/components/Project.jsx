import React from 'react';

function Project({ title, imageUrl, deployedLink, repoLink }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
      </p>
      <p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default Project;