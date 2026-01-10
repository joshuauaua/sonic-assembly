import React, { useState } from 'react';
import './project-gallery.css';
import projectsData from '../../../data/projects.json';
import ProjectCard from '../../common/ProjectCard';

// Filter only selected projects for the gallery
const projects = projectsData.filter(project => project.selected);

export default function ProjectGallery() {
  // Determine initial cards to show based on window width
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const [startIndex, setStartIndex] = useState(0);

  React.useEffect(() => {
    const handleResize = () => {
        const newCardsToShow = getCardsToShow();
        setCardsToShow(newCardsToShow);
        
        // Adjust startIndex if it exceeds bounds for the new card count
        // Max start index is projects.length - newCardsToShow
        // But we must limit it so we don't show empty space
        setStartIndex(prev => {
            const maxIndex = Math.max(0, projects.length - newCardsToShow);
            return Math.min(prev, maxIndex);
        });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Remove dependency on projects.length since it's constant outside component

  const nextSlide = () => {
    if (startIndex < projects.length - cardsToShow) {
      setStartIndex(prev => prev + 1);
    } else {
        setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    } else {
        // Wrap to the end
        setStartIndex(Math.max(0, projects.length - cardsToShow));
    }
  };

  // Gap between slides in pixels (must match CSS)
  const GAP_PX = 40;

  return (
    <div className="project-gallery-container">
      <div className="gallery-content-wrapper">

        <div className="slider-container">
          <div className="slider-track-container">
            <div 
              className="slider-track"
              style={{
                // Shift amount per slide = (100% width + gap) / cardsToShow
                transform: `translateX(calc(-${startIndex} * ((100% + ${GAP_PX}px) / ${cardsToShow})))`
              }}
            >
              {projects.map((project) => (
                <div key={project.id} style={{ 
                    // Item width = (100% - (cardsToShow - 1) * gap) / cardsToShow
                    // But easier logic: (100% - totalGaps) / n
                    // Total gaps visible = n - 1. But strictly, to make the math for translation work with "gap",
                    // we usually say: Item width = (100% + gap)/n - gap.
                    // Let's verify: n=1 => (100+40)/1 - 40 = 100. Correct.
                    // n=3 => (100+40)/3 - 40 = 100/3 + 40/3 - 120/3 = (100 - 80)/3. Correct.
                    flex: `0 0 calc((100% + ${GAP_PX}px) / ${cardsToShow} - ${GAP_PX}px)` 
                }}> 
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="controls-container">
            <button onClick={prevSlide} className="nav-button prev" aria-label="Previous projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={nextSlide} className="nav-button next" aria-label="Next projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
