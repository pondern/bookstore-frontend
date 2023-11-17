import { useState, useEffect } from "react";
import SavedBook from "../components/SavedBook";
import { getLibrary } from "../services/libraries";

function Library({ library }) {
  // const [library, setLibrary] = useState([]);

  // useEffect(() => {
  //   fetchLibrary();
  // }, []);

  return (
    <div>
      <h1>My Library</h1>
      {/* <p>{userLibrary}</p> */}
      {/* <div className="lib-list">
        {savedBooks.map((savedBook) => (
          <SavedBook savedBook={savedBook} />
        ))}
      </div> */}
      {library?.books?.map((bookReview) => (
        <div>
          <img src={bookReview.book.book_image} alt={bookReview.book.title} />
          <p>Stars: {bookReview.stars}</p>
          <p>Comment: {bookReview.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Library;
