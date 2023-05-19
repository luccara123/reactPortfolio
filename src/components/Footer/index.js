import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const githubIcon = <FontAwesomeIcon icon={faGithub} />
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />

function Footer(){

    const current = new Date();
    const date = `${current.getFullYear()}`;

    return(
        <footer id="footer">
            <div className="footer-item">
                <ul>
            <li className="icon"> <a href="https://www.linkedin.com/in/lucca-araujo-aa1055245/" target="blank">{linkedinIcon}</a></li>
            <li className="icon"><a href="https://github.com/luccara123" target="blank">{githubIcon}</a></li>
            <li className="icon"><a href="https://instagram.com/luccawebdev?igshid=OGQ5ZDc2ODk2ZA==" target="blank">{instagramIcon}</a></li>
            </ul>
            </div>
           
        <div className="footer-item">
        <li><a className="email2" href="mailto:lucca.ara7@gmail.com">lucca.ara7@gmail.com</a></li>
        </div>
        <div className="footer-item">&copy; All rights reserved {date} </div>
        </footer>
        
    )
}

export default Footer;