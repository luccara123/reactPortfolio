 {/*

import React from "react";
import Image from './imgs/Page-0.jpeg'
import './book.css';
import {useRef, useEffect} from 'react';


function Book () {
   const ref = useRef(null);
    const paper1 = useRef('');
    const long = useRef(null);


    useEffect(() => {
         paper1.current = document.getElementById('p1');
        const paper2 = document.getElementById('p2');
        const paper3 = document.getElementById('p3');
        const paper4 = document.getElementById('p4');
        const paper5 = document.getElementById('p5');
        const paper6 = document.getElementById('p6');
        const paper7 = document.getElementById('p7');
        const paper8 = document.getElementById('p8');
        const paper9 = document.getElementById('p9');
        const paper10 = document.getElementById('p10');
        const paper11 = document.getElementById('p11');
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");


let currentLocation = 1;
let numOfPapers = 11;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                break
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                break
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                break
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 11;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 10;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 9;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 8;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 7;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 6;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 5;
                break;
            case 9:
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 4;
                break;
            case 10:
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 3;
                break;
            case 11:
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 2;
                break;
            case 12:
                openBook();
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
    return goPrevPage, goNextPage;
};
    },[]);
  console.log(paper1.current);
   
    return(
        <div>
        <button id="prev-btn" onClick={goPrevPage} >
            <i className="fas fa-arrow-circle-left"></i>
        </button>
        <section id="book-container">
            <div id="book" className="book">
            
                <div id="p1"  className="paper">
                    <div className="front">
                        <div id="f1" className="front-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b1" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
                
                <div id="p2"  className="paper">
                    <div className="front">
                        <div id="f2" className="front-content">
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b2" className="back-content">
                        
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p3"  className="paper">
                    <div className="front">
                        <div id="f3" className="front-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b3" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p4"  className="paper">
                    <div className="front">
                        <div id="f4" className="front-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b4" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p5"  className="paper">
                    <div className="front">
                        <div id="f5" className="front-content">
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b5" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p6"  className="paper">
                    <div className="front">
                        <div id="f6" className="front-content">
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b6" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p7"  className="paper">
                    <div className="front">
                        <div id="f7" className="front-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b7" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p8"  className="paper">
                    <div className="front">
                        <div id="f8" className="front-content">
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b8" className="back-content">
                            className
                            <img src={Image}/>
                        </div>
                    </div>
                </div>
                
                <div id="p9"  className="paper">
                    <div className="front">
                        <div id="f9" className="front-content">
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b9" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p10"  className="paper">
                    <div className="front">
                        <div id="f10" className="front-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b10" className="back-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            
                <div id="p11"  className="paper">
                    <div className="front">
                        <div id="f11" className="front-content">
                            
                        <img src={Image}/>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b11" className="back-content">
                        <img src={Image}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <button id="next-btn" onClick={goNextPage}>
            <i className="fas fa-arrow-circle-right"></i>
        </button>
        </div>
    );
};

export default Book;

*/}
