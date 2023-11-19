import React from "react";
import { Link } from "react-router-dom";

function Book({ book }) {
  return (
    <div>
      <Link to={`/${book._id}`}>
        <img className="book-image" src={book.book_image} />
      </Link>
    </div>
  );
}

export default Book;
