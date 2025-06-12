import React from 'react';
import "../Styles/style.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';

function Shop() {
    const [products, setProducts] = useState([]);
     const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);

    useEffect(() => {
    axios.get("/Data/data.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);
    const handleClick = () => {
    alert('product is added to the wishlist!');
    console.log("Product is added to the wishlist");
  };
 const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleView = (p) => {
    dispatch(selectProduct(p));
    navigate(`/p/${p.id}`);
  };

    return(
<>
  <div className="container mt-4" style={{ marginBottom: '80px' }}>
  <div className="d-flex gap-2 flex-wrap">
    <a className= "shop-text" href="#electronics" >All Products</a>
    <a className= "shop-text" href="#clothing" >Women</a>
    <a className= "shop-text" href="#home-kitchen" >Men</a>
    <a className= "shop-text" href="#books" >Bag</a>
    <a className= "shop-text" href="#sports" >Shoes</a>
    <a className= "shop-text" href="#sports" >Watches</a>
    <button  className= "search" type="button" onClick={toggleSearch} ><span className="material-symbols-outlined custom-icon">search</span> Search  </button>
      {showSearch && (
        
        <input type="text" className="form-control mt-3"placeholder="Search..."/>
      )}
    </div>
  </div>

      
    <div className="container mt-4">
     <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
            <div className="position-relative hover-container">
              <img src={product.image} className="card-img-top" alt={product.title} />
             <div className="overlay">
             <button className="btn btn-light"onClick={() => handleView(product)}>Quick View</button>
             </div>
             </div>
            <div className="card-body">
             <h5 className="card-title " style={{ color: 'grey', fontSize: '16px' }}>{product.title}</h5>
            <span class="material-symbols-outlined favorite-icon" onClick={handleClick}>favorite</span>
              <p className="card-text" style={{ color: 'grey', fontSize: '16px' }}><strong>${product.price}</strong></p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>

</>
      );
}
export default Shop;