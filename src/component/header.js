import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/style.css";
function Header () {
    return (
    <div>
    <nav style={{margin:6}}   className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2">
    <img src="/images/logo3.png"  alt="Dress Store Logo" height="80"  width="140" />

       <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
             <NavLink className="nav-link active" to="/">Home</NavLink> 
          </li>
          <li className="nav-item">
             <NavLink className="nav-link" to="/Shop">Shop</NavLink>
            
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/Blog">Blog</NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">Login</NavLink>
            
          </li>
        </ul>
      </div>
       <div className="d-none d-sm-flex gap-3">
       <span className="material-symbols-outlined">search</span>
      <span className="material-symbols-outlined">shopping_cart</span>
     <span class="material-symbols-outlined">favorite</span>
    </div>
          </nav>
  
        </div>
    );
}
export default Header;