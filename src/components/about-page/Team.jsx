import React from 'react';
import '../../styles/about-page/Team.css'

import { TeamData } from '../../data/Team.js'
import TeamCard from './TeamCard.jsx';

/**
 * Team section component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Team component detailing current team members
 * @author Lavanya Rao
 */
function Team(){
    return (
        <section className="Team">
            <h3>Meet The Team</h3>
            <div className="team-cards">
                {TeamData.map((member) => (
                    <TeamCard
                        key = {member.id}
                        id = {member.id}
                        image = {member.img}
                        alt = {member.alt}
                        desc = {member.desc}
                        role = {member.role}
                    />
                ))}
            </div>
        </section>
    );
}

export default Team;