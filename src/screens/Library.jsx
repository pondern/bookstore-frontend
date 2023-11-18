import { useState, useEffect } from "react";
import { getLibrary } from "../services/libraries";
import SavedBook from "../components/SavedBook";

function Library({ user }) {
  const [library, setLibrary] = useState({});

  useEffect(() => {
    fetchLibrary();
  }, []);

  async function fetchLibrary() {
    const userLibrary = await getLibrary(user.id);
    setLibrary(userLibrary);
  }

  console.log(library._id);

  return (
    <div>
      <h1>My Library</h1>
      <div className="lib-list">
        {library.books?.map((savedBook) => (
          <SavedBook savedBook={savedBook} libId={library._id} />
        ))}
      </div>
    </div>
  );
}

export default Library;
