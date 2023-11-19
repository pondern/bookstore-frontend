import { useState, useEffect } from "react";
import { getLibrary } from "../services/libraries";
import SavedBook from "../components/SavedBook";
import { signOut } from "../services/users";
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

  console.log(library._id);

  async function handleClick() {
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
