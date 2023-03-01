import { React } from 'react';
import { Link } from "react-router-dom"


const SideBarLinks = ({ closeSideBar }) => {
    return (
        <div className="header-subcontainer hide">
        <nav className="burger-nav" >

               <Link to="/reactPortfolio" className="menu-item"  onClick={closeSideBar}>Home</Link>
              <Link to="/projects" className="menu-item" onClick={closeSideBar}>Projects</Link>
              <Link to="/contact" className="menu-item" onClick={closeSideBar}>Contact</Link>  
           
        </nav>
      </div>
)};

export default SideBarLinks;
