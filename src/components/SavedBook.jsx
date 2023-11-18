import ReactStars from "react-rating-stars-component";
import { editBookReview } from "../services/libraries";

function SavedBook({ savedBook, libId }) {
  const ratingChanged = (newRating) => {
    editBookReview(libId, savedBook._id, { stars: newRating });
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
        <p>{savedBook.comment}</p>
      </div>
    </div>
  );
}

export default SavedBook;
