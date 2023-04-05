import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />

const githubIcon = <FontAwesomeIcon icon={faGithub} />
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />

const SideIcons = () => {
   
    return(
        <nav className="nav-2">
        <ul>
          <li className="icon"> <a href="https://www.linkedin.com/in/lucca-araujo-aa1055245/" target="blank">{linkedinIcon}</a></li>
          <li className="icon"><a href="https://github.com/luccara123" target="blank">{githubIcon}</a></li>
          <li className="icon"><a href="#" target="blank">{instagramIcon}</a></li>
        </ul>
      </nav>
    )
}

export default SideIcons