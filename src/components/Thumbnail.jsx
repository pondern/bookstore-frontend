import { Link } from "react-router-dom";

function Thumbnail({ book }) {
  return (
    <div>
      <Link to={`/${book._id}`}>
        <img className="book-thumbnails" src={book.image} alt={book.title} />
      </Link>
    </div>
  );
}

export default Thumbnail;
