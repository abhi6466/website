import React from 'react';
import profileImg from "../Image1/header.png" ;
import "./Header.css"

export const Header = () => {
  return (
    <div className='header-container'>
    {/* Header Content*/}
    <div className='header-content'>
    <h1> Hy! AM</h1>
    <h2 className='fullname'> Abhishek Jha </h2>
    <h2> I'm a{""}</h2>
    <p> Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea 
        commodo consequat. </p>
        {/* Payment Links*/}
        <div className='header-payment-container'> 
        <button> Hire me</button>
        <i class='fa-brands fa-paypal'></i>
        <i class='fa-brands fa-cc-visa'></i>
        <i class='fa-brands fa-cc-mastercard'></i>
        <i class='fa-brands fa-cc-amex'></i>
        </div>
    </div>
    {/* Image container*/}
    <div className='profile-img-container'>
      <img src={profileImg} alt="" />
      <div className='circle-1'></div>
      <div className='circle-2'></div>
    </div>
    </div>
    );
};

export default Header;