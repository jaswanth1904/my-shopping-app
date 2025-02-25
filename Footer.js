// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="#about">Who We Are</a></li>
            <li><a href="#team">Join Our Team</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><a href="#order">Track Your Order</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#cancellations">Cancellations</a></li>
            <li><a href="#payments">Payments</a></li>
            <li><a href="#care">Customer Care</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Shop by</h4>
          <ul>
            <li><a href="#all">All</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#kids">Kids</a></li>
            <li><a href="#indie">Indie</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#collections">Collections</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#pinterest">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <p>&copy; 2024 My E-Commerce Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
