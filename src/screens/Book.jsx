import { useState, useEffect } from "react";
import { getBook } from "../services/books";
import { Link, useParams } from "react-router-dom";

function Book() {
  const [book, setBook] = useState({});

  let { bookId } = useParams();

  useEffect(() => {
    fetchBook();
  }, []);

  async function fetchBook() {
    const oneBook = await getBook(bookId);
    setBook(oneBook);
  }

  return (
    <div>
      <div className="single-book-view">
        <img src={book?.book_image} alt={book?.title} />
        <h1>{book?.title}</h1>
        <p>{book?.author}</p>
        <p>{book?.publisher}</p>
        <p>{book?.date}</p>
        <p>{book?.rank}</p>
        <p>{book?.weeks}</p>
        <p>{book?.description}</p>
      </div>
      <div className="book-view-buttons">
        <Link path="">
          <button>Buy</button>
        </Link>
        <Link path="">
          <button>Add to Library</button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
