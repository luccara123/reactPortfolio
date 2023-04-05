import React from "react";
import MultipleItems from '../Skills/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//Skills Images
import htmlIcon from '../../SkillsIcons/html-icon.png';
import cssIcon from '../../SkillsIcons/css-icon.png';
import jsIcon from '../../SkillsIcons/js-icon.png';
import bootstrapIcon from '../../SkillsIcons/bootstrap-icon.png';
import tailwindIcon from '../../SkillsIcons/tailwind-icon.png';
import reactIcon from '../../SkillsIcons/react-icon.png';
import jqueryIcon from '../../SkillsIcons/jquery-icon.png';
import sassIcon from '../../SkillsIcons/sass-icon.png';
import gitIcon from '../../SkillsIcons/git-icon.png';
import nodeIcon from '../../SkillsIcons/node-icon.png';
import expressIcon from '../../SkillsIcons/express-icon.png';

function About(){
    const starIcon = <FontAwesomeIcon icon={faStar}/>
    return(
        <section id="about">
            <div className="about-container">
                <h2 className="glowText"> About me</h2>
                <article className="icons-container">
                    <p>sfdsfdsf dsfdsfdsfdsf sdfsdfsdfsdfsd sfsdfsdfsdfsdf gh  htfg fg df gdf g dfe re rh  fghf fd gdf gf dg fdg dfg w ere rw erw   jjgjghj ghj ghj ghj gh jjh  rwe rwe r wer w  fgh tf h  fg f gh fgh gf hgfhgfgghhg
                    </p>
                </article>
            </div>




            {/* Skills Container */}
            <div id="skills" className="skills-container">
                <h2 className="glowText">My Skills</h2>
                <div className="marquee-background">
                    <div className="marquee-wrapper">
                        <div className="marquee"> 
                            <div className="marquee-group">             
                                <img className='skill-icon' src={htmlIcon} alt="skill-icon" />
                                <img className='skill-icon' src={cssIcon} alt="skill-icon" />
                                <img className='skill-icon' src={jsIcon} alt="skill-icon" />
                                <img className='skill-icon' src={bootstrapIcon} alt="skill-icon" />
                                <img className='skill-icon' src={tailwindIcon} alt="skill-icon" />
                                <img className='skill-icon' src={reactIcon} alt="skill-icon" />
                                <img className='skill-icon' src={jqueryIcon} alt="skill-icon" />    
                                <img className='skill-icon' src={sassIcon} alt="skill-icon" />
                                <img className='skill-icon' src={gitIcon} alt="skill-icon" />
                                <img className='skill-icon' src={nodeIcon} alt="skill-icon" />
                                <img className='skill-icon' src={expressIcon} alt="skill-icon" />
                                <img className='skill-icon' src={expressIcon} alt="skill-icon" />
                            </div>
                            <div className="marquee-group" aria-hidden="true">             
                                <img className='skill-icon' src={htmlIcon} alt="skill-icon" />
                                <img className='skill-icon' src={cssIcon} alt="skill-icon" />
                                <img className='skill-icon' src={jsIcon} alt="skill-icon" />
                                <img className='skill-icon' src={bootstrapIcon} alt="skill-icon" />
                                <img className='skill-icon' src={tailwindIcon} alt="skill-icon" />
                                <img className='skill-icon' src={reactIcon} alt="skill-icon" />
                                <img className='skill-icon' src={jqueryIcon} alt="skill-icon" />    
                                <img className='skill-icon' src={sassIcon} alt="skill-icon" />
                                <img className='skill-icon' src={gitIcon} alt="skill-icon" />
                                <img className='skill-icon' src={nodeIcon} alt="skill-icon" />
                                <img className='skill-icon' src={expressIcon} alt="skill-icon" />
                                <img className='skill-icon' src={expressIcon} alt="skill-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}

export default About;