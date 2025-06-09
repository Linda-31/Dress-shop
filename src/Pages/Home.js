import React from 'react';
import "../Styles/style.css";
import Slide from '../component/slide'; 
import Footer from '../component/footer';
function Home () {
    return (
        <div>
         <Slide />
         <h2 className="mb-4">PRODUCT OVERVIEW</h2>
         <Footer />
        
        </div>
    );
}
export default Home;