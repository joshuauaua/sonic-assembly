import PhotoGrid from '../components/pages/home/PhotoGrid';
import aboutHeaderImg from '../assets/about_header.JPG';
import SEO from '../components/SEO';

const About = () => {
    return (
        
        <div style={{ 
            minHeight: '100vh', 
            padding: '8rem 2rem 4rem',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)'
        }}>
            <SEO 
                title="About Us" 
                description="Sonic Assembly is a creative studio merging composition with code. We specialize in tailored music, sound design, and technical audio innovation."
            />
            {/* Header Image */}
            <img 
                src={aboutHeaderImg} 
                alt="About Header" 
                style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto',
                    marginBottom: '4rem',
                    borderRadius: '4px' 
                }} 
            />
            {/* Main Text Section */}
            <div style={{ 
                maxWidth: '800px', 
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                <p style={{ 
                    fontSize: '1.5rem', 
                    lineHeight: '1.6', 
                    marginBottom: '2rem' 
                }}>
                 Sonic Assembly was established with the belief that sound plays an essential role in evoking emotion and communicating information—the "special sauce" that transforms the mundane into the magical.
                </p>

                <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.6', 
                    marginBottom: '1.5rem',
                    color: 'var(--text-secondary)'
                }}>
                    Since 2023, we have brought this vision to sonic life for clients ranging from Google to Fujifilm, Mittuniversitet and beyond. But as the media landscape evolves, so do we. Sonic Assembly is a creative studio that merges the art of composition with the rigor of code. We specialize in tailored music and sound design, but we distinguish ourselves through technical innovation.
                </p>

                <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.6', 
                    color: 'var(--text-secondary)'
                }}>
                    Today, we offer a comprehensive suite of services that spans linear media and interactive tech. From original music, sound design and final mix of a commercial to building immersive installations, interactive digital products and beyond, we approach every project with passion and fond curiosity.
                </p>
            </div>

            {/* Photo Grid */}
            <div style={{ width: '100%', maxWidth: '1200px', marginBottom: '8rem' }}>
                <PhotoGrid />
            </div>

            {/* Expertise & Contact Section */}
            <div className="expertise-grid" style={{ 
                width: '100%', 
                maxWidth: '1000px',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '4rem',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '4rem'
            }}>
                {/* Left Column - Header */}
                <div>
                    <h3 style={{ 
                        fontSize: '1.5rem', 
                        textTransform: 'uppercase', 
                        margin: 0,
                        position: 'sticky',
                        top: '8rem',
                        letterSpacing: '0.05em'
                    }}>
                        Our Expertise
                    </h3>
                </div>

                {/* Right Column - Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                    {/* Expertise List */}
                    <ul style={{ 
                        listStyle: 'none', 
                        padding: 0, 
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        fontSize: '1.2rem',
                        lineHeight: '1.5',
                        color: 'var(--text-primary)',
                        paddingBottom: '4rem' /* Add some padding bottom since we removed the border/margin from the next item */
                    }}>
                        <li>Composing and scoring for a variety of media, including games and films</li>
                        <li>Sound design and SFX for games and films, including foley work and synthesis</li>
                        <li>Developing custom VSTs, plugins, and audio-focused software</li>
                        <li>Game audio implementation using tools like Wwise, FMOD, Unity, PureData and Max/MSP</li>
                        <li>Artistic research in the audio innovation and soundscape space</li>
                    </ul>
                </div>
            </div>

            {/* Contact Section */}
            <div style={{ 
                width: '100%', 
                maxWidth: '1000px',
                borderTop: '1px solid var(--border-color)', 
                marginTop: '0', 
                paddingTop: '4rem',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '400',
                        maxWidth: '400px',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        Ready to make some magic? Reach out!
                    </h2>

                    <a href="mailto:hej@sonicassembly.se" style={{ 
                        fontSize: '2rem', 
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'var(--text-primary)',
                        transition: 'opacity 0.2s',
                        borderBottom: 'none'
                    }}>
                        hej@sonicassembly.se
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Responsive Styles Injection */}
            <style>{`
                @media (max-width: 768px) {
                    .expertise-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default About;
