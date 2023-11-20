import { useState, useEffect } from "react";
import { getBook } from "../services/books.js";
import { addBook } from "../services/libraries.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Book({ user, libraries }) {
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  let { bookId } = useParams();

  useEffect(() => {
    fetchBook();
  }, []);

  async function fetchBook() {
    const oneBook = await getBook(bookId);
    setBook(oneBook);
  }

  async function addToLibrary() {
    await addBook(user.id, bookId);
    // [TBU] Make sure to add some user feedback
    console.log("book added");

    navigate("/library");
  }

  function handleClick() {
    user ? addToLibrary() : navigate("/sign-in");
  }

  let rating = 0;

  function printLibraries() {
    let count = 0;
    let userStars = 0;

    libraries.forEach((library) => {
      library.books.forEach((libBook) => {
        if (libBook.book._id === bookId) {
          userStars += libBook.stars;
          count += 1;
        }
      });
    });

    rating = userStars / count;
    console.log(`rating = ${rating}`);
  }

  printLibraries();

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
      <ReactStars
        count={5}
        size={24}
        isHalf={true}
        edit={false}
        value={rating}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      <div className="book-view-buttons">
        <Link path="">
          <button>Buy</button>
        </Link>
        <button onClick={handleClick}>Add to Library</button>
      </div>
    </div>
  );
}

export default Book;
