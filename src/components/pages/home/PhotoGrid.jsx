import React from 'react';
import './PhotoGrid.css';



const PhotoGrid = () => {
    // Using picsum for placeholder images with distinct IDs to ensure caching/consistency
    const photos = [
        { id: 101, alt: 'Abstract Architecture' },
        { id: 102, alt: 'Modern Interior' },
        { id: 103, alt: 'Digital Art' },
        { id: 104, alt: 'Creative Texture' },
        { id: 115, alt: 'Minimalist Structure' },
        { id: 106, alt: 'Urban Design' },
        { id: 147, alt: 'Geometric Pattern' }, // Extra just in case, CSS handles up to 7 for the specific grid
    ];

    return (
        <section className="photo-grid-section">
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <div key={photo.id} className="photo-item">
                        <img 
                            src={`https://picsum.photos/id/${photo.id}/800/800`} 
                            alt={photo.alt} 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoGrid;
