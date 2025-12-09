const About = () => {
    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            padding: '0 3rem' 
        }}>
            <div style={{ maxWidth: '800px' }}>
                <p style={{ 
                    fontSize: '1.5rem', 
                    lineHeight: '1.6', 
                    marginBottom: '2rem' 
                }}>
Sonic Assembly is a Stockholm-based creative sound studio specializing in tailored music, sound design and audio innovation run by Joshua Ng. We thrive in the intersection of technology, music, and sound design, constantly exploring the overlaps to deliver unique, immersive experiences. We are passionate about crafting original sounds and compositions, tailored to each project’s specific needs, and balancing artistic expression with technical precision. 
                </p>
                
                <p style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.6', 
                    marginBottom: '4rem',
                    color: '#888'
                }}>
Our expertise include:
*Composing and scoring for a variety of media, including games and films
*Sound design and SFX for games and films, including foley work and synthesis
*Developing custom VSTs, plugins, and audio-focused software
*Game audio implementation using tools like Wwise, FMOD, Unity, PureData and Max/MSP
*Artistic research in the audio innovation and soundscape space
                </p>

                <div>
                    <a href="mailto:hello@sonicassembly.se" style={{ 
                        fontSize: '2rem', 
                        textDecoration: 'underline',
                        textUnderlineOffset: '8px'
                    }}>
                        hello@sonicassembly.se
                    </a>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                    <p>Bondegatan 21</p>
                    <p>116 33 Stockholm</p>
                </div>
            </div>
        </div>
    );
};

export default About;
