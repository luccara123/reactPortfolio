import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Header ></Header>
      <Footer></Footer>
        </div>
  );
};

export default App;
