import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const product = useSelector((state) => state.product.selectedProduct);

  if (!product) return <p>No product selected. Please go back.</p>;

   const handleClick = () => {
    alert('product is added to the Cart!');
    console.log("Product is added to the cart");
  };

  return (
     <div className="container my-5">
      <div className="row">

         <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid rounded" style={{ width: 'auto', height: '500px' }} 
           />
        </div>
           <div className="col-md-6">
          <h3>{product.title}</h3>
          <h5 className="text-dark  fw-bold ">${product.price}</h5>
          <p className='about-text' >{product.description}</p>

            <div className="mb-3 ">
            <label htmlFor="sizeSelect" className="form-label">Size</label>
            <select className="form-select" id="sizeSelect">
              <option value="">Choose size</option>
              <option value="XS">Size XS</option>
              <option value="S">Size S</option>
              <option value="M">Size M</option>
              <option value="L">Size L</option>
              <option value="XL">Size XL</option>
            </select>
          </div>

          <div className="mb-3">
           <label htmlFor="colorSelect" className="form-label">Color</label>
           <select className="form-select" id="colorSelect" >
              <option value="">Choose color</option>
              <option value="White">Crisp White</option>
              <option value="Blue">Sky Blue</option>
              <option value="Blush">Soft Blush</option>
            </select>
          </div>

      <div className="text-center mt-5">
        <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-light">  −</button>
        <h6> 0 </h6>
        <button className="btn btn-light"> + </button>
      </div>
    </div>
    
          <button className="btn cart-button" onClick={handleClick} >ADD TO CART </button>
        </div>
      </div>
    </div>
     );
};

export default ProductDetail;
