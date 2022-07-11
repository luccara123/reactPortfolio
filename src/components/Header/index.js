import React, { useState } from 'react';
import Nav from "../Nav";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";

function Header() {
    const [currentSection,
         handlePageChange] = useState("About");
    const renderSections = () => {
      switch (currentSection) {
        case "About":
          return <About />;
        case "Contact":
          return <Contact />;
          case "Portfolio":
            return <Portfolio />;
        default:
          return <About />;
      }
    };
    return (
        <div>
        <header>
        <h1> Lucca Araujo</h1>
        <Nav
          currentPage={currentSection}
          handlePageChange={handlePageChange}
        />
        </header>
        <main>
          <div>{renderSections(currentSection)}</div>
        </main>
      </div>
    );
};

export default Header;