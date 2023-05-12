import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Resume from "../Resume";
import { Slide , Fade , Rotate , Hinge , JackInTheBox , Roll } from "react-awesome-reveal";


// Process to build projects icons
import creativeImage from '../../purpleIcons/Creative Process_Outline.png';
import toDoImage from '../../purpleIcons/Scrum board_Outline (1).png';
import codeImage from '../../purpleIcons/Coding _Outline (1).png';
import launchImage from '../../purpleIcons/Campaign launch_Flatline.png';
import Skills from '../Skills/index'




function About(){
   
   
    return(
        <section id="about">
             <Fade delay={200} ><h2 className="glowText section-title"> About me</h2></Fade>
            <Fade cascade damping={0.1}><div className="about-container">
                <div className="about-1">
                    <article className="paragraph">
                        <JackInTheBox><h3> Education</h3></JackInTheBox>
                        <p>
                            I am a self-taught web developer. I started my journey in 2020, by learning html, css and Javascript. In 2022, I graduated from University Of Toronto School Of Continuing Studies: Coding Bootcamp. During the 6 months program, I was able to learn the most known full stack technologies and apply this knowledge in lots of projects. In the three team projects we had, I was the team leader and I received great feedback from all the instructors. Since then, I've focused on learning more about front end technologies, where I've found my passion and curiosity.
                        </p>
                       
                    </article>
                </div>
                <div className="line3 topTop"></div>
                
                <div className="about-2">
                    <article className="paragraph">
                    <JackInTheBox delay={200}> <h3>Work Experience</h3></JackInTheBox>
                    <p>
                            Currently, I am looking for my first opportunity to launch my career as a web developer. I have experience with customer service and working as a team, since I worked three years in a restaurant and I grew from a dishwasher to a manager after somes months of learning and giving my best to the company. Therefore, I know I am capable of taking an opportunity and dedicate myself completly.
                        </p>
                    
                        <Resume></Resume>
                    
                    </article>
                </div>
                
               
            </div>
            </Fade>

            <div className="lines-box">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
               

          
            <section className="project-icons">
            <JackInTheBox direction="left" delay={300}> <h2 className="second-title">How I build projects</h2> </JackInTheBox>

               <Fade cascade={true} dumping={2} delay={500}>
               
                <div className="process-images">
                   
                        <div className="process-item">
                            <img className='process-icon' src={creativeImage} alt="sasdas" />
                            <h3>Think Outsite The Box</h3>
                        </div>
                    
                   
                    <div  className="process-item">
                        <img className='process-icon' src={toDoImage} alt="sasdas" />
                        <h3>Do Scrum Board</h3>
                    </div>
                   
                    
                    <div  className="process-item">
                        <img className='process-icon' src={codeImage} alt="sasdas" />
                        <h3>Code and Debug</h3>
                    </div>
                    <div  className="process-item">
                        <img className='process-icon' src={launchImage} alt="sasdas" />
                        <h3>Launch</h3>
                    </div>
                    
                </div></Fade>
                
            </section>
            
             <Skills></Skills>

        </section>
        
    )
}

export default About;