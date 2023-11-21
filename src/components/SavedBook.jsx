import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { editBookReview, removeBook } from "../services/libraries";

function SavedBook({ savedBook, libId, fetchLibrary, fetchLibraries }) {
  const [review, setReview] = useState(savedBook.comment);

  const ratingChanged = (newRating) => {
    editBookReview(libId, savedBook._id, { stars: newRating });
    fetchLibraries();
  };

  let prompt = "Leave a review: ";

  if (savedBook.comment) {
    prompt = "Edit your review: ";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the review submission, like sending it to an API or processing it further
    editBookReview(libId, savedBook._id, { comment: review });
    console.log("Submitted Review:", review);
    // Optionally, you can reset the form after submission
    setReview(review);
    fetchLibrary();
    fetchLibraries();
  };

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  async function handleClick() {
    await removeBook(libId, savedBook._id);
    fetchLibrary();
    console.log("book removed");
  }

  const title = savedBook.book.title
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  return (
    <div className="savedBook">
      <img className="lib-img" src={savedBook.book.book_image} alt={title} />
      <div className="lib-book-body">
        <div className="lib-book-heading">
          <p className="lib-book-title">{title}</p>
          <p>{savedBook.book.author}</p>
        </div>
        <div className="lib-book-middle">
          <div>
            <ReactStars
              count={5}
              value={savedBook.stars}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              {prompt}
              <input
                className="review-input-box"
                type="text"
                name="review"
                value={review}
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="lib-book-bottom">
          <p className="review">{savedBook.comment}</p>
          <div className="delete-book">
            <button onClick={handleClick}>Remove from Library</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedBook;
