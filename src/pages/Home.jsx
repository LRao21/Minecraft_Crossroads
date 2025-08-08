import React from 'react';
import '../styles/Home.css';

import NavBar from '../components/Navigation.jsx';
import HeroSection from '../components/home-page/HeroSection';
import Introduction from '../components/home-page/Introduction';
import Features from '../components/home-page/Features';
import Footer from '../components/Footer';

/**
 * Home page component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Home component including navigation, hero section, introduction, features, and footer
 * @author Lavanya Rao
 */

function Home() {
    return (
        <div className="home-page">
            <NavBar />
            <HeroSection />
            <Introduction />
            <Features />
            <Footer />
        </div>
    );
}

export default Home;