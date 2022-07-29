import React from 'react';
import project1 from "../../images/project-1.jpeg"
import project2 from "../../images/project-2.jpeg"
import project3 from "../../images/project-3.jpeg"
import project4 from "../../images/project-4.jpeg"
import project5 from "../../images/project-5.jpeg"
import project6 from "../../images/project-6.jpeg"

function Portfolio(){
    return(
        <section id="portfolio">
            <div className="title-container">
                <h2 className="section-title"> PORTFOLIO </h2>
            </div>

            <div className="line"></div>

            <div className="projects-container">
               {/* Porject-1*/}
                <div className="projects-box">
                    <div className="img-box">
                    <img src={project1} alt="project1" />
                    </div>
                <h3> Weather Dashboard</h3>
                <div className="linksBox">
                    <a href="https://github.com/luccara123/Weather-Dashboard"> Github</a>
                    <a href="https://luccara123.github.io/Weather-Dashboard/#"> Website</a>
                </div>
                </div>

                {/* Porject-2*/}
                <div className="projects-box">
                <div className="img-box">
                    <img src={project2} alt="project2" />
                </div>
                <h3>TechBlog</h3>
                <div className="linksBox">
                    <a href="https://github.com/luccara123/TechBlog-mvc-"> Github</a>
                    <a href="https://gentle-atoll-62855.herokuapp.com/"> Website</a>
                </div>
                </div>

                {/* Porject-3*/}
                <div className="projects-box">
                <div className="img-box">
                    <img src={project3} alt="project3" />
                    </div>
                <h3>Code Quiz Challange</h3>
                <div className="linksBox">
                    <a href="https://luccara123.github.io/Code-Quiz-JavaScript/"> Github</a>
                    <a href="https://luccara123.github.io/Code-Quiz-JavaScript/"> Website</a>
                </div>
                </div>

                {/* Porject-4*/}
                <div className="projects-box">
                <div className="img-box">
                    <img src={project4} alt="project4" />
                    </div>
                <h3>SpaceJetters</h3>
                <div className="linksBox">
                    <a href="https://github.com/projectbootcamp3/Space-Jetters/"> Github</a>
                    <a href="https://ancient-mountain-63451.herokuapp.com/"> Website</a>
                </div>
                </div>

                {/* Porject-5*/}
                <div className="projects-box">
                <div className="img-box">
                    <img src={project5} alt="project5" />
                    </div>
                <h3>Second Blind Date</h3>
                <div className="linksBox">
                    <a href="https://github.com/2ndblinddate/project-2nd-blind-date"> Github</a>
                    <a href="https://salty-brushlands-53741.herokuapp.com/"> Website</a>
                </div>
                </div>

                {/* Porject-6*/}
                <div className="projects-box">
                <div className="img-box">
                    <img src={project6} alt="project6" />
                    </div>
                <h3>Bootbank</h3>
                <div className="linksBox">
                    <a href="https://github.com/projectbootcamp4/boot-bank"> Github</a>
                    <a href="https://projectbootcamp4.github.io/boot-bank/"> Website</a>
                </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio;