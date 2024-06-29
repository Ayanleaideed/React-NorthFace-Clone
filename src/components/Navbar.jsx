import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ cartCount, cartItems, setCartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };



  const handleClearBtn = () => {
    setCartItems([]);
    const cartDropdown = document.querySelector('.cart-dropdown');
    if (cartDropdown) {
      cartDropdown.style.display = 'none';
    }
  };
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        } else {
          const cartDropdown = document.querySelector('.cart-dropdown');
          if (cartDropdown) {
            cartDropdown.style.display = 'none';
    }
          return null;
        }
      }
      return item;
    }).filter(Boolean);
    setCartItems(updatedCartItems);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div><img src="/public/image.png" alt="Logo" /></div>
        <div>Not North Face</div>
      </div>
      <div className="navbar-categories">
        <a href="/mens">Men's</a>
        <a href="/womens">Women's</a>
        <a href="/kids">Kids'</a>
        <a href="/footwear">Footwear</a>
        <a href="/bags-and-gear">Bags & Gear</a>
        <a href="/renewed">Renewed</a>
        <a href="/about-us">About Us</a>
        <a href="/sale">Sale</a>
      </div>
      <div className="mid">
        <div>
          <a href="/product">Product</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/order">Order</a>
        </div>
        <div>
          <a href="/favorites">Favorites</a>
        </div>
      </div>
      <div className="cart" onClick={toggleCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="cart-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13L4 16m3-3h10m-7 6h4m-4 0a2 2 0 100 4 2 2 0 100-4zm6 0a2 2 0 100 4 2 2 0 100-4z"
          />
        </svg>
        <span className="cart-count">{cartCount}</span>
      </div>
      {isCartOpen && (
        <div className="cart-dropdown">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className="main-in">
                    <strong>{item.title}</strong> - Quantity: {item.quantity}
                    <div>
                      <button className='btn-removeItem' onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>

              ))}
            </ul>
          )}
          <div className='action-btns'>
            <button  onClick={handleClearBtn} >Clear Cart</button>
            <button className='check-out'>check out</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;