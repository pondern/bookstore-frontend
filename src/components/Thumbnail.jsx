import { Link } from "react-router-dom";

function Thumbnail({ book }) {
  console.log(book.display_name);

  return (
    <div className="thumbnail-container">
      <Link to={`/${book._id}`}>
        <img
          className="thumbnail-image"
          src={book.book_image}
          alt={book.title}
        />
      </Link>
    </div>
  );
}

export default Thumbnail;
