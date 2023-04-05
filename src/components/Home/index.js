import React from 'react';
import bgImage from "../../images/officialbackground.png";
import Nav from '../../components/Nav'
import "../../utilities.css"
import Resume from '../../components/Resume/index'
import { NavLink } from 'react-router-dom';
import Ilustration from '../../purpleIcons/Startup.png';
import Sidebar from "../../components/Sidebar";
import SideIcons from '../../components/IconsNav';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import saturn from "../../purpleIcons/saturn.png"

function Home(){
    const sectionName = 'about';
    return(
        <div>
            <section id="home" className="bg_image"
                style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                height: "100vh",
                backgroundPosition: "center"
                }}>
                        
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <Nav></Nav>
                <SideIcons></SideIcons>
                <img className='ilustration' src={saturn} alt="ilustration" />
                 {/* Lights effect */}
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
                 {/*Box-1: My info */}
                <div className='home-content'>
                    <div className="half-container">
                        <div className="title-container">
                            <h2 className="title">Hi there, My name is</h2>
                            <h1 className='section-title glowText'>Lucca <span className='purple'> Araujo</span></h1>
                        </div>

                        <article className="text-container">
                            <p className="text-content"> I am a <span>Front-End Developer </span>
                            </p>
                        </article>
                        
                        <div>
                            <button class="btn-home">
                                <NavLink to="/projects">
                                    View Projects
                                    <span className='btn-home-span'></span>
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    
                    {/*Box-2: Ilustration */}
                    <div className='ilustration-container'>
                        <img className='ilustration' src={Ilustration} alt="ilustration" />
                    </div>
                </div>
            </section>

            <div className="purple-bubble">
            <Link  smooth spy to="about">
                <div className='whiteCircle'>
                    <p className='arrowIcon arrowRight'>
                    </p>
                    <p className='arrowIcon arrowLeft'>
                    </p>
                    <div className='circle'></div>
                    <div className='circle-bottom'></div>
                </div>  
            </Link>
            </div>

        </div>
    )
}

export default Home;