import React from 'react';
import "../Styles/style.css";
function Blog(props) {


    return (
    <>
    <div className="row">
   {props.categories.map((category, index)=> (
        <div className="col-12 col-md-4 mb-4" key={index}>
       <div className="card custom-card">
            <img
              src={category.image}
              className="card-img-top"
              alt={category.title}
            />
            
            <div className="banner">
              <h5 className="banner-title">{category.name}</h5>
              <p className="banner-text">{category.title}</p>
            </div>
        
          </div>
        </div>
      ))}
    </div>
    </>
      );
}
export default Blog;