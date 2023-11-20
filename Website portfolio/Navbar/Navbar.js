import React from 'react';
import logo from "../Image1/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
    <div>
        <img src= {logo} alt='logo'/>
    </div>
    <div>
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="/"> About </a>
        </li>
        <li>
          <a href="/"> Services </a>
        </li>
        <li>
          <a href="/"> portfolio </a>
        </li>
      </ul>
    </div>
    </nav>
  )
}
export default Navbar