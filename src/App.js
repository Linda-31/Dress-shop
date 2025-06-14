import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Header from './component/header';
import Contact from './Pages/Contact';
import Footer from './component/footer';
import ProductDetail from './Pages/ProductDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
    <Header /> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/Blog" element={<Blog />} />
          <Route path="/p/:id" element={<ProductDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
       <Footer />
       </Router>
  );
}

export default App;
