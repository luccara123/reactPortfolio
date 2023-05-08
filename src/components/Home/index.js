import React, {useState} from 'react';
import "../../utilities.css";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {useEffect} from 'react';
import Typewriter from "typewriter-effect";


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
    

    const [isActiveA, setIsActiveA] = useState(false);
    function handleClickA(event){
        setIsActiveA(current => !current);
    }
    const [isActiveB, setIsActiveB] = useState(false);
    function handleClickB(event){
        setIsActiveB(current => !current);
    }
    const [isActiveC, setIsActiveC] = useState(false);
    function handleClickC(event){
        setIsActiveC(current => !current);
    }
    const [isActiveD, setIsActiveD] = useState(false);
    function handleClickD(event){
        setIsActiveD(current => !current);
    }
    const [isActiveE, setIsActiveE] = useState(false);
    function handleClickE(event){
        setIsActiveE(current => !current);
    }
    const [isActiveF, setIsActiveF] = useState(false);
    function handleClickF(event){
        setIsActiveF(current => !current);
    }
    const [isActiveG, setIsActiveG] = useState(false);
    function handleClickG(event){
        setIsActiveG(current => !current);
    }
    const [isActiveH, setIsActiveH] = useState(false);
    function handleClickH(event){
        setIsActiveH(current => !current);
    }
    const [isActiveI, setIsActiveI] = useState(false);
    function handleClickI(event){
        setIsActiveI(current => !current);
    }
    const [isActiveJ, setIsActiveJ] = useState(false);
    function handleClickJ(event){
        setIsActiveJ(current => !current);
    }
    const [isActiveK, setIsActiveK] = useState(false);
    function handleClickK(event){
        setIsActiveK(current => !current);
    }
    
  
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
                            <h1 className='title-name'>
                                <span className={isActiveA ? '' : 'glowText'} onClick={handleClickA} >
                                      L 
                                </span>
                                <span className={isActiveB ? '' : 'glowText'} onClick={handleClickB}>
                                    U
                                </span>
                                <span className={isActiveC ? '' : 'glowText'} onClick={handleClickC}>
                                    C
                                </span>
                                <span className={isActiveD ? '' : 'glowText'} onClick={handleClickD}>
                                    C
                                </span>
                                <span className={isActiveE ? '' : 'glowText'} onClick={handleClickE} >
                                    A
                                </span>
                            </h1>
                            <h1 className='title-name'>
                            <span className={isActiveF ? '' : 'glowText'} onClick={handleClickF}>
                                    A
                                </span >
                                <span className={isActiveG? '' : 'glowText'} onClick={handleClickG}>
                                    R
                                </span>
                                <span className={isActiveH ? '' : 'glowText'} onClick={handleClickH}>
                                    A
                                </span>
                                <span className={isActiveI ? '' : 'glowText'} onClick={handleClickI}>
                                    U
                                </span>
                                <span className={isActiveJ ? '' : 'glowText'} onClick={handleClickJ}>
                                    J
                                </span>
                                <span className={isActiveK ? '' : 'glowText'} onClick={handleClickK}>
                                    O
                                </span>
                            </h1>
                        </div>

                        <div className='description-container'>
                            <article className="text-container">
                                <p className="text-content"> I am a <span>Front End Developer </span>
                                </p>
                                <p></p>
                            </article>
                            <button class="btn-home">
                                <Link smooth spy to="portfolio">
                                    View Projects
                                    <span className='btn-home-span'></span>
                                </Link>
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

           
            <div className='flex-width'></div>

            {/* Typewriter box */}
           <div className="purple-bubble">
                <div className='typewriter-box'>
                        <p className='typewriter-fixed'> I work with:  
                            <span className='typewriter-text'>
                            <Typewriter
                            options={{
                                strings: ['clean code', 'responsive apps','creative layouts', 'interactive websites' ],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                            </span>
                        </p>
                    
                </div>
            </div>

        </div>
    )
}

export default Home;