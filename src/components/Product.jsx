// src/components/Product.js
import React, { useState } from 'react';
import './product.css';

const Product = ({ title, price, description, image, addToCart, id }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity }); // Pass product id to addToCart function
  };

  const handleAddQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleSubtractQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Ensure quantity doesn't go below 1
  };

  return (
    <div className="card-container">
      <img src={image} alt="Product" />
      <div className="content">
        <div className="title">
          <p>{title}</p>
          <p>Price: {price}</p>
        </div>
        <div className="desc">
          <p>{description}</p>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={handleAddToCart} className="add-btn">Add to Cart</button>
        <div className="btn-quantity">
          <button className="btn-sub" onClick={handleSubtractQuantity}>-</button>
          <p>{quantity}</p>
          <button className="btn-add" onClick={handleAddQuantity}>+</button>

        </div>
      </div>
    </div>
  );
};

export default Product;
