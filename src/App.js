import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import React from "react";
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
      <div >
      <Nav></Nav>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer></Footer>
        </div>
  );
};

export default App;
