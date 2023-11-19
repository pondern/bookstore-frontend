import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { editBookReview } from "../services/libraries";

function SavedBook({ savedBook, libId }) {
  const [review, setReview] = useState(savedBook.comment);

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
  };

  const handleChange = (e) => {
    setReview(e.target.value);
  };

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
      </div>
    </div>
  );
}

export default SavedBook;
