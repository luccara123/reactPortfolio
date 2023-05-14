import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About/index'




function App() {
  
  return (
      <div className='main-wrapper'>
        <main id="main">
        <Home></Home>
      <div className='about-wrapper'>
            <About></About>
      </div>
    
        <div className='projects-wrapper'>
            <Projects></Projects>
            <Contact></Contact>
        </div>
       
      </main>
        </div>
  );
};

export default App;
