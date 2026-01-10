import React from 'react';
import { Link } from 'react-router-dom';
import { getImage } from '../../utils/imageMap';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const image = getImage(project.imageId);
    
    return (
        <div className="project-card">
            <Link to={`/work/${project.slug}`} className="project-card-link">
                <div 
                    className="card-image-container"
                    style={{ background: project.headerGradient || 'var(--surface-bg)' }}
                >
                    {image && <img src={image} alt={project.title} className="card-image-content" />}
                    <div className="card-overlay" />
                </div>
                <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
