import React from "react";
import { NavLink } from 'react-router-dom';

  
const Nav = () => {
  const data = [{
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'Projects',
    url: '/projects',
  },
  {
    id: 3,
    name: 'Contact',
    url: '/contact',
  },
  ];
  return (
    <nav className='nav' id="nav">
      <div className='title_container'>
        <h1>
                <NavLink to="/">
                  Lucca Araujo
                </NavLink></h1>
      </div>
      <ul className='navBar'>
        {
            data.map(({ id, name, url }) => (

              <li key={id} className='navlinks hidden'>
                <NavLink to={url}>
                  { name }
                </NavLink>
              </li>

            ))
        }
      </ul>
    </nav>
  );
};



export default Nav;