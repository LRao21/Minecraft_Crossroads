import React from 'react';
import '../../styles/FAQCard.css';

/**
 * FAQ Card component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} FAQ Card component answering common user questions explaining the concept of the website, includes a 
 * title/question, image (optional), and answer
 * @author Lavanya Rao
 */

function FAQCard({ question, answer, image }) {
    return (
        <div className="faq-card">
            <div className="feature-title">
                <button>{question}</button>
            </div>
            <img src={image} alt={title} className="feature-image" />
            <p className="feature-description">{description}</p>
            <a href={link} className="feature-link">{linkName}</a>
        </div>
    );
}

export default FeatureCard;