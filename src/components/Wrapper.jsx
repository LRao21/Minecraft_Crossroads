import React from 'react';
import '../styles/Wrapper.css';

import NavBar from './Navigation';
import Footer from './Footer';

/**
 * Wrapper component for the Minecraft CrossRoads website
 * Provides base structure for all pages so they are the same proportions and can scale easily for screen size
 * 
 * @returns {JSX.Element} Wrapper component with navigation and footer
 * @param {Object} children - The content to be wrapped by the component
 * @author Lavanya Rao
 */

function Wrapper({children}) {
  //every page will have a nav bar and a footer regardless of the content
  return (
    <div className="wrapper">
        <NavBar />
        {children}
        <Footer/>
    </div>
  );
}
    
export default Wrapper;