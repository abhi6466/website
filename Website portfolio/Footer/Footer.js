import React from 'react'
import logo from "../Image1/footer.png";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'>
        </link>
        <div className='footer-logo'>
            <img src={logo} alt='logo'/>
        </div>
        {/* Copyright */}
        <div className='footer-copyright'>
        <p> @AST. All Right reserved </p>
        </div>
        {/* Social Websites */}
        <ul className='footer-social-media'>
           <li>
           <a href='https://www.facebook.com/abhijha695/' >
           <i class="fa-brands fa-facebook"> </i>
           </a>
        </li>
        <li>
           <a href='https://www.facebook.com/abhijha695/' >
           <i class="fa-brands fa-twitter"> </i>
           </a>
        </li> 
        <li>
           <a href='https://www.facebook.com/abhijha695/' >
           <i class="fa-brands fa-youtube"> </i>
           </a>
        </li> 
        <li>
           <a href='https://www.facebook.com/abhijha695/' >
           <i class="fa-brands fa-instagram"> </i>
           </a>
        </li>  
        </ul>
        </footer>
  );
};

export default Footer