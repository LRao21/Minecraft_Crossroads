import React from 'react';
import '../styles/FeatureCard.css';

/**
 * Feature Card component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Feature Card component directing users to other pages of the site, includes a 
 * title, image, description, and link to the page
 * @author Lavanya Rao
 */

function FeatureCard({ title, image, description, link, linkName }) {
    return (
        <div className="feature-card">
            <h4 className="feature-title">{title}</h4>
            <img src={image} alt={title} className="feature-image" />
            <p className="feature-description">{description}</p>
            <a href={link} className="feature-link">{linkName}</a>
        </div>
    );
}

export default FeatureCard;