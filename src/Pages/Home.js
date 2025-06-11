import React from 'react';
import "../Styles/style.css";
import Shop from '../Pages/Shop';
import Blog from '../component/blog';
import Slide from '../component/slide'; 

const categories = [
  {
    name: "Women",
    image: "../images/banner-01.jpg",
    title: "Spring 2025",
  },
  {
    name:"Men",
    image: "../images/banner-02.jpg",
    title: "Spring 2025",
     },
  {
    name:"Accessories",
    image: "../images/banner-03.jpg",
    title: "New trend",
  },

];
function Home () {
    return (
        <div>
         <Slide />
         <Blog categories={categories}/>
         <h2 className="home-title">PRODUCT OVERVIEW</h2>
         <Shop />     
        </div>
    );
}
export default Home;