import { useState, useEffect } from "react";
import { getBook } from "../services/books.js";
import { addBook } from "../services/libraries.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Book({ user, libraries }) {
  const [book, setBook] = useState({});
  const [modal, setModal] = useState(false);
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
  const reviews = [];

  function userFeedback() {
    let count = 0;
    let userStars = 0;

    libraries.forEach((library) => {
      library.books.forEach((libBook) => {
        if (libBook.book._id === bookId) {
          reviews.push(libBook.comment);
          userStars += libBook.stars;
          count += 1;
        }
      });
    });

    rating = userStars / count;
    console.log(`average rating = ${rating}`);
  }

  userFeedback();

  return (
    <div className="detailContainer">
      <div className="single-book-view">
        <div className="flexCont">
          <div className="bookImg">
            <img src={book?.book_image} alt={book?.title} />
          </div>
          <div className="bookDetails">
            <h1 className="bookTitle">{book?.title}</h1>
            <p>
              <strong>Author:</strong> {book?.author}
            </p>
            <p>
              <strong>Publisher:</strong> {book?.publisher}
            </p>
            <p>{book?.date}</p>
            <p>
              <strong>Rank:</strong> {book?.rank}
            </p>
            <p>{book?.weeks}</p>
            <p>
              <strong>Description:</strong> {book?.description}
            </p>
          </div>
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
          <button className="btn" onClick={() => setModal(true)}>
            Buy
          </button>
          <button className="btn" onClick={handleClick}>
            Add to Library
          </button>
        </div>
        <div className="reviews">
          <ul className="reviews-list">
            {reviews.map((review) => (
              <li className="review-item">{review}</li>
            ))}
          </ul>
        </div>
      </div>
      {modal && (
        <div>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <button
                  className="modal-close-button"
                  onClick={() => setModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="links-container">
                {book?.buy_links.map((buy_link) => (
                  <a href={buy_link.url} target="_blank">
                    {buy_link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
