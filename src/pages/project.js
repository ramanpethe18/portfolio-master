// Blogs.js
import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './projects.css';
import projectsData from '../json/projects.json'; // Import projects data from JSON file

const Projects = () => {
 


  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className='projects-content'>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};


export default Projects; // Export the projects array directly
