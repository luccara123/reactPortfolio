import React from 'react';
import "../../utilities.css";
import { NavLink } from 'react-router-dom';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

//components
import Nav from '../../components/Nav'
import Resume from '../../components/Resume/index'
import Sidebar from "../../components/Sidebar";
import SideIcons from '../../components/IconsNav';

//images
import saturn from "../../purpleIcons/saturn.png";
import rocket from "../../purpleIcons/rocket.png";
import bgImage from "../../images/officialbackground.png";
import Ilustration from '../../purpleIcons/Startup.png';


function Home(){
    return(
        <div>
            <section id="home" className="bg_image"
                style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                height: "100vh",
                backgroundPosition: "center"
                }}>

                {/* Nav components */}  
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <Nav></Nav>
                <SideIcons></SideIcons>

               

                 {/* Lights effect */}
                <div className='animated-box'>
                    <ul>
                        <li></li>
                        <li></li>
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
                    <div className="first-container">
                        <div className="title-container">
                            <h2 className="subtitle">Hi there, My name is</h2>
                            <h1 className='title-name glowText'>Lucca <span className='purple'> Araujo</span></h1>
                        </div>

                       
                        
                        <div className='description-container'>
                            <article className="text-container">
                                <p className="text-content"> I am a <span>Front End Developer </span>
                                </p>
                                <p></p>
                            </article>
                            <button class="btn-home">
                                <NavLink to="/projects">
                                    View Projects
                                    <span className='btn-home-span'></span>
                                </NavLink>
                            </button>
                        </div>
                    </div>

                     {/* Space images */}
                     
                    {/* <img className='rocket-img' src={rocket} alt="purple rocket" /> */}
                    <img className='saturn-img' src={saturn} alt="saturn with moons" />
                    
                    {/*Box-2: Ilustration */}
                    <div className='ilustration-container'>
                        <img className='ilustration float' src={Ilustration} alt="ilustration" />
                    </div>
                </div>
            </section>

           
            <div className='flex-width'>
            <p className='more-about'> Learn more about me</p>
            </div>
            {/* purple footer with arrow */}
           <div className="purple-bubble">
            
            <div className='circle-wrapper'>
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

        </div>
    )
}

export default Home;