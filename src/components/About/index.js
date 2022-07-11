import React from 'react';
import myPhoto from "../../images/myphoto.png"

function About(){
    return(
        <section id="about">

            <div className="title-container">
                <h2 className="section-title"> ABOUT ME </h2>
            </div>

            <div className="line"></div>

            <div className="half-container">

                <div className="main-photo-container">
                <img src={myPhoto} alt="my photo" />
                </div>

                <article className="text-container">
                    <p className="text-content"> My name is Lucca Araujo, I am 21 years old and I am passionate about coding. I am from Brazil and I live in Toronto since 2019. </p>
                </article>
            </div>
        </section>
    )
}

export default About;