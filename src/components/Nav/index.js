import React from "react";


function Nav(props) {
    const links = ["About", "Portfolio", "Contact"];
    return (
        <nav id="nav">
        <ul>
          {links.map((link) => (
            <li
              className={
                props.currentSection === link ? "is-active" : "links"
              }
              key={link}
            >
              <a
                href={`#${link}`}
                onClick={() => props.handlePageChange(link)}
                className={
                  props.currentSection === link ? "active" : "links"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        </nav>
    );
};

export default Nav;