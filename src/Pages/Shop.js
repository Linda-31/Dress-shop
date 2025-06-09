import React from 'react';
import "../Styles/style.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    axios.get("/Data/data.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);
    return(
    <div className="container mt-4">
     <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
            <div className="position-relative hover-container">
              <img src={product.image} className="card-img-top" alt={product.title} />
               <div className="overlay">
             <button className="btn btn-light">Quick View</button>
             </div>
             </div>
              <div className="card-body">
                <h5 className="card-title " style={{ color: 'grey', fontSize: '16px' }}>{product.title}</h5>
                 <p className="card-text" style={{ color: 'grey', fontSize: '16px' }}><strong>${product.price}</strong></p>
                             </div>
            </div>
          </div>
        ))}
      </div>
    </div>


      );
}
export default Shop;