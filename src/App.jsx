import React, { useState, useEffect } from 'react';
import productData from './data/product.json';
import Product from './components/Product';
import Navbar from './components/Navbar';
// import './App.css';
import Footer from './components/Footer.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const addToCart = (productToAdd) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === productToAdd.id);

    if (existingProductIndex !== -1) {
      // Product already exists in cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += productToAdd.quantity;
      setCartItems(updatedCartItems);
    } else {
      // Product does not exist in cart, add it
      setCartItems([...cartItems, productToAdd]);
    }
  };

  // Calculate total items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar cartCount={cartItemCount} cartItems={cartItems} setCartItems={setCartItems} />
      <h1>Product Showcase</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            addToCart={addToCart}
          />
        ))};
      </div>
          <Footer/>
    </div>
  );
}

export default App;
