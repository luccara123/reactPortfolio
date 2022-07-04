import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Header from "./components/Header";
import React from "react";

function App() {
  return (
    <div>
        <div>
       <Header></Header>
    </div>
    <div>
      <About></About>
    </div>
    </div>
  );
}

export default App;
