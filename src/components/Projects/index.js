import React from 'react';
import project1 from "../../images/project-1.jpeg"
import project2 from "../../images/project-2.jpeg"
import project3 from "../../images/project-3.jpeg"
import project4 from "../../images/project-4.jpeg"
import project5 from "../../images/project-5.jpeg"
import project6 from "../../images/project-6.jpeg"
import project7 from "../../images/project-7.jpeg"
import project8 from "../../images/project-8.jpeg"
import "../../utilities.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Fade , JackInTheBox, Bounce , Roll } from "react-awesome-reveal";



function Projects(){
    const starIcon = <FontAwesomeIcon icon={faStar}/>
    const projects = [
        {
            id: 1,
            title: "Weather Dashboard",
            description: "A weather app that allows users to search for a city and check the current temperature and 5-day forecast",
            technologies: "Html, Css, JavaScript, Jquery, Bootstrap",
            github: "https://github.com/luccara123/Weather-Dashboard",
            website: "https://luccara123.github.io/Weather-Dashboard/",
            image: project1
            
        },
        {
            id: 2,
            title: "Tech Blog",
            description: "Tech blog is a website that allows users to add posts about the tech world, edit them and also add comments to any posts.",
            technologies: "Html, Css, Javascript, Express, Handlebars, Mysql2, Express",
            github: "https://github.com/luccara123/TechBlog-mvc-",
            website: "https://gentle-atoll-62855.herokuapp.com/",
            image: project2
           
        },
        {
            id: 3,
            title: "JS Quiz",
            description: "A quiz application about JavaScript that tests the user's knowledge about the language. If the user chooses the wrong answer, he will have fifteen seconds less than his current time to complete the challenge.",
            technologies: "Html, Css, JavaScript",
            github: "https://github.com/luccara123/Code-Quiz-JavaScript",
            website: "https://luccara123.github.io/Code-Quiz-JavaScript/",
            image: project3
           
        },
        {
            id: 4,
            title: "SpaceJetters",
            description: "SpaceJetters is space travel agency with a futuristic concept of providing flights to others planets and moons using rockets.",
            technologies: "Html, Css, JavaScript, React ",
            github: "https://github.com/projectbootcamp3/Space-Jetters/",
            website: "https://ancient-mountain-63451.herokuapp.com/",
            image: project4
            
        },
        {
            id: 5,
            title: "BootBank",
            description: "A banking app that features a login page and a full dashboard allowing users to track transactions, send money to their contact list, convert money and ask our support staff important questions.",
            technologies: "Html, Css, Javascript, JQuery, Tailwind, Moment",
            github: "https://github.com/projectbootcamp4/boot-bank",
            website: "https://projectbootcamp4.github.io/boot-bank/",
            image: project6
          
        },
        {
            id: 6,
            title: "Edgeledger",
            description: "Edgeledger is a business showcase website",
            technologies: "Html, Css, JavaScript",
            github: "https://github.com/luccara123/edgeledger",
            website: "https://luccara123.github.io/edgeledger/",
            image: project7
           
        },
        {
            id: 7,
            title: "Password Generator",
            description: "The website has a generate password button that when clicked, asks the user how many characters he wants for his password, it should be greater than 8, and less than 128. He can choose, lowercase letters, uppercase letters, numbers and symbols.",
            technologies: "Html, Css, JavaScript",
            github: "https://github.com/luccara123/Password_Generator",
            website: "https://luccara123.github.io/Password_Generator/",
            image: project8
           
        },

    ]
    return(
        <section id="portfolio">
            <div>
                <Fade delay={200}><h2 className="glowText section-title">Projects</h2></Fade>
             </div>

            <div className="projects-container">
            {projects.map((project) => (
            <div className='projects-bg ' id={ project.id % 2 == 0 ? 'even' : 'odd' } >
                <Fade cascade  damping={0.1} direction="top">
              <div key={project.id} id={ project.id % 2 == 0 ? 'reverse' : 'no-reverse' } className="projects-box box-effect">
                    <div className="img-box">
                    <img src={project.image} className='project-img' alt="project image" />
                    <article className='title-cont'>
                    <h3 className='hidee project-title'>{project.title}</h3>
                    </article>

                   
                    </div>
                    <div className='projects-info'>
                        <div className='project-description'>
                          
                            <p className='description'>{project.description}</p>
                            <p className='technologies'>{project.technologies}</p>
                        </div>
                        <div className="linksBox">
                            <a href={project.github} target="_blank"> Github</a>
                            <a href={project.website}  target="_blank"> Website</a>
                        </div>
                    </div>
              </div>
              </Fade>
              </div>
              ))}
        </div>
        </section>
    )
}

export default Projects;