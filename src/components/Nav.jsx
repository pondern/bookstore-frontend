// NavBar.js

import React from 'react';
import '../'; // Import your CSS file

function NavBar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <span className="nav-item">Bookstore</span>
      </div>
      <div className="middle-section">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="right-section">
        <a href="#" className="nav-item top-right">My Account</a>
        <a href="#" className="nav-item bottom-right">Browse</a>
      </div>
    </nav>
  );
}

export default NavBar;
