import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
        {/* Background Video Loop */}
        <video 
            className="hero-video-bg" 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=3456&auto=format&fit=crop"
        >
            {/* Using a placeholder abstract video - Replace 'src' with your actual video file */}
            <source src="https://www.vecteezy.com/video/1940557-white-smoke-in-a-slow-motion-loop-in-black-background" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        {/* Overlay for contrast */}
        <div className="hero-overlay" />
        
        {/* Content */}
        <div className="hero-content">
            <h1 className="hero-title">
                A CREATIVE SOUND STUDIO
            </h1>
            
            <p className="hero-subtext">
                Tailored sounds and tech for brands, films, and experiences
            </p>

            <Link to="/about" className="hero-cta">
                Learn More
            </Link>
        </div>
    </div>
  );
}