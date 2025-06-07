
import React from 'react';
import "../Styles/style.css";

function Footer ()  {
  return (
    <div>
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row">

         <div className="col-6 col-md-4 mb-3 ">
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Women</a></li>
              <li><a href="/shop" className="footer-link">Men</a></li>
              <li><a href="/about" className="footer-link">Shoes</a></li>
              <li><a href="/contact" className="footer-link">Watches</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <h5>Help</h5>
             <ul className="list-unstyled ">
              <li><a href="/" className="footer-link">Track Order</a></li>
              <li><a href="/shop" className="footer-link">Returns</a></li>
              <li><a href="/about" className="footer-link">Shipping</a></li>
              <li><a href="/contact" className="footer-link">FAQs</a></li>
            </ul>
         </div>      
         
    <a href="https://facebook.com"><span className="material-icons">facebook</span></a>
   
        </div>
        <hr className="border-light" />
        <div className="text-center text-muted small">
          &copy; {new Date().getFullYear()} ShopName. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
