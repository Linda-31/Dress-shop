import React from 'react';
import "../Styles/style.css";
import { useNavigate } from 'react-router-dom';
function Blog(props) {

 const navigate = useNavigate();
 const handleClick = () => {
   navigate('/shop');
   ;
  };
    return (
    <>
    <div className="row">
   {props.categories.map((category, index)=> (
        <div className="col-12 col-md-3 mb-4" key={index}>
       <div className="card custom-card">
        <div className="image-container"  onClick={handleClick}>
            <img
              src={category.image}
              className="card-img-top"
              alt={category.title}  />
            <div className="blue-overlay"></div>
            </div>
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