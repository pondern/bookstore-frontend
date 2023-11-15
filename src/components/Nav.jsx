import React, { useState } from 'react';
import '../'; // Import your CSS file for styling

function NavBar() {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const toggleBrowseMenu = () => {
    setIsBrowseOpen(!isBrowseOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <span className="Name">Bookstore</span>
      </div>
      <div className="middle-section">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="right-section">
        <a href="#" className="nav-item">Sign in / Sign up</a>
        <div className="dropdown">
          <button onClick={toggleBrowseMenu} className="nav-item browse-link">Browse ▼</button>
          {isBrowseOpen && (
            <div className="dropdown-content">
              <a href="#">Non-Fiction</a>
              <a href="#">Fiction</a>
              <a href='#'>Children's</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
