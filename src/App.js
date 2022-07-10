import './App.css';
import About from "./components/About";
import Header from "./components/Header";
import React from "react";
import bgImage from "./images/background.jpg"



function App() {
  return (
    <div 
    className="bg_image"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center"
        }}>
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
