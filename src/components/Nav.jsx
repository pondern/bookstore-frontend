import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, thumbnails, setFilteredThumbnails, setGridHeading }) {
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
    term.length > 0
      ? setGridHeading(`Search Results for "${term}"`)
      : setGridHeading("All the books!");

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
    let heading = e.target.innerText;
    let term = heading.toLowerCase();
    if (term === "fiction") term = " fiction";
    if (term === "show all books") {
      term = "";
      heading = "All the books!";
    }

    setGridHeading(heading);

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
          <span className="Name">BestBooks</span>
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
            <ul className="dropdown-content">
              <li name="all" onClick={handleClick}>
                Show All Books
              </li>
              <li name="fiction" onClick={handleClick}>
                Fiction
              </li>
              <li name="nonfiction" onClick={handleClick}>
                Nonfiction
              </li>
              <li name="young-adult" onClick={handleClick}>
                Young Adult
              </li>
              <li name="manga" onClick={handleClick}>
                Graphic Books and Manga
              </li>
              <li name="children" onClick={handleClick}>
                Children
              </li>
              <li name="business" onClick={handleClick}>
                Business
              </li>
              <li name="mass-market" onClick={handleClick}>
                Mass Market
              </li>
              <li name="miscellaneous" onClick={handleClick}>
                Advice, How-To & Miscellaneous
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
