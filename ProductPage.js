// src/components/ProductPage.js
import React from 'react';
import './ProductPage.css';

function ProductPage() {
  return (
    <main className="product-page">
      <div className="product-image">
        <img src="https://via.placeholder.com/500" alt="Product" />
      </div>
      <div className="product-details">
        <h2>Product Name</h2>
        <p className="price">$49.99</p>
        <p className="description">This is a detailed description of the product, highlighting its features, specifications, and benefits.</p>
        <button className="add-to-cart">Add to Cart</button>
        <button className="add-to-wishlist">Add to Wishlist</button>
      </div>
    </main>
  );
}

export default ProductPage;
