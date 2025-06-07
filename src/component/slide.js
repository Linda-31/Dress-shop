import React from "react";
function Slide () {
    return (
        
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/images/slide-01.jpg" class="d-block w-100" alt="slide1"/>
      <div class="carousel-caption  d-block text-start">
        <h5 class="content">Women Collection 2025</h5>
        <p class="text" >NEW SEASON</p>
        <a  href="/Shop" class="btn btn-primary ">SHOP NOW</a>
      </div>
         </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/images/slide-02.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-block text-start">
        <h5 class="content">Men New-Season </h5>
        <p class="text">JACKETS & COATS</p>
        <a href="/Shop" class="btn btn-primary">SHOP NOW</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/slide-03.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block text-start">
        <h5 class="content">Men Collections 2025</h5>
        <p class="text"> NEW ARRIVALS</p>
        <a href="/Shop" class="btn btn-primary">SHOP NOW</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
    )
}
export default Slide;