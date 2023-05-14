import { React } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const SideBarLinks = ({ closeSideBar }) => {
    return (
        <div className="header-subcontainer">
        <nav className="burger-nav" >
              <Link activeClass="active" smooth spy to="home" className="menu-item" onClick={closeSideBar}>
                    Home
              </Link>
              <Link activeClass="active" smooth spy to="about" className="menu-item" onClick={closeSideBar}>
                    About
              </Link>   <Link activeClass="active" smooth spy to="portfolio" className="menu-item" onClick={closeSideBar}>
                    Projects
              </Link>   <Link activeClass="active" smooth spy to="contact" className="menu-item" onClick={closeSideBar}>
                    Contact
              </Link>  
        </nav>
      </div>
)};

export default SideBarLinks;
