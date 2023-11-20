import React from 'react'
import "./Services.css";

export const Services = () => {
  return (
    <div className='services-container'>
        <div className='services-list-container'>
{/* desc */}
<div className='services-desc-container'>
    <h1> My Awesome <span> Services</span></h1>
    <p> Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea 
        commodo consequat. 
        </p>
        <button> Hire me </button>
        </div>
        {/* Item */}
        <div className='services-item-container'>
            <div className='services-item'>
            <i class= "fa-solid fa-desktop"></i>
            <div className= "item-desc"></div>
            <h3> Web development</h3>
            <p> Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea 
        commodo consequat. 
        </p>
            </div>
            <div className='services-item'>
                <i class= "fa-solid fa-desktop"></i>
                <h3> Desktop Development </h3>
                <p> Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea 
        commodo consequat.</p>
            </div>
            <div className='services-item'>
            <i class= "fa-solid fa-tablet-alt"></i>
            <h3> U/X Design </h3>
            <p> Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea 
        commodo consequat.</p>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Services;