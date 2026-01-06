import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type, image, url }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title ? `${title} | Sonic Assembly` : 'Sonic Assembly'}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            
            {/* Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title ? `${title} | Sonic Assembly` : 'Sonic Assembly'} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            
            {/* Twitter Card tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? `${title} | Sonic Assembly` : 'Sonic Assembly'} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

SEO.defaultProps = {
    title: 'Sonic Assembly',
    description: 'Sonic Assembly is a creative sound studio utilizing code to create unique sonic experiences.',
    keywords: 'sound design, music composition, interactive audio, game audio, sonic branding',
    name: 'Sonic Assembly',
    type: 'website',
    image: '/og-image.jpg', // Ensure you have a default OG image in public folder or assets
    url: 'https://sonicassembly.se'
};

export default SEO;
