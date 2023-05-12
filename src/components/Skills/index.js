import React from "react";
import {Slide, Fade,  JackInTheBox } from "react-awesome-reveal";
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
import restfulIcon from '../../SkillsIcons/restapi-icon.png';


const Skills =  () => {
    return(
        <section>
            {/* Skills Container */}
            <div id="skills" className="skills-container">
            <JackInTheBox direction="left" delay={400} damping={1}> <h2 className="second-title">My Skills</h2></JackInTheBox>
            <Fade delay={400} cascade={true} >
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
                                <img className='skill-icon' src={restfulIcon} alt="skill-icon" />
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
                                <img className='skill-icon' src={restfulIcon} alt="skill-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    )
}

export default Skills;