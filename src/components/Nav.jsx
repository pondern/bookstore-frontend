import React, { useState } from "react";
import "../"; // Import your CSS file for styling

function NavBar({ thumbnails, setFilteredThumbnails }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const toggleBrowseMenu = () => {
    setIsBrowseOpen(!isBrowseOpen);
  };

  const handleSearch = (e) => {
    let term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const results = thumbnails.filter(
      (thumbnail) =>
        thumbnail.title.toLowerCase().includes(term) ||
        thumbnail.author.toLowerCase().includes(term) ||
        thumbnail.display_name.toLowerCase().includes(term)
    );

    setFilteredThumbnails(results);
  };

  const handleClick = (e) => {
    let term = e.target.innerText.toLowerCase();
    setSearchTerm(term);

    const results = thumbnails.filter(
      (thumbnail) =>
        thumbnail.title.toLowerCase().includes(term) ||
        thumbnail.author.toLowerCase().includes(term) ||
        thumbnail.display_name.toLowerCase().includes(term)
    );

    setFilteredThumbnails(results);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <span className="Name">Bookstore</span>
      </div>
      <div className="middle-section">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
          name="Search"
        />
      </div>
      <div className="right-section">
        <a href="#" className="nav-item">
          Sign in / Sign up
        </a>
        <div className="dropdown">
          <button onClick={toggleBrowseMenu} className="browse-link">
            Browse ▼
          </button>
          {isBrowseOpen && (
            <div className="dropdown-content">
              <p name="non-fiction" onClick={handleClick}>
                Manga
              </p>
              <p name="fiction" onClick={handleClick}>
                Fiction
              </p>
              <p name="children" onClick={handleClick}>
                Children
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
