import React from 'react';
import '../../styles/about-page/TeamCard.css'

/**
 * Team Card component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Team Card component describing team members, includes an image, description, and role
 * @author Lavanya Rao
 */


function TeamCard({ id, image, alt, desc, role }) {
    return (
        <div className="team-card">
            <h4>Member: {id}</h4>
            <img src = {image} alt={alt} className="member-image" />
            <p className = "role">Role: {role}</p>
            <p className = "description">
                Hi! I'm {id}. {desc}
            </p>
        </div>
    );
}

export default TeamCard;