import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import React from "react";
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import Sidebar from "./components/Sidebar";

function App() {
  return (
      <div >
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}
          />
      <Nav></Nav>
      <Home></Home>
      <Routes>
        <Route path='/home' index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer></Footer>
        </div>
  );
};

export default App;
