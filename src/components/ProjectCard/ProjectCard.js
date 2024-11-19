// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, imageUrl, projectUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card-tag">{tag}</span>
          ))}
        </div>
        {/* Add checkout button */}
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-checkout-button">Checkout</a>
      </div>
    </div>
  );
};

export default ProjectCard;
