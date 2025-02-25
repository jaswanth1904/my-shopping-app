// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li><a href="/kids">Fashion</a></li>
        <li><a href="/home-appliances">Kids</a></li>
        <li><a href="/kitchen-appliances">Home Appliances</a></li>
        <li><a href="/educational-and-learning">Educational and Learning</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
