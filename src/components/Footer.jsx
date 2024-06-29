import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <p>Author: Ayanle Aideed: &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
