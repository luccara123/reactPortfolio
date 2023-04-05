import React, { Component } from "react";
import Slider from "react-slick";
import htmlIcon from '../../SkillsIcons/html-icon.png';
import cssIcon from '../../SkillsIcons/css-icon.png';
import jsIcon from '../../SkillsIcons/js-icon.png';
import bootstrapIcon from '../../SkillsIcons/bootstrap-icon.png';
import tailwindIcon from '../../SkillsIcons/tailwind-icon.png';
import reactIcon from '../../SkillsIcons/react-icon.png';
import jqueryIcon from '../../SkillsIcons/jquery-icon.png';
import sassIcon from '../../SkillsIcons/sass-icon.png';
import gitIcon from '../../SkillsIcons/git-icon.png';
import nodeIcon from '../../SkillsIcons/node-icon.png';
import expressIcon from '../../SkillsIcons/express-icon.png';

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
            <h3>Html</h3>
            <img className='skill-icon' src={htmlIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Css</h3>
              <img className='skill-icon' src={cssIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>JavaScript</h3>
              <img className='skill-icon' src={jsIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Bootstrap</h3>
              <img className='skill-icon' src={bootstrapIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Tailwind</h3>
              <img className='skill-icon' src={tailwindIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>React</h3>
              <img className='skill-icon' src={reactIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Jquery</h3>
              <img className='skill-icon' src={jqueryIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Sass</h3>
              <img className='skill-icon' src={sassIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Git</h3>
              <img className='skill-icon' src={gitIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Node</h3>
              <img className='skill-icon' src={nodeIcon} alt="skill-icon" />
            </div>
            <div>
              <h3>Express</h3>
              <img className='skill-icon' src={expressIcon} alt="skill-icon" />
            </div>
          </Slider>
        </div>
      );
    }
  }