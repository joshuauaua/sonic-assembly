import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectData from '../data/project-details.js';
import './ProjectTemplate.css';

const ProjectTemplate = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app, this might be an API call. 
        // Here we just find the project in our JSON.
        const foundProject = projectData.find(p => p.slug === slug);
        setProject(foundProject);
        setLoading(false);
        
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return <div className="project-loading">Loading...</div>;
    if (!project) return <Navigate to="/work" replace />;

    return (
        <div className="project-template">
            {/* Banner Image */}
            <div className="project-banner">
                <img src={project.bannerImage} alt={project.title} />
                <div className="banner-overlay"></div>
                <div className="banner-title-container">
                    <h1>{project.title}</h1>
                </div>
            </div>

            <div className="project-content">
                {/* Metadata Section */}
                <section className="project-metadata">
                    <div className="metadata-grid">
                        <div className="metadata-item">
                            <h3>Client</h3>
                            <p>{project.metadata.client}</p>
                        </div>
                        <div className="metadata-item">
                            <h3>Year</h3>
                            <p>{project.metadata.year}</p>
                        </div>
                        <div className="metadata-item">
                            <h3>Director/Collaborator</h3>
                            <p>{project.metadata.director}</p>
                        </div>
                        <div className="metadata-item">
                            <h3>Medium</h3>
                            <p>{project.metadata.medium}</p>
                        </div>
                        <div className="metadata-item full-width">
                            <h3>Tags</h3>
                            <div className="tags-list">
                                {project.metadata.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                {project.videoUrl && (
                    <section className="project-video">
                        <div className="video-container">
                            <iframe 
                                src={project.videoUrl} 
                                title={project.title} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                )}

                {/* STAR Description */}
                <section className="project-description">
                    <div className="star-grid">
                        <div className="star-item">
                            <h2>Situation</h2>
                            <p>{project.starDescription.situation}</p>
                        </div>
                        <div className="star-item">
                            <h2>Task</h2>
                            <p>{project.starDescription.task}</p>
                        </div>
                        <div className="star-item">
                            <h2>Action</h2>
                            <p>{project.starDescription.action}</p>
                        </div>
                        <div className="star-item">
                            <h2>Result</h2>
                            <p>{project.starDescription.result}</p>
                        </div>
                    </div>
                </section>

                {/* Image Grid - 2x2 Landscape */}
                <section className="project-gallery">
                    <div className="gallery-grid">
                        {project.galleryImages.slice(0, 4).map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`${project.title} gallery ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectTemplate;
