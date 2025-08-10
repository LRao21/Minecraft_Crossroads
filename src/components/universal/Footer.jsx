import React from 'react';
import '../styles/Footer.css';

/**
 * Footer component for the Minecraft CrossRoads website
 * Provides further links and contact information
 * 
 * @returns {JSX.Element} Footer section component with links
 * @author Lavanya Rao
 */
function Footer() {
    /**
    * Array of link objects containing contact information
    * @type {Array<{name: string, url: string}>}
    */
    const contactLinks = [
        { name: "View Source Code", url: "https://github.com/LRao21/Minecraft_Crossroads" },
        { name: "Want to be in touch? Here's my Linkedin", url: "https://www.linkedin.com/in/lavanya-rao-512988290/" },
        { name: "More on Lavanya", url: "https://www.instagram.com/lrao21/" },
    ]

    return (
        <footer className = "footer">
            <div className = "footer-content-description">
                <h2 id = "footer-title">Minecraft Crossroads</h2>
                <h4 id = "footer-desc">What happens when you let a couple of everyday Minecraft mobs
                    learn about architecture
                </h4>
                <p id = "footer-data">Made with React</p>
            </div>
            <div className = "footer-links">
                {contactLinks.map(
                    (link) => (<a href = {link.url} key = {link.name}>{link.name}</a>)
                )}  
            </div>
        </footer>

    );
}

export default Footer;