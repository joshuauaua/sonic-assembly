import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectData from '../data/projects.json';
import { getImage } from '../utils/imageMap';
import './ProjectTemplate.css';

const ProjectTemplate = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProject = projectData.find(p => p.slug === slug);
        setProject(foundProject);
        setLoading(false);
        
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return <div className="project-loading">Loading...</div>;
    if (!project) return <Navigate to="/work" replace />;

    const bannerImage = getImage(project.imageId);
    const galleryImages = (project.galleryImageIds || []).map(id => getImage(id)).filter(Boolean);

    const getEmbedUrl = (url) => {
        if (!url) return '';
        // Handle youtu.be short links
        if (url.includes('youtu.be')) {
            const id = url.split('youtu.be/')[1].split('?')[0];
            return `https://www.youtube.com/embed/${id}`;
        }
        // Handle standard youtube.com watch links
        if (url.includes('youtube.com/watch')) {
            const urlParams = new URLSearchParams(new URL(url).search);
            return `https://www.youtube.com/embed/${urlParams.get('v')}`;
        }
        // Handle URLs that are already embed links or other formats
        return url;
    };

    return (
        <div className="project-template">
            {/* ... (Banner Image section remains unchanged) */}
            <div className="project-banner">
                {project.headerGradient ? (
                    <div 
                        className="banner-gradient-bg"
                        style={{ background: project.headerGradient }}
                    />
                ) : (
                    bannerImage && <img src={bannerImage} alt={project.title} />
                )}
                <div className="banner-overlay"></div>
                <div className="banner-title-container">
                    <h1>{project.title}</h1>
                </div>
            </div>

            <div className="project-content">
                {/* ... (Metadata section remains unchanged) */}
                {project.metadata && (
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
                )}

                {/* Video Section */}
                {project.videoUrl && project.videoUrl !== 'placeholder' && (
                    <section className="project-video">
                        <div className="video-container">
                            <iframe 
                                src={getEmbedUrl(project.videoUrl)} 
                                title={project.title} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                )}
            </div>

            {/* Image Grid - Full Width */}
            {galleryImages.length > 0 && (
                <section className="project-gallery full-width-gallery">
                    <div className="gallery-grid">
                        {galleryImages.slice(0, 4).map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`${project.title} gallery ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <div className="project-content">
                {/* STAR Description - Background and Result */}
                {project.starDescription && (
                    <section className="project-description situation-section">
                        <div className="star-grid">
                            {project.starDescription.background && (
                                <div className="star-item">
                                    <h2>Background</h2>
                                    <p>{project.starDescription.background}</p>
                                </div>
                            )}
                            {project.starDescription.result && (
                                <div className="star-item">
                                    <h2>Result</h2>
                                    <p>{project.starDescription.result}</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProjectTemplate;
