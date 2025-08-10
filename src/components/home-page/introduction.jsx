import React from 'react';
import '../../styles/Introduction.css';
import { Link } from 'react-router-dom';

import heroImage from '../../../../public/images/signal_image.png'

/**
 * Introduction Section component for the Minecraft CrossRoads website
 * 
 * @returns {JSX.Element} Introduction component explaining the purpose of the website
 * @author Lavanya Rao
 */

function Introduction() {
    return (
        <section className="introduction">
            <img src={heroImage} alt="Steve's tower, as documented by the team from afar" />

            <div id = "intro-purpose">
                <h3>Minecraft provides the opportunity to recreate one's perspective.</h3>
                <p>
                    Whether that be by <Link to = "/build-with-me">creating things only ever imagined</Link>, 
                    exploring and understanding the unfamiliar, 
                    or experimenting with the things thought to be known moments before, 
                    there's always a story to tell! For us at <Link to="/about">Minecraft CrossRoads</Link>,
                     Minecraft recreated our familiar through the stories of our friends,
                     whether that be through the occassional talks of new biome features or adventures following
                     Steve and their many projects. 
                     Our world view is constantly evolving, and Minecraft CrossRoads is a testament of that.
                </p>
            </div>

            <div id = "intro-questions">
                <h4>Particularly, we're asking more questions about what our world view could be!</h4>
                <p>For Example:</p>
				<ul>
				 	<li>What makes up a creator's process? </li>
				 	<li>How do creators go about developing their builds from idea to finished pieces?</li>
				 	<li>How do they account for errors in planning they may not have thought of?</li>
					<li>How can we learn from them?</li>
				</ul>
            </div>

            <div id = "intro-golden_message">
                <h4>Minecraft Crossroads wants to explore those questions 
                    and analyze the “Minecraft architect” as we understand it.</h4>
                <p>
                    In our pages, you'll find <Link to = "/build-with-me">our explorations of example builds</Link>,
                    analysis of architectural elements and their Minecraft counterparts,
                    <Link to = "/gallery">pictoral documentation of our interactions and learnings from our world</Link>, 
			 		and much more! 
                    We also are working on <Link to = "/build-planner">an experimental feature:</Link>one where you could play with 
                    floorplan ideas at a basic level, letting you decide in advance how your visions might look without the need to 
                    bust out a book and quill.
			 	</p>
                <p>
			 		The ultimate goal of our exploration is sharing our findings with you. We want to get you questioning as we do,
			 		whether that be through questions extending our own or questions exploring topics we have yet to think of. Regardless,
			 		these pages are meant to house a subjective exploration. We hope it makes you feel as welcome as we do.
                </p>
            </div>
        </section>
    );
}

export default Introduction;