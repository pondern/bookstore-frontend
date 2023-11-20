import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { editBookReview, removeBook } from "../services/libraries";

function SavedBook({ savedBook, libId, fetchLibrary }) {
  const [review, setReview] = useState(savedBook.comment);
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    editBookReview(libId, savedBook._id, { stars: newRating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the review submission, like sending it to an API or processing it further
    editBookReview(libId, savedBook._id, { comment: review });
    console.log("Submitted Review:", review);
    // Optionally, you can reset the form after submission
    setReview("");
    fetchLibrary();
  };

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  async function handleClick() {
    await removeBook(libId, savedBook._id);
    fetchLibrary();
    console.log("book removed");
  }

  return (
    <div className="savedBook">
      <img
        className="lib-img"
        src={savedBook.book.book_image}
        alt={savedBook.book.title}
      />
      <div>
        <ReactStars
          count={5}
          value={savedBook.stars}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Leave a review:
            <input
              type="text"
              name="review"
              value={review}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{savedBook.comment}</p>
        <button onClick={handleClick}>Remove from Library</button>
      </div>
    </div>
  );
}

export default SavedBook;
