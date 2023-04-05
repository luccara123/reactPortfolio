import React, { useState } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
  
const Nav = () => {

  // change navbar color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
      if(window.scrollY >= 90){
        setColor(true)
      } else{
        setColor(false)
      }
  }

  window.addEventListener('scroll', changeColor)

  const data = [{
    id: 1,
    name: 'Home',
    section: 'home',
  },
  {
    id: 2,
    name: 'About',
    section: 'about',
  },
  {
    id: 3,
    name: 'Projects',
    section: 'portfolio',
  },
  {
    id: 4,
    name: 'Contact',
    section: 'contact',
  },
  ];
  return (
    <div  className={ color ? 'nav-wrapper nav-bg' : "nav-wrapper"}>
        <nav className='nav' id="nav">
          <div className='title_container'>
            <h1>
              <Link  smooth spy to="home">
                  Lucca Araujo
              </Link>
            </h1>
          </div>
          <ul className='navBar'>
            {
                data.map(({ id, name, section }) => (
                  <li key={id} className='navlinks hidden'>
                    <Link activeClass="active" smooth spy to={section}>
                    {name}
                    </Link>  
                  </li>
                
                ))
            }
          </ul>
        </nav>
    </div>
  );
};



export default Nav;