import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/universal/Title';

//About page section imports
import FAQs from '../components/about-page/FAQs.jsx';
import Team from '../components/about-page/Team.jsx';

function About(){
    return(
        <div className="about-page">
           <Title title="About Us" />
           <FAQs />
           <section className = "project-history">
                <p>
                In summary of our discussion of Steve and our team (check out the FAQs to learn more!), MineCraft CrossRoads began after our founder, Jeffrey,
				discovered the existence of Steve through talks with the Wandering Trader. Originally, he kept his ideas confined
				to his library until he met Me, an enderman similarly interested in developing builds in their world-even if through
				taking blocks (Jeffrey can attest to this). The output of the team was originally slow as the main goal was to keep tabs
				on Steve and learn about the world they spoke of. After an incident in the village, many of the livestock escaped. 
				It was then Jeffrey invited one cow, Shawn, to join them. With Shawn's ever loud input, Jeffrey became 
				inspired to share his findings while still keeping tabs with Steve, asking Me to use their block-handling
				talents to help them write their content and connect it to a platform originating in Steve's world.
				</p>
                <p>
				This brings us to the current state of MineCraft CrossRoads, team and all. The team plans to expand their reviews 
				soon to include some of Me's build knowledge, rating the effectiveness of certain build techniques they learned by 
				watching Steve. The <Link to = "/gallery">gallery will also be expanded to reflect this new direction,</Link>giving spotlight to a variety of
				the team's passions and interests in the possibilties our world provides us.
			    </p>
            </section>
           <Team />
           <section className="contact">
                <h3>Contact Us</h3>
                <p> Reach out to your local Wandering Trader and give him your message. He'll deliver it to us. </p>
			    <p>Alternatively, reach out to us via the "Linkedin," as we have learned of through Steve. </p>
            </section>
        </div>
    );
}

export default About;