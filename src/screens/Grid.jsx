import { useState, useEffect } from "react";
import { getBooks } from "../services/books";
import Thumbnail from "../components/Thumbnail";

function Grid() {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    fetchThumbnails();
  }, []);

  async function fetchThumbnails() {
    const allThumbnails = await getBooks();
    setThumbnails(allThumbnails);
  }

  return (
    <div>
      <h1>All the books!</h1>
      <div className="grid">
        {thumbnails.map((book) => (
          <Thumbnail book={book} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
