import React from 'react';
import '../styles/Signal.css';

import signalImage from '../public/images/signal_image.png';

/**
 * Signal Section component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Signal component pointing user to the about page due to its importance
 * in understanding the website
 * @author Lavanya Rao
 */

function Signal() {
    return (
         <section className="signal">
                <p>Crossroads! Crossroads? Great question! Whose crossroads may these be? Another great question!
                    Do explore the about section to better understand who we may be, and thus what crossroads we see. 
                </p>
                <a href = "/about">About The Team</a>
                <img src={signalImage} alt="Steve's finalized tower, documented by the team from afar" />
				<p>"Steve's finalized tower, documented by the team from afar"</p>
        </section>
    );
}

export default Signal;