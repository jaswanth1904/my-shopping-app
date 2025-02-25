import React, { useState } from 'react';
import { IoHome } from 'react-icons/io5';
import { MdBookmarkBorder, MdAccountCircle } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { CgDarkMode } from 'react-icons/cg';
import { FaSearchengin } from 'react-icons/fa6';
import { FaShoppingBag } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Router>
      <header className="header">
        <div className="navbar-logo-container">
          <div className="navbar-logo" onClick={() => window.location.reload()}>
            HappiShop
          </div>
          <div className="navbar-tagline">
            Shopping, Simplified. With HappiShop
          </div>
        </div>
        <nav className="navbar-nav">
          <Link to="/">
            <IoHome className="nav-icon" /> Home
          </Link>
          <Link to="/orders">
            <MdBookmarkBorder className="nav-icon" /> My Orders
          </Link>
          <Link to="/account">
            <MdAccountCircle className="nav-icon" /> Account
          </Link>
          <Link to="/about">
            <FcAbout className="nav-icon" /> About
          </Link>
          <Link to="/wishlist">
            <GiSelfLove className="nav-icon" /> Wishlist
          </Link>
          <Link to="/cart">
            <FaShoppingBag className="nav-icon" /> Cart
          </Link>
          <div className="search-container">
            <FaSearchengin className="nav-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <CgDarkMode className="nav-icon" /> Dark Mode
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

// Placeholder components for each route
function Home() {
  return <div>Home Page</div>;
}

function MyOrders() {
  return <div>My Orders Page</div>;
}

function Account() {
  return <div>Account Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function Wishlist() {
  return <div>Wishlist Page</div>;
}

function Cart() {
  return <div>Cart Page</div>;
}

export default Header;