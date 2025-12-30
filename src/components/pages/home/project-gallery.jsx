import React, { useState } from 'react';
import './project-gallery.css';
import projectsData from '../../../data/projects.json';
import shankarselect from '../../../assets/shankarselect.png';
import clickselect from '../../../assets/clickselect.png';
import tantparkourselect from '../../../assets/tantparkourselect.png';
import collierselect from '../../../assets/collierselect.png';
import goetheselect from '../../../assets/goetheselect.png';

// Map image IDs from JSON to actual imported assets
const imageMap = {
  'shankarselect': shankarselect,
  'clickselect': clickselect,
  'tantparkourselect': tantparkourselect,
  'collierselect': collierselect,
  'goetheselect': goetheselect
};

// Enhance projects with actual image assets
const projects = projectsData.map(project => ({
  ...project,
  image: project.imageId ? imageMap[project.imageId] : null
}));

export default function ProjectGallery() {
  const [startIndex, setStartIndex] = useState(0);
  
  // Calculate max index - with 3 cards visible, we want to stop slinding when the last 3 are shown.
  // Actually, typically in simple sliders without infinite loop, you slide one by one or page by page.
  // Let's slide one by one.
  const cardsToShow = 3; 

  const nextSlide = () => {
    if (startIndex < projects.length - cardsToShow) {
      setStartIndex(prev => prev + 1);
    } else {
        // Optional: loop back to start
        setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    } else {
        // Optional: loop to end
        setStartIndex(projects.length - cardsToShow);
    }
  };

  // We need to calculate the transform percentage based on how many cards we've shifted.
  // Each card + gap takes up a certain standard width percentage.
  // However, simpler is to just limit the window.
  // A robust pure CSS transform way:
  // translateX = - (startIndex * (100 / discrete_visible_items + gap_adjustment)) -- complicates with gap.
  // Easier: 
  // Let's use the calc logic from CSS.
  // flex: 0 0 calc((100% - 40px) / 3); -> 33.33% roughly minus gap.
  // If we shift by percentage:
  // If we move index 1, we basically want the 2nd item to be at the left edge.
  // With flex gap, it's easier to just translate by (100% / visible_count + gap corrections) but percentage is tricky with pixels.
  
  // Let's try a simpler approach for the transform:
  // Move by (100% + gap) / 3 * startIndex.
  // The gap is 20px. 
  // The width of one item is (100% - 2 * 20px)/3.
  // The move distance is ItemWidth + Gap.
  
  return (
    <div className="project-gallery-container">
      <div className="gallery-content-wrapper">

        <div className="slider-container">
          <div className="slider-track-container">
            <div 
              className="slider-track"
              style={{
                transform: `translateX(calc(-${startIndex} * ((100% + 20px) / ${cardsToShow})))`
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="card-image" style={{backgroundColor: project.color}}>
                    {project.image && <img src={project.image} alt={project.title} />}
                  </div>
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
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
