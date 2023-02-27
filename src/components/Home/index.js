import React from 'react';
import bgImage from "../../images/testtt1.png";
import Nav from "../Nav/index"
import "../../utilities.css"
import Resume from '../../components/Resume/index'



function Home(){
    return(
        <section id="home" lassName="bg_image"
        style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center"
        }}>     
       
            <div className='animated-box'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div className='home-content'>
                <div className="title-container">
                    <h2 className="section-title glowText">Hi! My name is Lucca Araujo</h2>
                </div>
                <div className="half-container">

                    <div className="main-photo-container">
                    
                    </div>

                    <article className="text-container">
                        <p className="text-content"> I am a <span>Front-End Developer 
                            </span> graduated from UofT Coding Bootcamp. I am passionate about coding, I love to take a design and make it come true, make it user friendly, and keep my code clean and organized. </p>
                    </article>
                    <article className="text-container">
                        <p className="skills-content"><span>My Skills:</span> Html, Css, JavaScript, Bootstrap, Tailwind, React, Jquery, Sass, Git, Node, Express</p>
                    </article>
                    <Resume />
            </div>
            </div>
           
        </section>
    )
}

export default Home;