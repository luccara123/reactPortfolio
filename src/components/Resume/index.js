import React from 'react';
import resume from "../../files/LuccaResume.pdf"


function Resume(){
    return(
        <section id="resume">
            <div className="download-box">
				<a href={resume} download>
					<h3>Download my Resume</h3>
				</a>
			</div>
        </section>
    )
}

export default Resume;