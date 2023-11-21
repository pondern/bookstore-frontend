import React, { useState, useEffect } from "react";
import { getLibrary } from "../services/libraries";
import { deleteUser } from "../services/users";
import SavedBook from "../components/SavedBook";
import { useNavigate } from "react-router-dom";

function Library({ user, fetchLibraries }) {
  const [library, setLibrary] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLibrary();
  }, []);

  async function fetchLibrary() {
    try {
      const userLibrary = await getLibrary(user.id);

      setLibrary(userLibrary);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching library:", error);
      setLoading(false);
    }
  }

  async function handleClick() {
    console.log(`user.id = ${user.id}`);
    deleteUser(user.id);
    navigate("/sign-out");
  }

  return (
    <div className="library">
      <h1 className="section-heading">My Library</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="lib-list">
          {library.books?.map((savedBook) => (
            <SavedBook
              key={savedBook._id}
              savedBook={savedBook}
              libId={library._id}
              fetchLibrary={fetchLibrary}
              fetchLibraries={fetchLibraries}
            />
          ))}
        </div>
      )}
      <button className="delete-account-btn" onClick={handleClick}>
        Delete My Account
      </button>
    </div>
  );
}

export default Library;
