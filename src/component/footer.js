
import React from 'react';
import "../Styles/style.css";
import { FaFacebook, FaInstagram,FaPinterest } from 'react-icons/fa';
function Footer ()  {
  return (
    <div>
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row">

         <div className="col-6 col-md-3 mb-4 ">
            <h6 className="footer-heading">CATEGORIES</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Women</a></li>
              <li><a href="/shop" className="footer-link">Men</a></li>
              <li><a href="/about" className="footer-link">Shoes</a></li>
              <li><a href="/contact" className="footer-link">Watches</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <h6 className="footer-heading">HELP</h6>
             <ul className="list-unstyled ">
              <li><a href="/" className="footer-link">Track Order</a></li>
              <li><a href="/shop" className="footer-link">Returns</a></li>
              <li><a href="/about" className="footer-link">Shipping</a></li>
              <li><a href="/contact" className="footer-link">FAQs</a></li>
            </ul>
         </div>      
         <div className="col-12 col-md-3 mb-4">
            <h6 className="footer-heading">GET IN TOUCH</h6>
             <p className="footer-text">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"  style={{ marginRight: '20px' }}><FaFacebook size={18} color="rgb(184, 177, 177)" /></a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"  style={{ marginRight: '20px' }}><FaInstagram size={18} color="rgb(184, 177, 177)" /></a>
             <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"  style={{ marginRight: '20px' }}><FaPinterest size={18} color="rgb(184, 177, 177)" /> </a>
         </div>
       <div className="col-12 col-md-3 mb-4">
           <div className="container ">
           <h6 className="footer-heading">NEWSLETTER</h6>
          <input className="input" type="email"placeholder="email@example.com"required/>
          <button type="submit" className="btn btn-primary">Subscribe </button>
          </div>
          
        </div> 
      </div>
       </div>
       <div className='footer-box'>
      < p className="footer-text text-center"> Copyright ©2025 All rights reserved.Made by  <span style={{ color: 'blue' }}> Colorlib </span> Colorlib & distributed by  <span style={{ color: 'blue' }}> ThemeWagon </span></p>
      </div> 
    </footer>
    </div>
  );
};

export default Footer;
