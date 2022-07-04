import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import React from "react";

function App() {
  return (
    <div>
        <div>
       <Nav></Nav>
    </div>
    <div>
      <About></About>
    </div>
    </div>
  );
}

export default App;
