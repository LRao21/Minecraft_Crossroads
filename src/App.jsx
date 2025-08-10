import React from 'react';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/universal/Navigation';
import Footer from './components/universal/Footer';

//pages for routing purposes
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import BuildPlanner from './pages/Build-Planner.jsx';
import BuildWithMe from './pages/Build-With-Me.jsx';
import Gallery from './pages/Gallery.jsx';
import Map from './pages/Map.jsx';
import Reviews from './pages/Reviews.jsx';
import PageNotFound from './pages/Page-Not-Found.jsx';

/**
 * App component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} App component using the react router to navigate "between" pages, starting at the home page
 * NavBar and Footer are persistent across all pages
 * @author Lavanya Rao
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <div className = "wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/build-planner" element={<BuildPlanner />} />
              <Route path="/build-with-me" element={<BuildWithMe />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/map" element={<Map />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
