import React from 'react';
import '../styles/About.css';

import Wrapper from '../components/Wrapper.jsx';

function About(){
    return(
        <div className="about-page">
            <Wrapper 
                key = "about-wrapper"
                children = {
                    <h1>About Us</h1>,
                }
                //Faq section -> component + data page
                //history sectiion 
                //team section
                //find us section
                />
        </div>
    );
}

export default About;