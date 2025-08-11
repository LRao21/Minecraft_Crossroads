import React from 'react';
import { useState } from 'react';
import '../../styles/about-page/FAQCard.css'

/**
 * FAQ Card component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} FAQ Card component answering common user questions explaining the concept of the website, includes a 
 * title/question, image (optional), and answer
 * @author Lavanya Rao
 */


function FAQCard({ question, answer, images }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const changeVisibility = () => {setIsOpen(!isOpen);};
    
    return (
        <div className="faq-card">
            <button onClick={changeVisibility} className="faq-question">
                {question}
            </button>
            
            if (isOpen) {
                <div className="faq-content">
                    <div className="faq-answer">
                        {answer.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    if (images.length !== 0) {
                        images.map((img, index) => (
                            <img 
                                key={index}
                                src={img.src} 
                                alt={img.alt}
                                className="faq-image"
                            />
                        ))
                    }
                </div>
            }
            
        </div>
    );
}

export default FAQCard;