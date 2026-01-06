import React, { useEffect, useRef } from 'react';
import './mission-statement.css';
import ShinyText from '../../ShinyText/ShinyText';

const MissionStatement = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section className="mission-section" aria-label="Mission Statement">
            <div className="mission-container">
                <h2 className="mission-text" ref={textRef}>
                    Crafting sonic worlds that 
                    <ShinyText 
                        text="resonate" 
                        speed={3} 
                        delay={0} 
                        color="#4e4d4dff" 
                        shineColor="#ffffff" 
                        spread={120} 
                        direction="left" 
                        yoyo={false} 
                        pauseOnHover={true} 
                    />{' '}
                    with creative purpose and technical depth.
                </h2>
            </div>
        </section>
    );
};

export default MissionStatement;
