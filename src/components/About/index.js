import React from 'react';

function About(){
    return(
        <section id="about">

            <div className="title-container">
                <h2 className="section-title"> ABOUT ME </h2>
            </div>

            <div className="half-container">

                <div classNmae="main-photo-container">
                    <img alt="my-photo"/>
                </div>

                <article classNmae="text-container">
                    <p> My name is Lucca Araujo</p>
                </article>
            </div>
        </section>
    )
}

export default About;