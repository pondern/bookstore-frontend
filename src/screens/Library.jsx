import { useState, useEffect } from "react";
import { getLibrary, deleteLibrary } from "../services/libraries";
import { deleteUser } from "../services/users";
import SavedBook from "../components/SavedBook";
import { useNavigate } from "react-router-dom";

function Library({ user }) {
  const [library, setLibrary] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchLibrary();
  }, []);

  async function fetchLibrary() {
    const userLibrary = await getLibrary(user.id);
    setLibrary(userLibrary);
  }

  async function handleClick() {
    deleteUser(user.id);
    deleteLibrary(library._id);
    navigate("/sign-out");
  }

  return (
    <div>
      <h1>My Library</h1>
      <div className="lib-list">
        {library.books?.map((savedBook) => (
          <SavedBook savedBook={savedBook} libId={library._id} />
        ))}
      </div>
      <button onClick={handleClick}>Delete My Account</button>
    </div>
  );
}

export default Library;
