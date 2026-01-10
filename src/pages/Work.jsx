import projectsData from '../data/projects.json';
import ProjectCard from '../components/common/ProjectCard';

const Work = () => {
    return (
        <div style={{ paddingTop: '12rem', paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '3rem' }}>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
                gap: '4rem 2rem' 
            }}>
                {projectsData.filter(p => p.showInWork).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Work;
