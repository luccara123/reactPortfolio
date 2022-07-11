import React from 'react';
import resume from "../../files/Lucca Resume.pdf"


function Resume(){
    return(
        <section id="resume">

            <div className="title-container">
                <h2 className="section-title"> RESUME</h2>
            </div>

            <div className="line"></div>

            <div className="skillsBox">
                <h3>My Skills</h3>
                <p> Html, Css, Sass, Javascript, Jquery, Bootstrap, Web APIs, Node.js, Express.js</p>
                <p>MySQL, Sequelize, JSON, MongoDB, React. </p>
            </div>

            <div className="line"></div>

            <div className="download-box">
				<a href={resume} download>
					<h3>Download my Resume</h3>
				</a>
			</div>
        </section>
    )
}

export default Resume;