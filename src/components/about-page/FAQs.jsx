import React from 'react';
import '../../styles/about-page/FAQs.css'

import { FAQ } from '../../data/FAQ.js'
import FAQCard from './FAQCard.jsx';

/**
 * FAQ section component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} FAQ component acting as the container for collapisble FAQs 
 * @author Lavanya Rao
 */
function FAQs(){
    return (
        <section className="FAQs">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-cards">
                {FAQ.map((faq) => (
                    <FAQCard
                        
                    />
                ))}
            </div>
        </section>
    );

}

export default FAQs;