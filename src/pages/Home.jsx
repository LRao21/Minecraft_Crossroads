import React from 'react';

//Home page section imports
import HeroSection from '../components/home-page/HeroSection';
import Introduction from '../components/home-page/Introduction';
import Features from '../components/home-page/Features';

/**
 * Home page component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Home component including navigation, hero section, introduction, features, and footer
 * @author Lavanya Rao
 */

function Home() {
    return (
        <div className="home-page">
            <HeroSection />
            <Introduction />
            <Features />
        </div>
    );
}

export default Home;