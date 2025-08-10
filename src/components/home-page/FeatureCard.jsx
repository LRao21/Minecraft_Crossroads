import React from 'react';
import '../../styles/FeatureCard.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



/**
 * Feature Card component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Feature Card component directing users to other pages of the site, includes a 
 * title, image, description, and link to the page
 * @author Lavanya Rao
 */

function FeatureCard({ title, image, description, link, linkName }) {
    const navigate = useNavigate();

    return (
        <div className="feature-card">
            <h4 className="feature-title">{title}</h4>
            <img src={image} alt={title} className="feature-image" />
            <p className="feature-description">{description}</p>
            <Button className="feature-link" onClick={() => navigate(link)}>{linkName}</Button>
        </div>
    );
}

export default FeatureCard;