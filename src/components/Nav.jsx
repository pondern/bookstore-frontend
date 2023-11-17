import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, thumbnails, setFilteredThumbnails }) {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const toggleBrowseMenu = () => {
    setIsBrowseOpen(!isBrowseOpen);
  };

  const handleSearch = (e) => {
    let term = e.target.value.toLowerCase();
    if (term === "fiction") term = " fiction";
    setSearchTerm(term);

    const results = thumbnails.filter(
      (thumbnail) =>
        thumbnail.title.toLowerCase().includes(term) ||
        thumbnail.author.toLowerCase().includes(term) ||
        thumbnail.display_name.toLowerCase().includes(term)
    );

    setFilteredThumbnails(results);

    navigate("/grid");
  };

  const handleClick = (e) => {
    let term = e.target.innerText.toLowerCase();
    if (term === "fiction") term = " fiction";
    setSearchTerm(term);

    const results = thumbnails.filter((thumbnail) =>
      thumbnail.display_name.toLowerCase().includes(term)
    );

    setFilteredThumbnails(results);

    navigate("/grid");
  };

  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/add-book">
        Add Book
      </NavLink>
      <NavLink className="link" to="/sign-out">
        Sign Out
      </NavLink>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-up">
        Sign Up
      </NavLink>
      <NavLink className="link" to="/sign-in">
        Sign In
      </NavLink>
    </>
  );

  const alwaysOptions = (
    <>
      <NavLink className="link" to="/grid">
        Books
      </NavLink>
    </>
  );

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
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
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
