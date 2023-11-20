import React from 'react';
import "./Works.css";
import w1 from "../Image1/W1.png";
import w2 from "../Image1/w2.png";
import w3 from "../Image1/w3.png";
import w4 from "../Image1/w4.png";
import w5 from "../Image1/w5.png";
import w6 from "../Image1/w6.png";

const Works = () => {
  return (
    <div className='works-container'>
        <h1> My Recent Works</h1>
        <div className='works-list-container'>
            <div className='works-item'>
                <img src={w1} alt="work1"/>
            </div>
            <div className='works-item'>
                <img src={w2} alt="work2"/>
            </div>
            <div className='works-item'>
                <img src={w3} alt="work3"/>
            </div>
            <div className='works-item'>
                <img src={w4} alt="work4"/>
            </div>
            <div className='works-item'>
                <img src={w5} alt="work5"/>
            </div>
            <div className='works-item'>
                <img src={w6} alt="work6"/>
            </div>
        </div>
    </div>
  )
}

export default Works