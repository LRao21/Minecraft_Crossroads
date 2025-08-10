import React from 'react';
import '../../styles/Hero.css';

/**
 * Hero Section (text) component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} HeroSection component including title and subtitle
 * @author Lavanya Rao
 */

function HeroSection() {
    return (
        <section className = "hero-section">
            <h1>Minecraft Crossroads</h1>
            <h2>To see where Minecraft and "Real-World" architectural elements cross paths, 
                and where they forge their own. </h2>
        </section>
    );
    
}

export default HeroSection;