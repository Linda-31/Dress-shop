import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const product = useSelector((state) => state.product.selectedProduct);

  if (!product) return <p>No product selected. Please go back.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetail;
