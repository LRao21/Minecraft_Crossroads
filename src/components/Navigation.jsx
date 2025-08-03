import React from 'react';
import siteLogo from '../assets/site-logo.svg';
import '../styles/Navigation.css';

/**
 * Navigation component for the Minecraft CrossRoads website
 * Provides navigation links to all main pages
 * 
 * @returns {JSX.Element} Navigation bar with logo and page links
 * @author Lavanya Rao
 */

function Navigation() {
    /**
    * Array of navigation link objects containing page information
    * @type {Array<{name: string, url: string}>}
    */
    const navLinks = [
        { name: "Gallery", url: "/gallery" },
        { name: "Reviews", url: "/reviews" },
        { name: "Experiment", url: "/build-planner" },
        { name: "Map", url: "/map" },
        { name: "About", url: "/about" },
        { name: "Build With Me!", url: "/build-with-me" },
    ];

    /**
     * Creates navigation bar with:
     *      site logo to connect to home page
     *      <a> tags to connect to other pages in the navLinks list
     */ 
    return (
        <nav className = "page-nav">
            <div className = "site-logo">
                <a href = "/">
                    <img src = {siteLogo} alt = "Minecraft Crossroads"/>
                </a>
            </div>
            <div className = "nav-links">
                {navLinks.map(
                    (link) => (<a href = {link.url} key = {link.name}>{link.name}</a>)
                )}  
            </div>
        </nav>
    );
}

export default Navigation;
