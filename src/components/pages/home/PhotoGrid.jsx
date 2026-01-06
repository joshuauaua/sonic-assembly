import React from 'react';
import './PhotoGrid.css';
import photogrid1 from '../../../assets/photogrid1.JPG';
import photogrid2 from '../../../assets/photogrid2.JPG';
import photogrid3 from '../../../assets/photogrid3.JPG';
import photogrid4 from '../../../assets/photogrid4.JPG';
import photogrid5 from '../../../assets/photogrid5.JPG';
import photogrid6 from '../../../assets/photogrid6.JPG';
import photogrid7 from '../../../assets/photogrid7.JPG';

const PhotoGrid = () => {
    const photos = [
        { id: 1, src: photogrid1, alt: 'Photo 1' },
        { id: 2, src: photogrid2, alt: 'Photo 2' },
        { id: 3, src: photogrid3, alt: 'Photo 3' },
        { id: 4, src: photogrid4, alt: 'Photo 4' },
        { id: 5, src: photogrid5, alt: 'Photo 5' },
        { id: 6, src: photogrid6, alt: 'Photo 6' },
        { id: 7, src: photogrid7, alt: 'Photo 7' }
    ];

    return (
        <section className="photo-grid-section">
            <div className="photo-grid">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                        <img 
                            src={photo.src} 
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
