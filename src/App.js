import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Features from './Pages/Features';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Header from './component/header';
import Contact from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './component/footer';

function App() {
  return (
    <Router>
    <Header /> 
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Shop" element={<Shop />} />
          <Route path="/Features" element={<Features />} />
         <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
       <Footer />
       </Router>
  );
}

export default App;
