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
      <NavLink className="link" to="/library">
        My Library
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
        <NavLink to="/">
          <span className="Name">Bookstore</span>
        </NavLink>
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
              <p name="fiction" onClick={handleClick}>
                Fiction
              </p>
              <p name="nonfiction" onClick={handleClick}>
                Nonfiction
              </p>
              <p name="young-adult" onClick={handleClick}>
                Young Adult
              </p>
              <p name="manga" onClick={handleClick}>
                Graphic Books and Manga
              </p>
              <p name="children" onClick={handleClick}>
                Children
              </p>
              <p name="business" onClick={handleClick}>
                Business
              </p>
              <p name="mass-market" onClick={handleClick}>
                Mass Market
              </p>
              <p name="miscellaneous" onClick={handleClick}>
                Advice, How-To & Miscellaneous
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
