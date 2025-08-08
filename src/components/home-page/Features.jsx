import React from 'react';
import '../styles/Features.css';

import featureCards from './FeatureCards.jsx';
import FeatureCardData from 'src/data/FeaturesData.js';

/**
 * Features component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Feature component acting as the container for cards directing users to three pages of the site
 * @author Lavanya Rao
 */
function Features(){
    return (
        <section className="showcase">
            <h3>To Which CrossRoad Will You Travel?</h3>
            <div className="feature-cards">
                {FeatureCardData.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        image={feature.img}
                        description={feature.description}
                        link={feature.link}
                        linkName={feature.link_name}
                    />
                ))}
            </div>
        </section>
    );
}

export default Features;