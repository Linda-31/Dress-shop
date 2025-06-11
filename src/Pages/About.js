import React from 'react';
import "../Styles/style.css";
function About() {
    return(
    <div>
       < img src="../images/bg-01.jpg" alt="About Us" className="img-fluid"/>
       <div className="container my-5 about-container">
       <div className="row align-items-center">
       
        <div className="col-md-6">
          <h2 className="mb-3">Our Story</h2>
          <p className='about-text'>
           At dress shop website , we believe that every dress tells a story. Our curated collection combines timeless elegance with modern trends to help you express your unique style. Whether you're looking for casual wear, evening gowns, or work-appropriate outfits, our mission is to provide high-quality, comfortable dresses that make you feel confident and beautiful every day. Crafted with care and designed with passion, our dresses are made to celebrate you.
          </p>
          <p className='about-text'>
            We are dedicated to offering a diverse range of dresses that cater to every occasion and personal style. From chic casual dresses to stunning evening wear, each piece is thoughtfully designed with attention to detail and crafted from premium fabrics. Our goal is to make you feel effortlessly stylish and empowered, no matter where your day takes you.
          </p>
          <p className='about-text'>
            Founded in 2010, we have grown steadily, expanding our product range and 
            customer base. Our goal is to make shopping a delightful and easy experience.
          </p>
        
        </div>
               <div className="col-md-6 mb-4 mb-md-0">
          <img src="../images/about-01.jpg" alt="About Us"width="400px"  height= "300px" className="img-fluid rounded about-image"
          />
        </div>

            <div className="col-md-6 mb-4 mb-md-0">
          <img src="../images/about-02.jpg" alt="About Us"width="400px"  height= "300px" className="img-fluid rounded about-image"
          />
        </div>
         <div className="col-md-6">
          <h2 className="mb-3">Our Mission</h2>
          <p className='about-text'>
           Our mission  is to empower individuals to express their true selves through beautiful, high-quality dresses. We strive to blend style, comfort, and affordability, ensuring everyone can find the perfect outfit for every moment. With a commitment to sustainability and ethical practices, we aim to make fashion that not only looks good but feels good too.

          </p>
         
          <p className='about-text'>
            <i>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</i>
          </p>
         
        
        </div>
      </div>
    </div>
</div>
    );
}
export default About;